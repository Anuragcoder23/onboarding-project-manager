export default async function handler(req, res) {
  try {

    const body = req.body || {};
    const messages = body.messages || [
      { role: "user", content: "Hello" }
    ];

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "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",
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

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}
