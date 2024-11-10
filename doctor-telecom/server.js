import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { OpenAI } from "openai";
import {Client} from "@googlemaps/google-maps-services-js";

dotenv.config();

const client = new Client({});
const searchHospitals = async (latitude, longitude) => {
  try {
    const response = await client.placesNearby({
      params: {
        location: {lat: latitude, lng: longitude},
        radius: 50000,
        type: "hospital",
        key: process.env.GOOGLEMAPS_API_KEY,
      }
    });
    //console.log(response.data.results);
    return response.data.results;
  } catch (e) {
    if (e.response && e.response.data && e.response.data.error_message) {
      console.error("API Error:", e.response.data.error_message);
    } else {
      console.error("Error:", e.message);
    }
    return [];
  }
}; 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
app.use(express.json());
app.use(cors());

app.post("/search", async (req, res)=> {
  try {
    const {latitude, longitude} = req.body;
    const hospitals = await searchHospitals(latitude, longitude);
    const hospitalData = hospitals.map((hospital) => ({
      name: hospital.name,
      address: hospital.vicinity,
      location: hospital.geometry.location,
    }));
    res.json({hospitals: hospitalData});
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

app.post("/chat", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).send("Prompt is required.");
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-2024-08-06", 
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
