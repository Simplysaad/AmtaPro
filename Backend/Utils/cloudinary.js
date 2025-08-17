import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export default cloudinary.v2;

export async function uploadImages(...paths) {
  try {
    let uploadPromises = paths.map((path) => {
      cloudinary.v2.uploader.upload(path, {
        // crop: crop,
        // aspect_ratio: "1:1",
        // width: 500,
        // height: 500,
      });
    });

    const results = await Promise.all(uploadPromises);

    return results//.map((r) => r.secure_url);
  } catch (err) {
    console.error(err)
  }
}
