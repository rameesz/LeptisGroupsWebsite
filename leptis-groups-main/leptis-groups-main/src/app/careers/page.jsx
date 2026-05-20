'use client';

import Loader from '@/components/Loader';
import PrimaryButton from '@/components/PrimaryButton';
import React, { Suspense, useState, useRef } from 'react';
import axios from 'axios';
import { FaUser, FaPhone, FaEnvelope, FaFilePdf, FaPen } from 'react-icons/fa';

const API_URL = "http://127.0.0.1:8000/api/career-applications/";

const Careers = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        cv: null,
    });

    const [status, setStatus] = useState("");
    const fileInputRef = useRef(null); // ref for file input

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        Object.keys(formData).forEach((key) => data.append(key, formData[key]));

        try {
            setStatus("Submitting...");
            await axios.post(API_URL, data, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setStatus("Application submitted successfully!");

            // Clear all fields including file input
            setFormData({ name: "", phone: "", email: "", message: "", cv: null });
            if (fileInputRef.current) fileInputRef.current.value = ""; // reset file input

        } catch {
            setStatus("Error! Please try again.");
        }
    };

    return (
        <Suspense fallback={<Loader />}>
            <div>
                {/* ...Banner section remains unchanged... */}

                <form onSubmit={handleSubmit} className="space-y-6 container mx-auto max-w-3xl p-6 bg-white rounded-lg shadow-md my-10">
                    {/* Name */}
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <div className="flex items-center border rounded px-3 py-2">
                            <FaUser className="text-gray-500 mr-3" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block mb-1 font-medium">Phone</label>
                        <div className="flex items-center border rounded px-3 py-2">
                            <FaPhone className="text-gray-500 mr-3" />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <div className="flex items-center border rounded px-3 py-2">
                            <FaEnvelope className="text-gray-500 mr-3" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Upload CV */}
                    <div>
                        <label className="block mb-1 font-medium">Upload CV (PDF)</label>
                        <div className="flex items-center border rounded px-3 py-2">
                            <FaFilePdf className="text-gray-500 mr-3" />
                            <input
                                type="file"
                                name="cv"
                                accept=".pdf"
                                onChange={handleChange}
                                className="w-full"
                                ref={fileInputRef} // attach ref
                                required
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block mb-1 font-medium">Message</label>
                        <div className="flex border rounded px-3 py-2">
                            <FaPen className="text-gray-500 mr-3 mt-1" />
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Your message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full outline-none resize-none"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <PrimaryButton text="submit" color='bg-[#194a9a]' />
                </form>

                {status && <p className="text-center text-blue-600 font-medium">{status}</p>}
            </div>
        </Suspense>
    );
};

export default Careers;
