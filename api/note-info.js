import OpenAI from "openai";

export const config = { runtime: "nodejs" };

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  try {
    const note = req.query.note;

   const prompt = `
  Du er parfumør og skal skrive på DANSK.

  Forklar duftnoten "${note}" med parfume-faglige termer.

  Returnér KUN ren JSON i dette format — INGEN forklaringer:
  {
    "description": "4-5 linjers poetisk og sanselig beskrivelse på dansk",
    "origin": "kort om hvor noten stammer fra",
    "families": ["duftfamilier"],
    "mood": "hvordan noten føles i en parfume"
  }
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
