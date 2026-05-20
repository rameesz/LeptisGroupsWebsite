import Loader from '@/components/Loader';
import PrimaryButton from '@/components/PrimaryButton'
import React, { Suspense } from 'react'
import { FaGlobe, FaCheckCircle, FaUserCheck, FaChartLine } from "react-icons/fa";
import Link from "next/link";


export default function About() {
    const features = [
        {
            title: 'Global Reach',
            description:
                'With operations across the UAE and India, we deliver trusted logistics, trading, and retail solutions worldwide.',
            icon: <FaGlobe className="text-white text-xl" />,
            bgColor: 'bg-[#194a9a]', // Leptis brand blue
        },
        {
            title: 'Quality Assurance',
            description:
                'Leptis Group ensures top-quality products and services by maintaining strict standards across all business divisions.',
            icon: <FaCheckCircle className="text-white text-xl" />,
            bgColor: 'bg-yellow-500',
        },
        {
            title: 'Customer Commitment',
            description:
                'We prioritize customer satisfaction through timely service, transparency, and responsive communication.',
            icon: <FaUserCheck className="text-white text-xl" />,
            bgColor: 'bg-green-500',
        },
        {
            title: 'Innovation & Growth',
            description:
                'Leptis continually evolves by adopting modern technologies and exploring new business opportunities.',
            icon: <FaChartLine className="text-white text-xl" />,
            bgColor: 'bg-orange-500',
        },
    ];

    return (
        <Suspense fallback={<Loader />}>
            <div>
                <section
                    className="relative w-full h-[200px] flex items-center justify-center text-white overflow-hidden"
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
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                            About us
                        </h1>

                        <p className="text-sm sm:text-base mb-6 text-gray-200">
                            Home &gt; About Us
                        </p>
                    </div>
                </section>

                <section className="bg-white py-16 px-6 md:px-16">
                    <div className="max-w-6xl mx-auto text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                            About us
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
                            As a Web Development Services we are Committed to Building Custom Web
                            Solutions that Drive Business Success.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                        {/* Left: Image */}
                        <div className="md:w-1/2">
                            <img
                                src="team.jpg"
                                alt="Team working"
                                className="shadow-md w-full object-cover"
                            />
                        </div>

                        {/* Right: Text Content */}
                        <div className="md:w-1/2 text-gray-700 text-left">
                            <p className="mb-6">
                                At our web development services agency, we specialize in creating
                                custom web solutions that help businesses achieve their online
                                goals. Our team of experienced web developers, designers, and
                                digital strategists work collaboratively to build websites, web
                                applications, and e-commerce solutions that meet our clients’ unique
                                needs and deliver results.
                            </p>

                            <p className="mb-6">
                                Our mission is to provide our clients with the tools they need to
                                succeed in the online marketplace. We are dedicated to staying
                                up-to-date with the latest web technologies and trends to ensure
                                that we are always delivering the highest quality work. We believe
                                that every business deserves a website that reflects their brand’s
                                personality and effectively communicates their message to their
                                target audience.
                            </p>
                            <Link href="/contact">
                            <PrimaryButton text="Get in touch" color="bg-[#194a9a]" />
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-4 py-16">
                    <h2 className="text-4xl font-bold text-center mb-4">Why choose us</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-sm">
                        Thank you for considering us as your web developer. We believe that my experience, skills, and dedication set me apart and make me the ideal choice for your project.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className={`w-12 h-12 flex items-center justify-center rounded-full ${feature.bgColor}`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                                </div>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Suspense>
    )
}
