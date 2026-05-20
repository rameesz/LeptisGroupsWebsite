"use client";
import { fetchSingleProject } from '@/data/data'
import React, { Suspense } from 'react'
import { useParams } from "next/navigation";
import Loader from '@/components/Loader';

export default function ProjectDetails() {

    const params = useParams();
    const { id } = params;
    const project = fetchSingleProject(id);
    console.log(project);
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
                    <div className="absolute inset-0 bg-black/10"></div>

                    <div className="relative z-10 text-center px-6 sm:px-10 max-w-5xl">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                            {project.title}
                        </h1>

                        <p className="text-sm sm:text-base mb-6 text-gray-200">
                            Home &gt; Projects &gt; {project.title}
                        </p>
                    </div>
                </section>

                <section className="my-10">
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-5">{project.title}</h1>
                    </div>

                    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-5 md:px-0">
                        {project.image.map((pro, index) => (
                            <div
                                key={index}
                                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white"
                            >
                                <img
                                    src={pro.image}
                                    alt={pro.title}
                                    className="w-full h-80 object-cover hover:scale-105 transition duration-300"
                                />
                                <div className="py-4 text-center">
                                    <h3 className="text-gray-900 font-semibold text-sm">
                                        {pro.title}
                                    </h3>
                                </div>
                            </div>

                        ))}
                    </div>
                </section>
            </div>
        </Suspense>
    )
}
