import Loader from "@/components/Loader";
import { fetchProjects } from "@/data/data";
import Link from "next/link";
import React, { Suspense } from "react";

export default async function Projects() {

    const projects = fetchProjects();

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
                            Our Projects
                        </h1>

                        {/* <p className="text-sm sm:text-base mb-6 text-gray-200">
                            Home &gt; Projects
                        </p> */}
                    </div>
                </section>

                <section className="my-10">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-5">Projects</h1>
                    </div>

                    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-5 md:px-0">
                        {projects.map((project, index) => (
                            <Link
                                href={`/projects/${project.id}`}
                                key={index}
                                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-80 object-cover hover:scale-105 transition duration-300"
                                />
                                <div className="py-4 text-center">
                                    <h3 className="text-gray-900 font-semibold text-sm">
                                        {project.title}
                                    </h3>
                                </div>
                            </Link>

                        ))}
                    </div>
                </section>
            </div>
        </Suspense>
    );
}
