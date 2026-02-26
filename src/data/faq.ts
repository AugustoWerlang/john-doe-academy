export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export const faq = [
  {
    question: "How long does it take to get a private pilot license?",
    answer:
      "Most students earn their Private Pilot Certificate in 3 to 6 months, depending on how often they fly. The FAA requires a minimum of 40 flight hours, though the national average is closer to 60–70 hours. We offer flexible scheduling so you can train at a pace that works for your life.",
  },
  {
    question: "What are the requirements to start flight training?",
    answer:
      "You must be at least 16 to solo and 17 to earn your Private Pilot Certificate. You'll need to read and speak English, obtain an FAA medical certificate from an Aviation Medical Examiner (AME), and have the motivation to learn. No prior experience is needed — that's what we're here for.",
  },
  {
    question: "How much does flight training cost?",
    answer:
      "Private Pilot training typically costs between $12,000 and $18,000 depending on how quickly you progress. This includes aircraft rental, instructor fees, ground school materials, and exam fees. We offer transparent pricing with no hidden costs, and financing options are available.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes. We partner with several aviation financing providers to make flight training accessible. Options include monthly payment plans and flight training loans. Our team can walk you through the available options during your first visit.",
  },
  {
    question: "What happens during a discovery flight?",
    answer:
      "During your 30-minute discovery flight, you'll meet your instructor, do a pre-flight walkthrough of the aircraft, then take the controls for a scenic flight over Austin. You'll practice basic maneuvers like turns and climbs while your instructor handles the rest. It's the best way to find out if flying is right for you.",
  },
  {
    question: "Can I fly if I wear glasses or have a medical condition?",
    answer:
      "Most people can fly. The FAA medical standards are more flexible than many expect. Corrected vision with glasses or contacts is perfectly fine. Many medical conditions that seem disqualifying actually have pathways to certification. We recommend scheduling an appointment with an AME early in the process.",
  },
  {
    question: "What's the difference between Part 61 and Part 141 training?",
    answer:
      "Part 61 offers flexible, individualized training — you progress at your own pace with a personalized curriculum. Part 141 is a more structured, FAA-approved program with a fixed syllabus and reduced hour requirements. John Doe Academy operates under Part 61, giving you the flexibility to train around your schedule.",
  },
] satisfies readonly FaqItem[];
