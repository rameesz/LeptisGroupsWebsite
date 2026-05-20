import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";
import Link from "next/link";
export default function HomeAboutSection() {
    return (
        <section className="flex flex-col md:flex-row items-start justify-between gap-10 py-16 bg-white px-6 lg:px-16 max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="w-full md:w-1/2">
                <p className="text-[#194a9a] font-semibold uppercase text-sm tracking-widest mb-2">
                    Who we are
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-10 md:leading-12">
                    Delivering Quality, Trust, and Modern <span className="text-[#194a9a]">Convenience.</span>
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    Founded in 2016 in the UAE, Leptis Group began as part of Abreco Freight’s expansion into logistics and trading. Since then, it has grown across sectors like trading, fresh produce, exports, and retail—earning a reputation for reliability and excellence.
                </p>

                <div className="flex items-start gap-3 mb-6">
                    <FaCheckCircle className="text-[#194a9a] mt-1 text-xl flex-shrink-0" />
                    <div>
                        <p className="font-semibold text-gray-900">
                            We focus on quality, service, and customer satisfaction.
                        </p>
                        <p className="text-gray-600 text-sm">
                            Our team constantly adapts to market trends, ensuring hygienic,
                            accessible, and modern shopping experiences for every customer.
                        </p>
                    </div>
                </div>
                <Link href="/about">
                <PrimaryButton text="Discover More →" color={'bg-[#194a9a]'} hoverColor={'hover:bg-[#194a9a]'} />
                </Link>
            </div>


            {/* Right Image */}
            <div className="relative w-full md:w-1/2 flex justify-center">
                <img
                    src="/homeabout.jpg"
                    alt="Warehouse team"
                    className="shadow-lg object-cover w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
                />
            </div>
        </section>
    );
}
