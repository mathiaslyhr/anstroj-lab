import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  try {
    const { message } = req.body;

    const systemPrompt = `
      Du er Anstrøgs parfumeassistent.
      Du svarer roligt, nordisk, ærligt og med fokus på
      parfumer, noter, duftfamilier og anbefalinger.
      Du må kun tale om parfumeverdenen.
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ]
    });

    res.status(200).json({
      reply: completion.choices[0].message.content
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Chat API fejl" });
  }
}
