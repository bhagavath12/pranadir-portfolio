import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!n8nWebhookUrl) {
      console.error("N8N_WEBHOOK_URL not set");
      return NextResponse.json({ success: false }, { status: 500 });
    }

    // Fire-and-forget webhook call
    fetch(n8nWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).catch((err) => {
      console.error("Webhook send failed:", err);
    });

    // Always return success to frontend
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
