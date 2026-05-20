import React from "react";

export default function OurBrands() {
  const brands = [
    "/b1.png",
    "/b3.png",
    "/b2.png",
    "/b4.png",
    "/b7.jpg",
    "/b5.png",
    "/b6.png",
    "/b8.jpg",
    "/b9.jpg",
    "/b10.png",
    "/b11.png",
    "/b12.png",
  ];

  return (
    <section className="container mx-auto py-5 bg-white overflow-hidden">

      {/* Scrolling Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-10 items-center">
          {[...brands, ...brands].map((brand, index) => (
            <img
              key={index}
              src={brand}
              alt={`Brand ${index}`}
              className="h-16 sm:h-30 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
