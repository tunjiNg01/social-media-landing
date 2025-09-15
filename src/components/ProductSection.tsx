"use client";

import React from "react";
import Image from "next/image";

type Feature = { title: string; desc: string; color?: string; icon?: string };

const FEATURES: Feature[] = [
  {
    title: "Competition Monitoring",
    desc: "Track competitor performance, analyze their strategies, and identify opportunities.",
    color: "bg-emerald-50 text-emerald-500",
    icon: "/icons/pr1.png",
  },
  {
    title: "Social Listening & Monitoring",
    desc: "Understand conversations that matter to your audience.",
    color: "bg-sky-50 text-sky-500",
    icon: "/icons/pr2.png",
  },
  {
    title: "Social Advertising",
    desc: "Plan, execute, and optimize campaigns across platforms.",
    color: "bg-violet-50 text-violet-500",
    icon: "/icons/pr3.png",
  },
  {
    title: "Influencer Marketing",
    desc: "Discover, collaborate, and manage influencers easily.",
    color: "bg-pink-50 text-pink-500",
    icon: "/icons/pr4.png",
  },
  {
    title: "Analytics & Reporting",
    desc: "Turn data into insights that fuel growth.",
    color: "bg-amber-50 text-amber-500",
    icon: "/icons/pr5.png",
  },
  {
    title: "Content Management",
    desc: "Organize, edit, and store your brand's assets.",
    color: "bg-cyan-50 text-cyan-500",
    icon: "/icons/pr6.png",
  },
  {
    title: "UTM Tracking",
    desc: "Measure campaign effectiveness with precision.",
    color: "bg-lime-50 text-lime-500",
    icon: "/icons/pr7.png",
  },
  {
    title: "Team Collaboration",
    desc: "Empower your team with shared workflows.",
    color: "bg-rose-50 text-rose-500",
    icon: "/icons/pr8.png",
  },
  {
    title: "Bulk Import",
    desc: "Manage content at scale, upload via CSV or Excel.",
    color: "bg-emerald-50 text-emerald-500",
    icon: "/icons/pr7.png",
  },
  {
    title: "Employee Advocacy",
    desc: "Turn your team into brand ambassadors.",
    color: "bg-sky-50 text-sky-500",
    icon: "/icons/pr8.png",
  },
  {
    title: "Smart Queues",
    desc: "Keep your calendar full without stress.",
    color: "bg-lime-50 text-lime-500",
    icon: "/icons/pr2.png",
  },
  {
    title: "Campaign Management",
    desc: "Plan, organize, and track campaigns in one dashboard.",
    color: "bg-cyan-50 text-cyan-500",
    icon: "/icons/pr9.png",
  },
  {
    title: "Content Library",
    desc: "Keep everything you need in one place.",
    color: "bg-amber-50 text-amber-500",
    icon: "/icons/pr10.png",
  },
  {
    title: "Social Media AI Assistant",
    desc: "Get AI-powered copy, hashtags, and suggestions.",
    color: "bg-violet-50 text-violet-500",
    icon: "/icons/pr12.png",
  },
  {
    title: "Smart Scheduling & Publishing",
    desc: "Post at the best times, every time.",
    color: "bg-cyan-50 text-cyan-500",
    icon: "/icons/pr13.png",
  },
];

export default function ProductSection(): React.ReactElement {
  return (
    <section className="py-20 font-sans antialiased px-6">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <p className="text-sm text-sky-500 font-semibold uppercase">
          Power Features
        </p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
          All-in-One Platform for Smarter Social Media
        </h2>
        <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
          Our powerful suite of tools is built to help brands, teams, and
          creators stay ahead of the competition.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="bg-slate-50 text-center rounded-lg p-6 flex flex-col justify-center items-center border border-transparent hover:border-slate-100"
            >
              <div className="">
                <Image
                  src={f.icon!}
                  alt={f.title}
                  width={24}
                  height={24}
                  className=" h-12 w-12"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-slate-600 text-center">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
