"use client";

import React from "react";
import Image from "next/image";
const PLATFORMS: { id: string; label: string; icon: string }[] = [
  { id: "facebook", label: "Facebook", icon: "/icons/media1.png" },
  { id: "etsy", label: "Etsy", icon: "/icons/media2.png" },
  { id: "instagram", label: "Instagram", icon: "/icons/media3.png" },
  { id: "google", label: "Google", icon: "/icons/media4.png" },
  { id: "linkedin", label: "LinkedIn", icon: "/icons/media5.png" },
  { id: "pinterest", label: "Pinterest", icon: "/icons/media6.png" },
  { id: "threads", label: "Threads", icon: "/icons/media7.png" },
  { id: "tiktok", label: "TikTok", icon: "/icons/media8.png" },
  { id: "x", label: "X", icon: "/icons/media9.png" },
  { id: "youtube", label: "YouTube", icon: "/icons/media10.png" },
];

function Icon({ id }: { id: string }) {
  // Simple neutral SVG placeholder per platform id.
  // You can replace these with brand SVGs from /public later.
  return (
    <svg
      className="h-6 w-6 text-slate-800"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="0"
        fill="currentColor"
        fillOpacity="0.06"
      />
      <text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor">
        {id.charAt(0).toUpperCase()}
      </text>
    </svg>
  );
}

export default function MediaSection(): React.ReactElement {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-xl border border-slate-100 p-8 bg-white">
          <div className="text-center mb-6">
            <h3 className="text-sky-500 font-semibold">
              Connect your favorite accounts
            </h3>
          </div>

          <div className="overflow-x-auto">
            <div className="flex items-center gap-6 justify-center py-3 min-w-[720px]">
              {PLATFORMS.map((p, i) => (
                <React.Fragment key={p.id}>
                  <div
                    aria-label={p.label}
                    className="inline-flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-md border border-slate-200 bg-white hover:shadow-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-sky-300"
                  >
                    {/* <Icon id={p.id} /> */}
                    <Image
                      src={p.icon}
                      alt={p.label}
                      className="h-12 w-12 md:h-14 md:w-14"
                      width={24}
                      height={24}
                    />
                  </div>

                  {/* small separator dot between icons on larger screens */}
                  {/* {i < PLATFORMS.length - 1 && (
                    <span className="hidden md:inline-block h-1 w-1 bg-slate-300 rounded-full" />
                  )} */}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
