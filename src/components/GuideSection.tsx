"use client";

import React from "react";

type Guide = {
  title: string;
  href?: string;
  image?: string;
};

const DEFAULT_GUIDES: Guide[] = [
  {
    title:
      "How Often Should You Post on LinkedIn in 2025? Data From 2 Million+ Posts",
    href: "#",
    image: "/icons/pic2.png",
  },
  {
    title:
      "How to Schedule Instagram Posts in 2025 : (3 Easy Methods + 5 Quick Tips)",
    href: "#",
    image: "/icons/pic1.png",
  },
  {
    title:
      "What Is A Good Instagram Engagement Rate? Data from 27 Million+ Instagram Posts",
    href: "#",
    image: "/icons/pic3.png",
  },
];

export default function GuideSection({
  guides = DEFAULT_GUIDES,
}: Readonly<{ guides?: Guide[] }>) {
  return (
    <section className="py-16 font-sans px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <p className="text-sm text-sky-500 font-semibold uppercase">
              Blogs
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
              See our Free Guides On Growing Your Social Media
            </h2>
          </div>

          <div className="hidden sm:flex items-center">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-600"
            >
              View more
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {guides.map((g, i) => (
            <a
              key={i}
              href={g.href ?? "#"}
              className="group block rounded-2xl overflow-hidden shadow-sm"
              aria-label={g.title}
            >
              <div
                className="w-full aspect-[4/3] bg-gray-100 bg-center bg-cover rounded-2xl relative"
                style={{ backgroundImage: `url(${g.image ?? "/file.svg"})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>

                <div className="absolute left-4 right-4 bottom-4 text-white">
                  <h3 className="text-sm sm:text-base font-medium leading-tight drop-shadow-sm">
                    {g.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-600"
          >
            View more
          </a>
        </div>
      </div>
    </section>
  );
}
