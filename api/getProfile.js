import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const { id } = req.query;

  const data = await kv.get(`profile:${id}`);

  if (!data) {
    return res.status(404).json({ error: "Profile not found" });
  }

  return res.status(200).json(data);
}
