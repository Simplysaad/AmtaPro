# API Documentation

## Overview

AmtaPro is a dynamic web platform designed to bridge the gap between aspiring footballers and clubs, scouts, and academies worldwide. The site offers footballers a dedicated space to build their online profile and highlight their passion for the game.

This API is dedicated to the amta.pro frontend, 

### Base url 
`https://api.amta.pro`

## Getting started

## Authentication

Authentication could be in any of three ways depending on the user role:
- By user login (athlete/admin/academy) 
- token-based authentication
- Using API key (admin only)

see `../Middlewares/auth.middleware.js` for more code clarity


## Endpoints



### Register new user

- `POST /user`
- Headers:
- `Authorization: YOUR_API-KEY`
- `Content-Type: application/json`
- Body:
 ``` json
 {
  "name": "jane doe",
  "emailAddress": "jane@doe.com",
  "password": "john1234"
}
```
- Response:
  `201 Created`
 ``` json
 {
  "success": true,
  "message": "new athlete profile created",
  "data": {
    "newAthlete": {
      "name": "jane doe",
      "emailAddress": "jane@doe.com",
      "password": "$2b$12$/peMFEIGrzT6FA96C7W4WeEsj55DaDkBTuKiuk3rBW5dH3NygByaO",
      "createdAt": "2025-07-29T07:33:02.423Z",
      "updatedAt": "2025-07-29T07:33:02.423Z",
      "__v": 0
    }
  }
}
```

### Create Athlete profile


### Retrieved a single athlete profile

- GET `/athletes/:id`
- Headers:
- `Authorization: YOUR_API_KEY`
- Response:
 `200 OK`
 ```json
{
  "success": true,
  "message": "athlete info retrieved",
  "data": {
    "isCurrentUser": false,
    "currentAthlete": {
      "physical": {
        "height": "178cm",
        "weight": "72kg",
        "age": 25
      },
      "meta": {
        "profileViews": 310
      },
      "_id": "6887e150b01ceaad107dfa0e",
      "name": "Kelechi Okoye",
      "emailAddress": "kelechi.okoye10@example.com",
      "nationality": "Nigeria",
      "hiddenFields": [
        "emailAddress"
      ],
      "bio": "Pacy winger with a keen eye for goal. Former youth captain at Enyimba FC.",
      "dob": "1999-04-12T00:00:00.000Z",
      "positions": [
        "forward",
        "striker"
      ],
      "socials": [
        {
          "name": "Instagram",
          "url": "https://instagram.com/kelechiokoye10"
        },
        {
          "name": "Twitter",
          "url": "https://twitter.com/okoyekelechi"
        }
      ],
      "media": [
        {
          "type": "video",
          "url": "https://example.com/videos/okoye-highlight.mp4",
          "description": "Highlight reel from 2024 season"
        }
      ],
      "__v": 0,
      "createdAt": "2025-07-28T20:45:04.997Z",
      "updatedAt": "2025-07-28T20:45:04.997Z"
    }
  }
}
```

## Error codes and handling

## Code samples