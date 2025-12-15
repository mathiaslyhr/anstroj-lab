// api/note-info.js
import OpenAI from "openai";
export const config = {
  runtime: "nodejs"
};


const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ligger KUN på serveren
});

// Klassisk HTTP handler (Vercel / Node / Express-lignende)
export default async function handler(req, res) {
  try {
    const note = req.query.note; // fx "musk" eller "amber"

    if (!note) {
      return res.status(400).json({ error: "Missing note parameter" });
    }

    const prompt = `
      Du er parfumør.
      Forklar duftnoten "${note}" med fokus på parfume:

      Returnér KUN ren JSON i dette format:
      {
        "description": "4-5 linjers poetisk og sanselig beskrivelse",
        "origin": "kort om hvor noten typisk stammer fra",
        "families": ["en eller flere duftfamilier"],
        "mood": "hvordan noten føles i en parfume"
      }
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: prompt }],
    });

    let raw = completion.choices[0].message.content || "";

    // Fjern evt. ```json ``` omkring svaret
    raw = raw.replace(/```json|```/g, "").trim();

    const parsed = JSON.parse(raw);

    return res.status(200).json({
      note,
      ...parsed,
    });
  } catch (err) {
    console.error("OpenAI error:", err);
    return res.status(500).json({
      error: true,
      message: "Kunne ikke generere note-info",
    });
  }
}
