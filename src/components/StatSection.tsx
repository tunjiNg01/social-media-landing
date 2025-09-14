"use client";
import React from "react";

export default function StatSection(): React.ReactElement {
  return (
    <section className="py-16 font-sans px-6">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Drive more impact with your social media management tool, now.
        </h2>
        <p className="mt-3 text-slate-600">
          Everything you need to build modern UI and great products.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="rounded-xl bg-sky-50 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-sky-500">
              2,700+
            </div>
            <div className="mt-2 text-xs md:text-sm uppercase tracking-wider text-slate-700">
              Subscribers
            </div>
          </div>

          <div className="flex-1 text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-sky-500">
              20+
            </div>
            <div className="mt-2 text-xs md:text-sm uppercase tracking-wider text-slate-700">
              Integrations
            </div>
          </div>

          <div className="flex-1 text-center">
            <div className="text-4xl md:text-5xl font-extrabold text-sky-500">
              15+
            </div>
            <div className="mt-2 text-xs md:text-sm uppercase tracking-wider text-slate-700">
              Social platforms supported
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
