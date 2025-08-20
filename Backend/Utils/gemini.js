const instruction = `I want you to provide me with 20 real news articles about sports published today, ${Date.now()}. Focus mostly on football-related news, but include some articles covering other sports as well (like basketball, tennis, cricket, etc.). Make sure each article object contains all the above fields with accurate, up-to-date information from today. The "status" field should reflect success, and "totalResults" should be exactly 10. Focus on authentic and verified news sources to ensure reliable reporting.`;
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const schema = {
  type: "object",
  properties: {
    status: { type: "string" },
    totalResults: { type: "integer" },
    articles: {
      type: "array",
      items: {
        type: "object",
        properties: {
          source: {
            type: "object",
            properties: {
              id: { type: ["string", "null"] },
              name: { type: "string" },
            },
            required: ["name"],
          },
          author: { type: ["string", "null"] },
          title: { type: "string" },
          description: { type: "string" },
          url: { type: "string" },
          imageUrl: { type: ["string", "null"] },
          publishedAt: { type: "string" },
          content: { type: "string" },
        },
        required: [
          "source",
          "author",
          "title",
          "description",
          "url",
          "imageUrl",
          "publishedAt",
          "content",
        ],
      },
    },
  },
  required: ["status", "totalResults", "articles"],
};

export async function generateNews(req, res, next) {
  // const {prompt} = req.body

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:
      "What is the reason alexander isak name is becoming quite popular in the past month?",
    // "What are the major developments and announcements from across the sports industry in the past month?",
    config: {
      responseMimeType: "application/json",
      responseSchema: schema,
      systemInstruction: instruction,
      // "make sure the url and imageUrl are from an actual source and that the image is an unsplash image relevant to the news article",
    },
  });

  console.log(
    "response",
    JSON.parse(response.candidates[0].content.parts[0].text)
  );
  return res.status(200).json({
    success: true,
    message: "news retrieved successfully",
    news: JSON.parse(response.candidates[0].content.parts[0].text),
  });
}
