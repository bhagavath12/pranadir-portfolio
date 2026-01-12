import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    if (n8nWebhookUrl) {
      // We initiate the fetch but wrap it in a race
      const webhookPromise = fetch(n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).catch((err) => console.error("Webhook Background Error:", err));

      // This gives n8n a 1.5 second window to receive the data
      // Most webhooks finish in under 200ms
      await Promise.race([
        webhookPromise,
        new Promise((resolve) => setTimeout(resolve, 1500))
      ]);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ success: true });
  }
}