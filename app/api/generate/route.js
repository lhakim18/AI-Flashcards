import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
/* const systemPrompt = `You are a flashcard creator. Your job is to generate exactly 10 effective and concise flashcards based on the given topic or content. Follow these guidelines:
1. Create clear and concise questions for the front of the flashcard.'
2. Provide accurate and informative answers for the back of the flashcard.
3. Ensure that each flashcard focuses on a single concept or piece of information.
Your output should follow this format:
{
  "flashcards": [
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}
    `;

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

async function run() {
    const prompt = "Write a story about an AI and magic"
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
  
  run(); */
/*
  export async function POST(req){
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel(
      { model: "gemini-1.5-flash",  generationConfig: { responseMimeType: "application/json" }}
    );
    const data = await req.text()

    const completion = await model.generateContent({
      contents: [
        { role: "user", parts: [{ text: systemPrompt }] },
        { role: "user", parts: [{ text: data }] },
      ],
    });
    const flashcards = JSON.parse(completion.response.text());
    console.log("flashcards", flashcards);
    
    return NextResponse.json(flashcards.flashcards);
}
  */
/*
  export async function POST(req){
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel(
      { model: "gemini-1.5-flash",  response_format: {type: 'json_object'}}
    );
    const data = await req.text()

    const completion = await genAI.chat.completions.creat({
      messages: [
        { role: "system", content: systemPrompt},
        { role: "user", content: data},
      ],
      response_format: {type: 'json_object'},
      
    });
    console.log(completion.choices[0].message.content)
    const flashcards = JSON.parse(completion.choices[0].message.content);

    return NextResponse.json(flashcards.flashcards)

  }*/


const systemPrompt = `
You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
Both front and back should be one sentence long.
You should return in the following JSON format:
{
  "flashcards":[
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}
`

  export async function POST(req) {
    const genai = new GoogleGenerativeAI(API_KEY);
    const data = await req.text()
  
    const completion = await genai.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: data },
      ],
      model: "gemini-1.5-flash",
      response_format: { type: 'json_object' },
    })
     // Parse the JSON response from the OpenAI API
  const flashcards = JSON.parse(completion.choices[0].message.content)

  // Return the flashcards as a JSON response
  return NextResponse.json(flashcards.flashcards)
   }
    // We'll process the API response in the next step
  

