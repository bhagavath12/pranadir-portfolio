import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    if (n8nWebhookUrl) {
      // FIRE AND FORGET: 
      // We do not 'await' this. The request starts, and we move on immediately.
      fetch(n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).catch((err) => console.error("Background Webhook Error:", err));
    }

    // ALWAYS return success to the frontend instantly
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    // Even on error, we return success so the user sees the 'Thank You' message
    return NextResponse.json({ success: true });
  }
}