export const getAthletes = async (req, res, next) => {
  try {
    let {
      positions,
      nationality,
      min_age,
      max_age,
      min_height,
      max_height,
      min_weight,
      max_weight,
    } = req.query;

    let filters = {};

    if (positions && Array.isArray(positions)) {
      filters.positions = { $in: positions };
    } else if (positions) {
      filters.positions = positions;
    }

    if (nationality) {
      filters.nationality = nationality;
    }

    if (min_age || max_age) {
      filters["physical.age"] = {};
      if (min_age && !isNaN(parseInt(min_age)))
        filters["physical.age"].$gte = parseInt(min_age);
      if (max_age && !isNaN(parseInt(max_age)))
        filters["physical.age"].$lte = parseInt(max_age);
    }

    if (min_height || max_height) {
      filters["physical.height"] = {};
      if (min_height && !isNaN(parseInt(min_height)))
        filters["physical.height"].$gte = parseInt(min_height);
      if (max_height && !isNaN(parseInt(max_height)))
        filters["physical.height"].$lte = parseInt(max_height);
    }

    if (min_weight || max_weight) {
      filters["physical.weight"] = {};
      if (min_weight && !isNaN(parseInt(min_weight)))
        filters["physical.weight"].$gte = parseInt(min_weight);

      if (max_weight && !isNaN(parseInt(max_weight)))
        filters["physical.weight"].$lte = parseInt(max_weight);
    }

    const allAthletes = await Athlete.find(filters).populate("user");
    const count = await Athlete.countDocuments(filters);

    return res.status(200).json({
      success: true,
      message: `${count > 0 ? count : "no"} athletes retrieved`,
      filters,
      data: allAthletes,
    });
  } catch (err) {
    next(err);
  }
};

export const getSingleAthlete = async (req, res, next) => {
  try {
    const { id: athleteId } = req.params;
    const { userId: currentUserId } = req.session;

    const isCurrentUser = athleteId === currentUserId;

    const currentAthlete = await Athlete.findOne({
      $or: [{ _id: athleteId }, { user: athleteId }],
    })
      .populate("user")
      .select("-user.password");

    return res.status(200).json({
      success: true,
      message: "athlete info retrieved",
      data: { isCurrentUser, currentAthlete },
    });
  } catch (err) {
    next(err);
  }
};

export const createNewAthlete = async (req, res, next) => {
  try {
    const { userId: user } = req.session;
    if (!user) {
      return res.status(403).json({
        success: false,
        message: "user not logged in",
      });
    }

    const { bio, dob, height, weight, positions, nationality } = req.body;

    const profilePic = req.file;

    // let cloudinaryUpload;
    if (profilePic) {
      // cloudinaryUpload = cloudinary.upload(
      //   profilePic.path,
      //   (err, result) => {
      //     if (err) {
      //       throw new Error("Error uploading image to cloudinary");
      //     }
      //     return result;
      //   }
      // );
      // console.log("cloudinaryUpload", cloudinaryUpload);
    }

    const updates = {};

    if (
      bio ||
      dob ||
      height ||
      weight ||
      nationality ||
      profilePic ||
      cloudinaryUpload
    ) {
      updates.$set = {};

      if (bio) updates.$set.bio = bio;
      if (dob) updates.$set.dob = new Date(dob);
      if (height) updates.$set["physical.height"] = parseInt(height);
      if (weight) updates.$set["physical.weight"] = parseInt(weight);
      if (nationality) updates.$set.nationality = nationality.toLowerCase();
      // if (cloudinaryUpload) updates.$set.profilePic =  cloudinaryUpload.url;
      if (profilePic) updates.$set.profilePic = profilePic.path;
    }

    if (positions) {
      const positionsArray = Array.isArray(positions) ? positions : positions.split(',').map(p => p.trim());
      updates.$addToSet = { positions: { $each: positionsArray } };
    }

    const updatedAthlete = await Athlete.findOneAndUpdate(
      { $or: [{ _id: user }, { user }] },
      updates,
      { new: true }
    );

    if (!updatedAthlete) {
      const newAthlete = new Athlete({
        user,
        bio,
        dob: new Date(dob),
        physical: {
          height: parseInt(height),
          weight: parseInt(weight),
        },
        positions: Array.isArray(positions) ? positions : positions.split(',').map(p => p.trim()),
        nationality,
        profilePic: profilePic ? profilePic.path : null,
        // profilePic :  cloudinaryUpload.url;
      });

      await newAthlete.save();

      return res.status(201).json({
        success: true,
        message: "new athlete profile created",
        data: {
          newAthlete,
        },
      });
    }

    return res.status(201).json({
      success: true,
      message: "athlete profile edited successfully",
      data: {
        updates,
        updatedAthlete,
      },
    });
  } catch (err) {
    next(err);
  }
};
