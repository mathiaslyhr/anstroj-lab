export default async function (req, res) {
  const note = req.query.note;

  if (!note) {
    return res.status(400).json({ error: "Missing note parameter" });
  }

  const exampleData = {
    description: `Dette er en udvidet beskrivelse for noten: ${note}.`,
    origin: "Fragrance taxonomy",
    families: ["Floral", "Citrus", "Woody"]
  };

  return res.status(200).json({
    note,
    ...exampleData
  });
}
