import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const profile = req.body.profile;
  const id = crypto.randomUUID();

  // Save to KV database
  await kv.set(`profile:${id}`, profile);

  return res.status(200).json({ id });
}
