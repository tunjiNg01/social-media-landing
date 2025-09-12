"use client";
import React from "react";

export default function Footer(): React.ReactElement {
  return (
    <footer className="bg-sky-50 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left: logo + short description */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <div className="inline-block bg-sky-100 text-sky-600 px-4 py-2 rounded-md font-semibold">
                Logo
              </div>
            </div>
            <p className="text-slate-600 max-w-xs">
              Social media management, using AI
            </p>
          </div>

          {/* Link columns */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-sm text-slate-500 mb-4">Product</h5>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-slate-700 hover:underline font-semibold"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-700 hover:underline font-semibold"
                  >
                    FAQ
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <a
                    href="#"
                    className="text-slate-700 hover:underline font-semibold"
                  >
                    Solutions
                  </a>
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                    New
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm text-slate-500 mb-4">Features</h5>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-slate-700 font-semibold hover:underline"
                  >
                    Competition Monitoring
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-700 font-semibold hover:underline"
                  >
                    Influencer Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-700 font-semibold hover:underline"
                  >
                    Analytics & Reporting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-700 font-semibold hover:underline"
                  >
                    Content Management
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-700 font-semibold hover:underline"
                  >
                    UTM Tracking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-700 font-semibold hover:underline"
                  >
                    Bulk Import
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-700 font-semibold hover:underline"
                  >
                    Campaign Management
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm text-slate-500 mb-4">Resources</h5>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-slate-700 hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-700 hover:underline">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-700 hover:underline">
                    Affiliate
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-700 hover:underline">
                    Road Map
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-sm text-slate-500 mb-4">Link</h5>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-slate-700 hover:underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-700 hover:underline">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-slate-200" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-600">
            © 2025 Sproutos. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {/* Social icons - simple monochrome SVGs */}
            <a
              href="#"
              aria-label="Twitter"
              className="text-slate-400 hover:text-slate-600"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M22 5.92c-.66.3-1.37.51-2.11.6.76-.46 1.34-1.18 1.62-2.04-.71.42-1.5.73-2.34.9A3.6 3.6 0 0015.5 4c-2 0-3.63 1.62-3.63 3.62 0 .28.03.55.09.81-3.01-.15-5.68-1.6-7.47-3.8-.31.54-.49 1.16-.49 1.83 0 1.26.64 2.37 1.62 3.02-.6-.02-1.17-.18-1.67-.46v.05c0 1.77 1.26 3.25 2.94 3.59-.31.08-.64.12-.98.12-.24 0-.47-.02-.69-.06.47 1.45 1.84 2.5 3.46 2.53A7.23 7.23 0 012 19.54 10.18 10.18 0 007.29 21c6.14 0 9.5-5.08 9.5-9.48v-.43c.66-.47 1.23-1.05 1.68-1.72-.6.27-1.24.45-1.9.53z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-slate-600"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8.98h4.56V24H.2V8.98zM8.98 8.98h4.37v2.04h.06c.61-1.16 2.1-2.39 4.32-2.39 4.62 0 5.47 3.04 5.47 6.99V24h-4.56v-7.12c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V24H8.98V8.98z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="text-slate-400 hover:text-slate-600"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.7-.8-1.5-.8-1.9-.9C17.8 2.8 12 2.8 12 2.8h-.1s-5.8 0-8.8.2c-.5.1-1.3.1-1.9.9C.6 4.6.3 6.2.3 6.2S0 8.1 0 10v4c0 1.9.3 3.8.3 3.8s.2 1.6.8 2.3c.7.8 1.6.8 2 .9 1.5.2 6.8.2 6.8.2s5.8 0 8.8-.2c.5-.1 1.3-.1 1.9-.9.6-.7.8-2.3.8-2.3s.3-1.9.3-3.8v-4c0-1.9-.3-3.8-.3-3.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="TikTok"
              className="text-slate-400 hover:text-slate-600"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M16 3h2.5v2.2c0 2.4 0 5.8 3.5 6.3v2.1c-4.7-.4-6-3.9-6-8.1H16V3zM9 8.5c0 4.8 3.9 8.8 8.8 8.8.3 0 .5 0 .8-.03v2.05c-.4.1-.8.15-1.3.15-6.6 0-12-5.4-12-12 0-1.1.14-2.16.4-3.15.8.9 1.9 1.7 3.35 2.2v3.0z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="text-slate-400 hover:text-slate-600"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.76-1.61 1.54v1.84h2.74l-.44 2.89h-2.3v6.99C18.34 21.12 22 16.99 22 12z" />
              </svg>
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="text-slate-400 hover:text-slate-600"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M12 7.2A4.8 4.8 0 1012 16.8 4.8 4.8 0 0012 7.2zm0 7.9a3.1 3.1 0 110-6.2 3.1 3.1 0 010 6.2zM18.5 5.5a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zM21 8.8c-.1-1.4-.4-2.2-.8-3-.4-.9-1-1.6-1.8-2.4C17 2.6 15.9 2.3 14.4 2.2c-1.6-.1-6.4-.1-8 0C4.8 2.3 3.8 2.6 3 3.3 2.2 4 1.6 4.7 1.3 5.6c-.4.9-.7 1.6-.8 3-.1 1.6-.1 6.4 0 8 0 1.4.3 2.2.8 3 .4.9 1 1.6 1.8 2.4.8.7 1.8 1 3.3 1.1 1.6.1 6.4.1 8 0 1.5-.1 2.6-.4 3.5-1.1.9-.8 1.4-1.5 1.8-2.4.5-.8.8-1.6.9-3 .1-1.6.1-6.4 0-8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
