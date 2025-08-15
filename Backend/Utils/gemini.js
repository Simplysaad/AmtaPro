// import { GoogleGenAI } from "@google/genai";
// import { config } from "dotenv";
// config();

// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// const prompt = `I want you to provide me with 20 real news articles about sports published today, ${Date.now()}. Focus mostly on football-related news, but include some articles covering other sports as well (like basketball, tennis, cricket, etc.).

// Please return the results strictly in the following JSON format:

// {
// "status": "ok",
// "totalResults": 10,
// "articles": [
// {
// "source": {
// "id": "source-id-or-null",
// "name": "source-name"
// },
// "author": "author's name or null if unavailable",
// "title": "headline of the article",
// "description": "brief summary or snippet of the article",
// "url": "direct link to full article",
// "urlToImage": "link to an image associated with the article or null",
// "publishedAt": "ISO 8601 date and time of article publication",
// "content": "main content or excerpt of the article"
// }
// // total 10 articles
// ]
// }

// Make sure each article object contains all the above fields with accurate, up-to-date information from today. The "status" field should reflect success, and "totalResults" should be exactly 10.

// Do not include any explanations or extra text beyond the JSON response.

// Focus on authentic and verified news sources to ensure reliable reporting.

// If some info is missing (like author or image), use null.`;

// export default async function generateNews() {
//   try {
//     const response = await ai.models.generateContent({
//       model: "gemini-2.5-flash",
//       contents: [{ text: "prompt" }],
//       config: {
//         responseMimeType: "application/json",
//         responseSchema: {
//           type: "object",
//           properties: {
//             status: { type: "string" },
//             totalResults: { type: "integer" },
//             articles: {
//               type: "array",
//               items: {
//                 type: "object",
//                 properties: {
//                   source: {
//                     type: "object",
//                     properties: {
//                       id: { type: ["string", "null"] },
//                       name: { type: "string" },
//                     },
//                     required: ["name"],
//                   },
//                   author: { type: ["string", "null"] },
//                   title: { type: "string" },
//                   description: { type: "string" },
//                   url: { type: "string" },
//                   urlToImage: { type: ["string", "null"] },
//                   publishedAt: { type: "string" },
//                   content: { type: "string" },
//                 },
//                 required: [
//                   "source",
//                   "author",
//                   "title",
//                   "description",
//                   "url",
//                   "urlToImage",
//                   "publishedAt",
//                   "content",
//                 ],
//               },
//             },
//           },
//           required: ["status", "totalResults", "articles"],
//         },
//       },
//     });
//     console.log(response.text); // Print the generated JSON
//     return response.text;
//   } catch (error) {
//     console.error("Error generating news:", error);
//   }
// }

// generateNews();

import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "dotenv";
config();

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = ai.getGenerativeModel({ model: "gemini-2.5-pro" });

export default const generate = async () => {
  try {
    const prompt = "what's the weather like today!";
    const response = await model.generateContent({
      contents: [{ text: "what's the weather like today?" }],
    });
    console.log({ text: response.text });
  } catch (error) {
    console.error({ error: error.message });
  }
};

generate();
