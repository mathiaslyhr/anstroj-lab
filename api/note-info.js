import OpenAI from "openai";

export const config = {
  runtime: "nodejs",
};

export default async function handler(req, res) {
  try {
    const note = req.query.note;
    if (!note) return res.status(400).json({ error: "Missing note parameter" });

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const prompt = `
      Du er parfumør.
      Forklar duftnoten "${note}" i ren JSON:

      {
        "description": "4-5 linjers poetisk duftbeskrivelse",
        "origin": "hvor noten kommer fra",
        "families": ["duftfamilier"],
        "mood": "stemningen noten giver"
      }

      INGEN forklaringer eller tekst udenfor JSON.
    `;

    const result = await client.responses.create({
      model: "gpt-4.1-mini",
      input: prompt
    });

    let text = result.output_text;
    text = text.replace(/```json|```/g, "").trim();

    const parsed = JSON.parse(text);
    return res.status(200).json(parsed);

  } catch (err) {
    console.error("NOTE-INFO ERROR:", err);
    return res.status(500).json({
      error: true,
      message: "Kunne ikke generere note-info"
    });
  }
}
