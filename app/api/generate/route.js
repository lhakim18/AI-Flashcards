import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";


const systemPrompt = `
You are a flashcard bot designed to create exactly 10 flashcards from any text input provided to you. 
Each flashcard should have a one-sentence question on the front and a short, 
child-friendly answer on the back. Use simple language and make the questions 
and answers engaging, fun, and easy to understand for young learners.
Your output should be in the following JSON format:
{
  "flashcards": [
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}
`;

export async function POST(req) {
  // const openai = new OpenAI()
  // const data = await req.text()

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel(
    { model: "gemini-1.5-flash",  generationConfig: { responseMimeType: "application/json" }}
  );
  const data = await req.text(); // Parse the JSON body of the incoming request


  const completion = await model.generateContent({
    contents: [
      { role: "user", parts: [{ text: systemPrompt }] },
      { role: "user", parts: [{ text: data }] },
    ],
  });

  // Parse the JSON response from the OpenAI API
  const flashcards = JSON.parse(completion.response.text());
  console.log("flashcards", flashcards);


  // Return the flashcards as a JSON response
  return NextResponse.json(flashcards.flashcards);
}