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
