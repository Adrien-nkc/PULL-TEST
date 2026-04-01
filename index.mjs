import "dotenv/config";
import OpenAI from "openai";

const client = new OpenAI();

const response = await client.responses.create({
  model: "gpt-4o-mini",
  input: "Write a one-sentence bedtime story about a unicorn.",
  temperature: 1.9,
});

console.log(JSON.stringify(response, null, 2));
