import OpenAI from "openai";

export const config = { runtime: "nodejs" };

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  try {
    const note = req.query.note;

    const prompt = `
      Returnér kun dette JSON objekt:
      {
        "description": "...",
        "origin": "...",
        "families": ["..."],
        "mood": "..."
      }

      Udfyld det baseret på duftnoten "${note}".
    `;

    const response = await client.responses.create({
     model: "gpt-4o-mini",
      input: prompt
    });

    let raw = response.output_text; // responses API output
    raw = raw.replace(/```json|```/g, "");

    const json = JSON.parse(raw);

    return res.status(200).json(json);

  } catch (err) {
    console.error("API ERROR:", err);

    return res.status(500).json({
      error: true,
      message: "Kunne ikke generere note-info",
      debug: String(err)
    });
  }
}
