import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { OpenAI } from "openai";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
app.use(express.json());
app.use(cors());

app.post("/chat", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).send("Prompt is required.");
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Use a chat completion model
      messages: [{role: 'system', content:`You are a medical assistant chatbot. Provide evidence based information to help with medical diagonsis and treatment plans. You're meant to specialize increasing patient turnover by assiting and confiriming nurse drive diagonsis on simple cases.`},{ role: "user", content: prompt }],
      max_tokens: 512,
      temperature: 0,
    });

    res.send(completion.choices[0].message.content.trim());
  } catch (error) {
    console.error("Error during OpenAI API call:", error);
    res.status(500).send("An error occurred while processing your request.");
  }
});

const PORT = 8020;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
