"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { title: "Home", href: "#" },
  { title: "Features", href: "#" },
  { title: "Pricing", href: "#pricing" },
  { title: "FAQs", href: "#faq" },
  { title: "Blog", href: "#guides" },
  // { title: "Contact", href: "#" },
];

const megaMenuGroups = [
  [
    {
      icon: "/icons/background_icon.png",
      title: "Campaign Management",
      desc: "Track competitor activity and stay ahead\n of trends.",
    },
    {
      icon: "/icons/social_listen.png",
      title: "Social Listening & Monitoring",
      desc: "Understand conversations that matter to your audience.",
    },
    {
      icon: "/icons/social_link.png",
      title: "Social Advertising",
      desc: "Plan, execute, and optimize campaigns across platforms.",
    },
    {
      icon: "/icons/person.png",
      title: "Influencer Marketing",
      desc: "Discover, collaborate, and manage influencers easily.",
    },

    {
      icon: "/icons/person.png",
      title: "Influencer Discovery",
      desc: "Find and connect with the right influencers for your brand.",
    },
  ],
  [
    {
      icon: "/icons/content.png",
      title: "Analytics & Reporting",
      desc: "Organize, edit, and store your brand’s assets..",
    },
    {
      icon: "/icons/utm.png",
      title: "UTM Tracking",
      desc: "Measure campaign effectiveness with precision.",
    },
    {
      icon: "/icons/team.png",
      title: "Team Collaboration",
      desc: "Empower your team with shared workflows.",
    },
    {
      icon: "/icons/team.png",
      title: "Team Collaboration",
      desc: "Empower your team with shared workflows.",
    },
    {
      icon: "/icons/bulk.png",
      title: "Bulk Import",
      desc: "Manage content at scale.",
    },
  ],
  [
    {
      icon: "/icons/bulk.png",
      title: "Smart Queues",
      desc: "Keep your calendar full without stress.",
    },
    {
      icon: "/icons/social_link.png",
      title: "Content Library",
      desc: "Keep everything you need in one place.",
    },
    {
      icon: "/icons/ai.png",
      title: "Social Media AI Assistant",
      desc: "Get AI-powered copy, hashtags, and suggestions.",
    },
    {
      icon: "/icons/smart.png",
      title: "Smart Scheduling & Publishing",
      desc: "Post at the best times, every time.",
    },
    {
      icon: "/icons/employee.png",
      title: "Employee Advocacy",
      desc: "Turn your team into brand ambassadors.",
    },
  ],
];

function MegaMenuPanel({ megaOpen }: { megaOpen: boolean }) {
  return (
    <div
      className={`absolute font-sans left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-7xl bg-white shadow-lg rounded-md p-6 z-40 transition-all duration-300 ease-in-out ${
        megaOpen
          ? "opacity-100 scale-100"
          : "opacity-0 ease-in duration-150 scale-95 pointer-events-none"
      }`}
      role="menu"
      aria-label="Features"
    >
      <div className="grid grid-cols-1 text-grey-900 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {megaMenuGroups.map((group, idx) => (
          <div key={idx}>
            <ul className="space-y-4 text-sm text-gray-700">
              {group.map((item, i) => (
                <li key={item.title + i}>
                  <div className="flex space-x-2">
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt="Icons"
                        className="h-8 w-8 rounded-md"
                      />
                    )}
                    <div>
                      <a href="#" className="text-gray-800 hover:text-sky-600">
                        {item.title}
                      </a>
                      {item.desc && (
                        <p className="text-gray-500 text-xs rounded pr-12">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="bg-gray-50 p-4 rounded-md w-fulllg:col-span-2">
          <div className="p-4 rounded-lg bg-sky-600">
            <Image
              src="/icons/dm.jpg"
              alt="Icons"
              className="w-full h-auto rounded-lg"
              width={100}
              height={100}
            />

            <h2 className="text-white text-lg font-bold">
              Turn Your DMs Into Lead Gen
            </h2>
            <p className="text-white text-sm">
              Use our tools to convert your direct messages into valuable leads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WebSiteHeader(): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      const target = e.target as Node;
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(target)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const navLinks = navItems.map((item, i) =>
    item.title === "Features" ? (
      <a
        key={item.title + i}
        href={item.href}
        className="text-sm text-gray-800 hover:text-sky-600 relative inline-flex items-center"
        onClick={(e) => {
          e.preventDefault();
          setMegaOpen((p) => !p);
        }}
        aria-haspopup="menu"
        aria-expanded={megaOpen ? "true" : "false"}
      >
        {item.title}
      </a>
    ) : (
      <a
        key={item.title + i}
        href={item.href}
        className="text-sm text-gray-800 hover:text-sky-600"
        onClick={() => setMegaOpen(false)}
      >
        {item.title}
      </a>
    )
  );

  const mobileLinks = navItems.map((item, i) => (
    <a
      key={item.title + "m" + i}
      href={item.href}
      className="block text-gray-800 font-sans px-2 py-2 rounded hover:bg-gray-100"
      onClick={() => {
        setMegaOpen(false);
        setOpen(false);
      }}
    >
      {item.title}
    </a>
  ));

  const menuIcon = megaOpen ? (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  ) : (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  );

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-transparent backdrop-blur-sm z-50">
      <div
        ref={wrapperRef}
        className="max-w-7xl bg-white font-sans md:mt-4 rounded-md mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between h-16">
          {/* left */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="flex items-center  rounded-md font-semibold "
            >
              <Image
                src="/icons/sprotous_logo.png"
                alt="Icons"
                width={100}
                height={100}
              />
            </a>
          </div>
          {/* center */}
          <div className="hidden md:flex items-center gap-6">{navLinks}</div>
          {/* right */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://sproutos.io/sproutos/auth/login"
                className="text-sm text-gray-800 hover:underline"
                onClick={() => setMegaOpen(false)}
              >
                Sign In
              </a>
              <a
                href="https://sproutos.io/sproutos/auth/signup"
                className="inline-flex items-center px-4 py-2 bg-sky-500 text-white rounded-full text-sm font-semibold hover:bg-sky-600"
                onClick={() => setMegaOpen(false)}
              >
                Sign Up
              </a>
            </div>
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => {
                setOpen((p) => {
                  const next = !p;
                  if (next) setMegaOpen(false);
                  return next;
                });
              }}
              aria-label="Toggle menu"
              aria-expanded={open ? "true" : "false"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuIcon}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mega menu panel */}
      {megaOpen && <MegaMenuPanel megaOpen={megaOpen} />}
      {/* Mobile panel */}
      {open && (
        <div className="md:hidden bg-white shadow mt-2 rounded-md mx-4 p-4 absolute left-0 right-0 z-20">
          <nav className="flex flex-col gap-3">{mobileLinks}</nav>
          <div className="mt-2 pt-2 border-t border-gray-100 flex flex-col gap-2">
            <a
              href="https://sproutos.io/sproutos/auth/login"
              className="block text-sm text-gray-800 px-2 py-2 rounded hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Sign In
            </a>
            <a
              href="https://sproutos.io/sproutos/auth/signup"
              className="block text-sm text-white bg-sky-500 px-3 py-2 rounded-full text-center font-semibold hover:bg-sky-600"
              onClick={() => setOpen(false)}
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
