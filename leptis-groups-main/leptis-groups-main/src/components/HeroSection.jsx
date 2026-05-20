import React from "react";
import Link from "next/link";


export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[65vh] flex items-center justify-center text-white overflow-hidden"
      style={{
        background: `linear-gradient(to right, #194a9a 35%, rgba(25,74,154,0.45) 90%), url('/ship-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-10 max-w-5xl">
        <p className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm inline-block mb-4 border border-white/20">
          Leptis Groups
        </p>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Advancing Growth Through Innovative and Trusted Solutions
        </h1>

        <p className="text-sm sm:text-base mb-6 text-gray-200">
          Take your business to the next level with Leptis Group’s trusted expertise in logistics, trading, and retail. Leptis opens a new horizon of excellence and reliability.
        </p>
        <Link href="/contact">
        <button className="bg-[#e30613] hover:bg-[#cf5d33] text-white font-semibold py-3 px-7 transition-all duration-200">
          Get In Touch
        </button>
        </Link>
      </div>
    </section>
  );
}
