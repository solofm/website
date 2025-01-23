import { FaqItem } from "../components/FaqItem";

export const faqData = [
  {
    id: 1,
    question: "What makes SOL OnlyFans Management unique?",
    answer:
      "At SOL OnlyFans Management, excellence is at the heart of what we do. Our USA-based team of skilled professionals crafts sophisticated strategies that consistently deliver superior results. We’re committed to transforming your OnlyFans career into an extraordinary success story.",
  },
  {
    id: 2,
    question: "What are the costs associated with your services?",
    answer:
      "We operate on a performance-based model, meaning no upfront fees. We only earn when you do. This aligns our success with yours, reflecting our dedication to achieving profitable outcomes together.",
  },
  {
    id: 3,
    question: "Do you require a contract?",
    answer: "For clarity and mutual protection, we do require contracts. However, we prioritize flexibility; contracts can be canceled with just a week's notice. Monthly renewals highlight our creators' trust and our commitment to delivering ongoing success.",
  },
  {
    id: 4,
    question: "How do I get started with SOL OnlyFans Management?",
    answer: "Getting started is simple. Apply through our website and share some details about yourself. If there’s a potential match, we’ll arrange a call to discuss your experience, goals, and how our services can elevate your brand. Once we decide to collaborate, we’ll guide you through an easy onboarding process.",
  },
  {
    id: 5,
    question: "What benefits can SOL OnlyFans Management offer me?",
    answer: "We provide a comprehensive review of your account to set the stage for exceptional growth. By eliminating barriers and leveraging innovative marketing and account management strategies, we help you maximize earnings and bring your creative vision to life.",
  },
  {
    id: 6,
    question: "Who owns my content?",
    answer:
      "You retain full ownership of your content. We only manage and promote it on your behalf, ensuring your rights remain entirely yours.",
  },
  {
    id: 7,
    question: "How many creators do you work with?",
    answer:
      "Currently, we collaborate with fewer than 15 creators. This approach ensures we can dedicate the time, energy, and personalized attention needed to help each creator achieve their fullest potential.",
  },
  {
    id: 8,
    question: "When will I start seeing results?",
    answer:
      "Results are typically noticeable within 7 to 30 days. Our mission is to deliver the tangible outcomes you’re seeking by joining an agency, and we’re fully equipped to make that happen.",
  },
  {
    id: 9,
    question: "Do I need professional photos or videos?",
    answer:
      "Professional equipment isn’t necessary. We provide clear guidance and examples of the type of content that works best. Your phone’s camera is more than enough; just as creators can dominate TikTok with an iPhone, you can achieve similar success on OnlyFans.",
  },
  {
    id: 10,
    question: "How frequently will we communicate?",
    answer:
      "We offer 24/7 support, whether you prefer daily updates or weekly check-ins. Our team uses a seamless group chat system to provide personalized attention, answer your questions promptly, and ensure your satisfaction remains our top priority.",
  },
];

export default function Faq() {
  const halfLength = Math.ceil(faqData.length / 2);
  const firstColumn = faqData.slice(0, halfLength);
  const secondColumn = faqData.slice(halfLength);

  return (
    <section className="bg-pink-50/70 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-medium tracking-tight md:text-5xl text-p4">
          Frequently Asked Questions
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            {firstColumn.map((item) => (
              <FaqItem key={item.id} question={item.question} answer={item.answer} />
            ))}
          </div>
          <div className="space-y-4">
            {secondColumn.map((item) => (
              <FaqItem key={item.id} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
