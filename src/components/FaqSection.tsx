"use client";

import React, { useState } from "react";

const DEFAULT_FAQS: { q: string; a: string }[] = [
  {
    q: "What is the AI-Driven Social Media Management & Post Scheduling Tool?",
    a: "A platform that helps teams plan, schedule, and optimize content across social channels using AI-powered suggestions, scheduling and analytics.",
  },
  {
    q: "Which social media platforms can I manage with this tool?",
    a: "Most major platforms are supported, including Facebook, Instagram, Twitter (X), LinkedIn, TikTok and YouTube. Integrations may vary by plan.",
  },
  {
    q: "How much time do I need to spend using this tool?",
    a: "It depends on your workflow — many customers save hours per week by batching content and using scheduled posts and AI suggestions.",
  },
  {
    q: "Can I manage multiple social media accounts?",
    a: "Yes. The platform supports multiple accounts and team roles so you can manage clients or brand accounts from one dashboard.",
  },
  {
    q: "Does this tool include analytics and reporting?",
    a: "Yes — built-in analytics help you measure post performance, audience growth and campaign effectiveness. Exportable reports are available.",
  },
  {
    q: "How does AI-powered ad management work?",
    a: "AI helps with creative suggestions, audience recommendations and performance-based budget allocation to improve campaign efficiency.",
  },
  {
    q: "How does the auto-reply and chatbot integration work?",
    a: "Connect chat channels and configure automated replies using templates and AI-generated responses to improve response times.",
  },
  {
    q: "Is this tool scalable for different business types?",
    a: "Yes. The platform supports solo users up to large teams with role-based permissions, collaboration and enterprise integrations.",
  },
  {
    q: "What do users say about this tool?",
    a: "Users praise the time savings, content planning features and analytics. Case studies are available on the website.",
  },
  {
    q: "Can I run ad campaigns with this tool?",
    a: "Yes — campaign creation, management and tracking are part of the platform. Ad integrations depend on connected networks.",
  },
];

export default function FaqSection({
  faqs = DEFAULT_FAQS,
}: Readonly<{ faqs?: { q: string; a: string }[] }>) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section id="faq" className="py-16 font-sans px-4">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-sm text-sky-500 font-semibold uppercase">
          Have any questions?
        </p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((item, i) => {
          const open = openIndex === i;
          return (
            <div
              key={i}
              className={`bg-white rounded-lg shadow-sm overflow-hidden transition-shadow duration-150 ${
                open ? "ring-1 ring-sky-100" : ""
              }`}
            >
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`faq-${i}`}
                onClick={() => toggle(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(i);
                  }
                }}
                className="w-full text-left px-4 sm:px-6 py-4 flex items-center justify-between gap-4"
              >
                <span className="text-sm sm:text-base text-slate-800">
                  {item.q}
                </span>
                <span
                  className={`inline-flex items-center justify-center h-8 w-8 rounded-full bg-white transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="h-4 w-4 text-slate-400"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M6 8l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <div
                id={`faq-${i}`}
                className={`px-4 sm:px-6 pb-4 text-sm text-slate-700 transition-[max-height,opacity] duration-200 ease-in-out ${
                  open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{ overflow: "hidden" }}
                aria-hidden={!open}
              >
                <div className="pt-1 pb-2">{item.a}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center text-sm text-slate-600">
        Still have any questions?{" "}
        <a href="#" className="text-sky-500 hover:underline">
          Contact us
        </a>
      </div>
    </section>
  );
}
