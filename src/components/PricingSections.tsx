"use client";
import React from "react";

const plans = [
  {
    price: "$10/mth",
    name: "Basic plan",
    subtitle: "Billed annually.",
    features: [
      "Access to all basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20GB individual data each user",
      "Basic chat and email support",
    ],
  },
  {
    price: "$20/mth",
    name: "Business plan",
    subtitle: "Billed annually.",
    features: [
      "200+ integrations",
      "Advanced reporting and analytics",
      "Up to 20 individual users",
      "40GB individual data each user",
      "Priority chat and email support",
    ],
    popular: true,
  },
  {
    price: "$40/mth",
    name: "Enterprise plan",
    subtitle: "Billed annually.",
    features: [
      "Advanced custom fields",
      "Audit log and data history",
      "Unlimited individual users",
      "Unlimited individual data",
      "Personalised+priority service",
    ],
  },
];

export default function PricingSections(): React.ReactElement {
  return (
    <section id="pricing" className="py-20 container mx-auto font-sans px-4">
      <div className="max-w-6xl mx-auto text-left mb-12">
        <p className="text-sm text-sky-500 font-semibold uppercase">Pricing</p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
          Simple, transparent pricing
        </h2>
        <p className="mt-3 text-slate-600">
          We believe Untitled should be accessible to all companies, no matter
          the size.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {plans.map((p, i) => (
          <div
            key={i}
            className={`relative bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-6 transition-transform duration-200 ${
              p.popular ? "-mt-4 shadow-lg scale-100 md:scale-105" : ""
            }`}
          >
            {p.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="inline-flex items-center gap-2 text-sm text-sky-500">
                  <svg
                    className="h-6 w-6 -rotate-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M12 2c0 0 4 2 6 6s2 6 2 6"
                      stroke="#0ea5e9"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sky-500 font-semibold">
                    Most popular!
                  </span>
                </div>
              </div>
            )}

            <div className="mt-2">
              <div className="text-4xl font-extrabold text-slate-900">
                {p.price}
              </div>
              <div className="mt-2 text-sm text-slate-600">{p.name}</div>
              <div className="text-xs text-slate-400">{p.subtitle}</div>
            </div>

            <ul className="flex-1 space-y-3 mt-2">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-50 text-emerald-600 inline-flex items-center justify-center mt-1">
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414L8.414 15 4.293 10.879a1 1 0 011.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#"
                className={`inline-block text-center px-4 py-3 rounded-lg font-semibold text-white ${
                  p.popular
                    ? "bg-sky-500 hover:bg-sky-600"
                    : "bg-sky-500 hover:bg-sky-600"
                }`}
              >
                Get started
              </a>
              <a
                href="#"
                className="text-center px-4 py-2 rounded-lg border border-slate-200 text-slate-700"
              >
                Chat to sales
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
