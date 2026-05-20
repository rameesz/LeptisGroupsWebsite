import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import PrimaryButton from "./PrimaryButton";

const teamMembers = [
  {
    name: "Leptis Group",
    position: "Our Winning Team",
    image: '/lepteam1.jpeg'
  },
  {
    name: "Leptis Fresh Super market",
    position: "Our Winning Team",
    image: '/lepteam2.jpeg'
  },
];

export default function OurTeam() {
  return (
    <section className="py-20 px-6 lg:px-16 my-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="lg:w-1/3">
          <p className="text-[#194a9a] uppercase tracking-widest font-semibold mb-2">
            Leptis Team
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Leptis aims to deliver a unique shopping experience through top-quality products and services while exploring new markets and creating lasting value. Known for trust and reliability, we offer diverse products at competitive prices with uncompromised quality. Today, over 100+ employees across the UAE drive our growth and commitment.
          </p>
          <PrimaryButton text="Learn More" color="bg-[#194a9a]" />
        </div>

        {/* Right Side - Team Cards */}
        <div className="w-full lg:w-2/3 grid sm:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-96 object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00172a]/90 to-transparent opacity-90"></div>

              {/* Social Icons */}
              <div className="absolute top-4 right-4 flex flex-col gap-3">
                <a
                  href="#"
                  className="bg-[#194a9a] text-white p-2 rounded-md hover:bg-orange-600 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-[#194a9a] text-white p-2 rounded-md hover:bg-orange-600 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="bg-[#194a9a] text-white p-2 rounded-md hover:bg-orange-600 transition"
                >
                  <FaYoutube />
                </a>
              </div>

              {/* Text Content */}
              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
