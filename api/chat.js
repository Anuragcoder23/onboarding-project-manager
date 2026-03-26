export default async function handler(req, res) {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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",
        "HTTP-Referer": "https://vercel.app",
        "X-Title": "AI PM Agent"
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
