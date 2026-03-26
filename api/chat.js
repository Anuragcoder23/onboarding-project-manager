export default async function handler(req, res) {
  try {

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const body = req.body || {};
    const messages = body.messages || [
      { role: "user", content: "Hello" }
    ];

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://onboarding-project-manager.vercel.app",
        "X-Title": "AI Project Manager"
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b",
        messages: messages
      })
    });

    const data = await response.json();

    return res.status(200).json(data);

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Server crashed",
      details: error.message
    });
  }
}
