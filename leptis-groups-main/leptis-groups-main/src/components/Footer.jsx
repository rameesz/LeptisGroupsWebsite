import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#194a9a] text-white py-10 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 border-b border-white/20 pb-10">

                {/* Left Section */}
                <div>
                    <p className="text-sm leading-relaxed mb-6">
                        Leptis Group, founded in 2016 in the UAE, has evolved into a multi-sector
                        enterprise covering logistics, trading, exports, and retail. Our commitment
                        to quality and customer satisfaction defines everything we do.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://www.facebook.com/share/19u51ph8vv/" aria-label="Facebook" className="hover:text-gray-300"><FaFacebookF /></a>
                        <a href="#" aria-label="Instagram" className="hover:text-gray-300"><FaInstagram /></a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-gray-300"><FaLinkedinIn /></a>
                        <a href="#" aria-label="Twitter" className="hover:text-gray-300"><FaTwitter /></a>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="flex justify-between md:justify-around">
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Our Businesses</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Gallery</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Logistics & Freight</a></li>
                            <li><a href="#" className="hover:underline">Trading & Exports</a></li>
                            <li><a href="#" className="hover:underline">Retail & Hypermarkets</a></li>
                            <li><a href="#" className="hover:underline">Food & Hospitality</a></li>
                            <li><a href="#" className="hover:underline">Customer Support</a></li>
                        </ul>
                    </div>
                </div>

                {/* Right Section */}
                <div>
                    <h3 className="font-semibold mb-3">
                        Stay updated with Leptis news and offers
                    </h3>
                    <form className="flex mt-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 w-full rounded-l-md focus:outline-none border-1 border-white text-sm text-white"
                        />
                        <button
                            type="submit"
                            className="bg-[#e30613] hover:bg-yellow-600 text-white px-4 rounded-r-md text-sm border-1 border-white"
                        >
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-200 pt-6">
                <p>© {new Date().getFullYear()} Leptis Group. All rights reserved.</p>
                <div className="flex space-x-4 mt-3 md:mt-0">
                    <a href="#" className="hover:underline">Terms of Use</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Cookies</a>
                </div>
            </div>
        </footer>
    );
}
