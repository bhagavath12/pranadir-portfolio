export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "How do you ensure AI doesn't hallucinate or give wrong info?",
    answer: "I implement 'Guardrails' and 'Few-Shot Prompting.' By using RAG (Retrieval Augmented Generation), the AI only answers based on your verified data, not random internet info."
  },
  {
    question: "Do I need to manage the servers for these systems?",
    answer: "No. I build on serverless infrastructure or cloud-hosted platforms like n8n Cloud or Supabase. You get the power of enterprise automation with zero maintenance headache."
  },
  {
    question: "How long does a typical system take to deploy?",
    answer: "A standard Inbound Lead or RAG agent typically moves from architecture to production in 7-14 days, depending on the complexity of your current tech stack."
  },

  {
    question: "How is pricing handled?",
    answer: "Flexible and scope-based. Open to pilots, fixed builds, or collaboration-style engagements."
  }
];