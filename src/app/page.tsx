"use client";
import ChooseUs from "@/components/ChooseUs";
import FaqSection from "@/components/FaqSection";
import GuideSection from "@/components/GuideSection";
import MediaSection from "@/components/MediaSection";
import PricingSections from "@/components/PricingSections";
import ProductSection from "@/components/ProductSection";
import StatSection from "@/components/StatSection";
import WaitlistSection from "@/components/WaitlistSection";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();
  const onSubmit = (data: { email: string }) => {
    // handle form submission (e.g., send to API)
    console.log(data);
  };

  return (
    <div className="">
      <div className="min-h-screen pt-16 bg-sky-50 ">
        <div className="min-h-screen/2 relative">
          <Image
            src="/icons/bg.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div className="relative z-10 font-sans flex flex-col items-center justify-center min-h-screen">
            <div className="flex gap-1 bg-sky-100 py-1 px-4 rounded-full items-center">
              <span className="text-sm text-gray-600 ">Trusted by</span>
              <span className="text-gray-800">2,700+</span>
              <span className="text-sm text-gray-600 mr-2">Subscribers</span>
            </div>
            <h1 className="text-6xl hidden md:block text-gray-800 font-sans font-bold">
              Simplify Social Media.
              <br />
              Amplify Your Impact
            </h1>
            <h1 className="text-4xl text-center md:hidden text-gray-800 font-sans font-bold">
              Simplify Social Media. Amplify Your Impact
            </h1>
            <p className="text-lg text-gray-700 text-center md:max-w-2xl">
              Complete social media management platform with AI-powered
              insights, smart scheduling, and comprehensive analytics to grow
              your brand across all networks.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-md mt-2"
            >
              <div className="flex flex-1 gap-1 w-full mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`border flex-1 border-gray-300 placeholder:text-gray-500 
                  text-sm rounded-full py-2 px-4 focus:outline-none 
                  focus:ring-2  ${
                    errors.email
                      ? "border-red-500 focus:ring-red-200"
                      : "focus:ring-sky-200"
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                <button
                  type="submit"
                  className="bg-sky-500 border-2 border-sky-200 text-sm font-bold text-nowrap text-white rounded-full py-3 px-4 hover:bg-sky-600"
                >
                  Join Waitlist
                </button>
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      <MediaSection />
      <ProductSection />
      <StatSection />
      <ChooseUs />
      <GuideSection />
      <PricingSections />
      <WaitlistSection />
      <FaqSection />
    </div>
  );
}
