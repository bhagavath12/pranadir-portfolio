export type SystemItem = {
  name: string;
  intent: string;
  videoType: "youtube" | "linkedin" | "none";
  videoUrl?: string;
  replaces: string[];
  techSpecs: string[]; // Added this to support your tech stack list
};

export const systems: SystemItem[] = [
  {
    name: "Inbound Lead Response System",
    intent: "Ensures every inbound lead is contacted instantly and routed correctly.",
    videoType: "youtube",
    videoUrl: "https://www.youtube.com/embed/v2SeMEhNcQA",
    replaces: [
      "Manual lead checks",
      "Delayed first responses",
      "Missed follow-ups",
    ],
    techSpecs: ["n8n", "Webhook API", "Gemini API", "Google API", "Slack API"],
  },
  {
    name: "RAG Knowledge Agent",
    intent: "Allows teams to query internal documents and data using natural language inside ZOHO Cliq.",
    videoType: "none",
    replaces: [
      "Manual document searching",
      "Repeated internal questions",
      "Knowledge silos",
    ],
    techSpecs: ["n8n", "Supabase", "Gemini API", "Zoho Cliq API"],
  },
  {
    name: "Voice Agent → CRM Update System",
    intent: "Captures voice interactions and automatically updates CRM and follow-up workflows.",
    videoType: "linkedin",
    videoUrl: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7400903030092640256",
    replaces: [
      "Manual call logging",
      "Human data entry",
      "Missed post-call actions",
    ],
    techSpecs: ["Vapi", "n8n", "Google API", "Custom CRM"],
  },
  {
    name: "Onboarding Automation System",
    intent: "Automates client onboarding steps to ensure consistent and frictionless handoff.",
    videoType: "linkedin",
    videoUrl: "https://www.linkedin.com/embed/feed/update/urn:li:activity:7384667979575123968",
    replaces: [
      "Manual onboarding tasks",
      "Checklist-based handoffs",
      "Inconsistent client experience",
    ],
    techSpecs: ["n8n", "Python", "Slack API", "ClickUp API", "Gemini API", "Google API"],
  },
];