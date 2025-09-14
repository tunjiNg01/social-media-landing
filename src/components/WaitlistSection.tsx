"use client";

import React from "react";

export default function WaitlistSection(): React.ReactElement {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative rounded-2xl overflow-hidden p-10 sm:p-16 text-center"
          style={{
            backgroundImage: `url('/icons/joinbg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/40 backdrop-blur-sm" />

          <div className="relative z-10">
            <div className="inline-block bg-sky-100 text-sky-600 px-3 py-1 rounded-md text-sm mb-4">
              Logo
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              Be the First to experience the future of AI with Sproutos by
              Joining Our <em className="italic font-medium">Waitlist!</em>
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-slate-700">
              Be the first to know when we launch. Secure your spot today and
              get early access!
            </p>

            <div className="mt-8 flex items-center justify-center">
              <form
                className="w-full max-w-xl bg-white/90 rounded-xl p-4 sm:p-5  flex items-center gap-3 mx-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="waitlist-email" className="sr-only">
                  Email
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  placeholder="Enter your Email"
                  className="flex-1 border border-slate-200 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-600"
                >
                  Join Waitlist
                </button>
              </form>
            </div>

            <div className="mt-5 flex items-center justify-center gap-3 text-sm text-slate-700">
              <div className="flex -space-x-2">
                <img
                  src="/next.svg"
                  alt="avatar"
                  className="h-8 w-8 rounded-full ring-2 ring-white"
                />
                <img
                  src="/vercel.svg"
                  alt="avatar"
                  className="h-8 w-8 rounded-full ring-2 ring-white"
                />
                <img
                  src="/file.svg"
                  alt="avatar"
                  className="h-8 w-8 rounded-full ring-2 ring-white"
                />
              </div>
              <div>Join 2,700+ users who have signed up</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
