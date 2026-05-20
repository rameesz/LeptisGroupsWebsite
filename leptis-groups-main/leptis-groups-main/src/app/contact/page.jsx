'use client';

import Loader from '@/components/Loader';
import React, { Suspense, useState } from 'react';
import axios from "axios";
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const API_URL = "http://127.0.0.1:8000/api/contact-messages/";

export default function Page() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            setStatus("Sending...");
            await axios.post(API_URL, form);
            setStatus("Message Sent Successfully!");
            setForm({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setStatus(""), 5000); // clear status after 5s
        } catch (err) {
            setStatus("Failed! Try Again.");
            setTimeout(() => setStatus(""), 5000);
        }
    };

    return (
        <Suspense fallback={<Loader />}>
            <div>
                {/* Banner */}
                <section
                    className="relative h-[200px] flex items-center justify-center text-white overflow-hidden"
                    style={{
                        background: `linear-gradient(to right, #194a9a 35%, rgba(25,74,154,0.45)), url('/ship-bg.jpg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center right",
                    }}
                >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 text-center px-6 sm:px-10">
                        <h1 className="text-4xl sm:text-5xl font-bold">Contact Us</h1>
                        <p className="text-gray-200 mt-2">Home &gt; Contact Us</p>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-4 py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold">
                            Get In <span className="text-blue-500">Touch</span>
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Ready to build something amazing together? Drop us a line and <span className="text-blue-500 font-medium">let’s start creating.</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <form
                            onSubmit={submitHandler}
                            className="bg-white shadow p-6 rounded-lg space-y-4"
                        >
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                placeholder="Your Name"
                                className="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                placeholder="Your Email"
                                className="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                required
                            />
                            <input
                                type="text"
                                name="subject"
                                value={form.subject}
                                placeholder="Subject"
                                className="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                            />
                            <textarea
                                name="message"
                                rows="4"
                                value={form.message}
                                placeholder="Your Message"
                                className="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center space-x-2 text-white py-2 rounded transition-colors duration-300"
                                style={{ backgroundColor: '#194a9a' }}
                            >
                                <span>Send Message</span>
                                <FaPaperPlane />
                            </button>

                            {status && (
                                <p className="text-center text-blue-600 mt-2">{status}</p>
                            )}
                        </form>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <ContactCard
                                icon={<FaEnvelope />}
                                title="Email Us"
                                text="info@leptisgroups.com"
                            />
                            <ContactCard
                                icon={<FaPhone />}
                                title="Call Us"
                                text="+97 4 250 5549"
                            />
                            <ContactCard
                                icon={<FaMapMarkerAlt />}
                                title="Visit Us"
                                text="Al Jazeera Al Hamra, Ras Al Khaimah, UAE"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </Suspense>
    );
}

const ContactCard = ({ icon, title, text }) => (
    <div className="bg-white shadow p-4 rounded-lg flex space-x-4 items-start">
        <div className="bg-blue-500 text-white p-3 rounded-full">{icon}</div>
        <div>
            <h4 className="font-semibold">{title}</h4>
            <p className="text-gray-600 text-sm">{text}</p>
        </div>
    </div>
);
