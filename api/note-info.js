import OpenAI from "openai";

const client = new OpenAI({
   apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  const note = req.query.note;

  if (!note) {
    return res.status(400).json({ error: "Missing note parameter" });
  }

  try {
    // Prompt til OpenAI — genererer professionel duftnote-beskrivelse
    const prompt = `
      Du er parfumør. 
      Forklar duftnoten "${note}" i korte, præcise afsnit:

      1) En udvidet, poetisk og sensorisk beskrivelse (maks 4–5 linjer)
      2) Oprindelse: Hvor noten typisk udvindes fra
      3) Duftfamilier: Hvilke olfaktoriske familier den bruges i
      4) Stemning/energi noten giver i parfumer

      Svar i JSON med følgende format:
      {
        "description": "...",
        "origin": "...",
        "families": ["...", "..."],
        "mood": "..."
      }
    `;

    const completion = await client.responses.create({
      model: "gpt-4.1-mini",
      input: prompt
    });

    const message = completion.output[0].content[0].text;
    const parsed = JSON.parse(message);

    res.status(200).json({
      note,
      ...parsed
    });

  } catch (err) {
    console.error("OpenAI error:", err);
    res.status(500).json({ error: "Failed generating note info" });
  }
}
