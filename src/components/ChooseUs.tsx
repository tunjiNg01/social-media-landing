"use client";
import React from "react";
import Image from "next/image";

const cards = [
  {
    title: "Manage Social Media Networks",
    desc: "All your platforms, one dashboard.",
  },
  {
    title: "Streamline Workflows",
    desc: "Work faster, better, together.",
  },
  {
    title: "Gather Deeper Insights",
    desc: "Learn what drives engagement and growth.",
  },
  {
    title: "Amplify Brand Awareness",
    desc: "Grow your presence with powerful tools.",
  },
  {
    title: "Drive More Sales",
    desc: "Turn followers into customers.",
  },
  {
    title: "Personalize Customer Care",
    desc: "Deliver human-like responses at scale.",
  },
  {
    title: "Influencer Management",
    desc: "Build authentic partnerships that convert.",
  },
];

export default function ChooseUs(): React.ReactElement {
  return (
    <section className="py-16 font-sans px-6">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <p className="text-sm text-sky-500 font-semibold uppercase">
          Solutions
        </p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
          Why Choose Us?
        </h2>
        <p className="mt-3 text-slate-600">
          {`We don’t just manage posts. We transform how you connect with your
          audience.`}
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => {
            const isLast = i === cards.length - 1;
            // center the last card in large screens
            const extraClass = isLast ? "lg:col-start-2 lg:col-end-3" : "";
            return (
              <div
                key={c.title}
                className={`${extraClass} bg-white rounded-lg border border-transparent hover:border-slate-100 shadow-sm p-6 flex flex-col items-start gap-4`}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-sky-50">
                  <div className="h-8 w-8 flex items-center justify-center">
                    <Image
                      src="/icons/choose.png"
                      alt="icon"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                <h3 className="text-lg text-center font-semibold text-slate-900">
                  {c.title}
                </h3>
                <p className="text-sm text-center text-slate-600">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
