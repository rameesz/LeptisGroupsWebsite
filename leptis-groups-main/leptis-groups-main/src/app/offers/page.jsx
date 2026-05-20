"use client";
import Loader from "@/components/Loader";
import React, { Suspense, useEffect, useState } from "react";

export default function Offers() {
  const [offers, setOffers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("");

  // Modal state
  const [openModal, setOpenModal] = useState(false);
  const [selectedOfferPDFs, setSelectedOfferPDFs] = useState([]);
  const [selectedOfferTitle, setSelectedOfferTitle] = useState("");

  // Load offers from backend
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/offers/", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        setOffers(data);
        setFiltered(data);
      })
      .catch((err) => console.error("FETCH ERROR:", err));
  }, []);

  // Filter logic
  useEffect(() => {
    if (!category) setFiltered(offers);
    else setFiltered(offers.filter((o) => o.category === category));
  }, [category, offers]);

  // Open modal with PDFs
  const handleOpenModal = (pdfs, title) => {
    if (Array.isArray(pdfs) && pdfs.length > 0) {
      setSelectedOfferPDFs(pdfs);
      setSelectedOfferTitle(title);
      setOpenModal(true);
    } else {
      alert("No PDFs available for this offer");
    }
  };

  // Open PDF in new tab (fixed solution)
  const openPDF = (url) => {
    if (!url) return alert("PDF not found");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Suspense fallback={<Loader />}>
      <div>
        {/* Banner */}
        <section
          className="relative w-full h-[200px] flex items-center justify-center text-white overflow-hidden"
          style={{
            background: `linear-gradient(to right, #194a9a 35%, rgba(25,74,154,0.45) 90%), url('/ship-bg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl font-bold mb-4">Our Offers</h1>
            <p className="text-gray-200">Home &gt; Offers</p>
          </div>
        </section>

        {/* Main Layout */}
        <section className="my-10 container mx-auto px-5 md:px-0">
          <h1 className="text-3xl font-bold text-center mb-8">Offers</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sidebar Filters */}
            <div className="md:col-span-1 bg-white shadow p-5 rounded-xl h-fit sticky top-5">
              <h2 className="text-lg font-semibold mb-3">Select Branch</h2>
              <select
                className="w-full border rounded p-2"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="dubai_lassi_home">DUBAI - LASSI HOME SHOP</option>
                <option value="rak_hamrah">RAK - LEPTIS SHOPPING CENTER AL HAMRAH</option>
                <option value="rak_marjan">RAK - LEPTIS SUPERMARKET MARJAN</option>
                <option value="alain_spicy">AL AIN - SPICY VILLAGE AL AIN</option>
                <option value="alain_leptis">AL AIN - LEPTIS SHOPPING CENTER AL AIN</option>
              </select>
            </div>

            {/* Offers List */}
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.length > 0 ? (
                filtered.map((offer) => {
                  const mainThumbnail = offer.pdfs?.[0]?.thumbnail_url || "";
                  return (
                    <div
                      key={offer.id}
                      className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white cursor-pointer"
                      onClick={() => handleOpenModal(offer.pdfs, offer.title)}
                    >
                      {mainThumbnail ? (
                        <img
                          src={mainThumbnail}
                          alt={offer.title}
                          className="w-full h-80 object-cover hover:scale-105 transition duration-300"
                        />
                      ) : (
                        <div className="w-full h-80 bg-gray-200 flex items-center justify-center text-gray-500">
                          No PDF Preview
                        </div>
                      )}
                      <div className="py-4 text-center">
                        <h3 className="text-gray-900 font-semibold text-sm">{offer.title}</h3>
                        <p className="text-gray-400 text-xs mt-1">{offer.category}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-center col-span-full text-gray-500">
                  No offers available.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Modal for PDFs */}
        {openModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg max-w-5xl w-full p-5 relative">
              <button
                className="absolute top-2 right-2 text-gray-700 text-2xl font-bold"
                onClick={() => setOpenModal(false)}
              >
                ×
              </button>

              <h2 className="text-lg font-semibold mb-4 text-center">{selectedOfferTitle}</h2>

              {/* PDF Thumbnails */}
              <div className="flex flex-wrap gap-4 mb-6 justify-center">
                {selectedOfferPDFs.map((pdf) =>
                  pdf.thumbnail_url ? (
                    <div key={pdf.id} className="text-center">
                      <img
                        src={pdf.thumbnail_url}
                        alt="PDF"
                        className="w-24 h-32 object-cover rounded-md shadow cursor-pointer hover:border-2 hover:border-[#194a9a]"
                        onClick={() => openPDF(pdf.pdf_url)}
                      />
                      {/* <button
                        onClick={() => openPDF(pdf.pdf_url)}
                        className="mt-2 px-3 py-1 bg-[#194a9a] text-white text-xs rounded"
                      >
                        Open PDF
                      </button> */}
                    </div>
                  ) : (
                    <div
                      key={pdf.id}
                      className="w-24 h-32 flex items-center justify-center bg-gray-200 text-gray-500 rounded-md"
                    >
                      No Preview
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Suspense>
  );
}
