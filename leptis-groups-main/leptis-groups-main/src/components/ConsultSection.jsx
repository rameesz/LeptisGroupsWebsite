import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";
import Link from "next/link";


export default function ConsultSection() {
  return (
    <section className="bg-[#194a9a] text-white py-16 px-6 lg:px-20 relative my-0 md:mt-35">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Image */}
        <div className="w-full md:w-3/8 hidden md:flex md:justify-center">
          <img
            src="/consultbg.png"
            alt="Consultation"  
            className="w-[300px] md:w-[350px] object-contain absolute bottom-0"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-5/8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">
            Consult the services you{" "}
            <span className="text-[#f97316]">need now!</span>
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
            Our logistics experts are ready to assist you with fast, reliable,
            and cost-effective delivery solutions across a wide service area.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[#f97316]" />
              <span className="font-medium">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[#f97316]" />
              <span className="font-medium">Competitive Price</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-[#f97316]" />
              <span className="font-medium">Wide Delivery Area</span>
            </div>
          </div>

          <Link href="/contact">
            <PrimaryButton text="Contact Us →" color={'bg-[#f97316]'} />
          </Link>
        </div>
      </div>
    </section>
  );
}
