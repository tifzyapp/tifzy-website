"use client";

import Image from "next/image";
import Reveal from "./Reveal";

import home from "../assets/screenshots/home.jpg";
import login from "../assets/screenshots/login.jpg";
import weekly from "../assets/screenshots/weekly.jpg";
import customize from "../assets/screenshots/customize.jpg";
import packageImg from "../assets/screenshots/package.jpg";

const screens = [
    {
        title: "Home",
        image: home,
    },
    {
        title: "Login",
        image: login,
    },
    {
        title: "Weekly Customization",
        image: weekly,
    },
    {
        title: "Meal Customization",
        image: customize,
    },
    {
        title: "Packages",
        image: packageImg,
    },
];

export default function AppShowcase() {
    return (
        <section
            className="
  relative
  overflow-hidden
  py-24
  bg-gradient-to-br
  from-[#070715]
  via-[#0F0B2F]
  to-[#070715]
  "
        >

            <div className="absolute inset-0 overflow-hidden -z-10">

                <div
                    className="
    absolute
    top-10
    left-0
    w-[450px]
    h-[450px]
    bg-violet-500/20
    rounded-full
    blur-[180px]
    "
                />

                <div
                    className="
    absolute
    bottom-0
    right-0
    w-[420px]
    h-[420px]
    bg-purple-600/20
    rounded-full
    blur-[180px]
    "
                />

            </div>
            <div className="max-w-7xl mx-auto px-6">

                <Reveal>

                    <div className="text-center mb-16">
                        <p className="text-violet-400 font-semibold uppercase tracking-widest">
                            Mobile Experience
                        </p>

                        <h2 className="text-5xl lg:text-6xl font-extrabold text-white mt-4">
                            Experience Tifzy
                            <span className="text-violet-400"> Like Never Before</span>
                        </h2>

                        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
                            Discover a beautifully crafted meal management experience designed
                            for students, professionals, and anyone who wants fresh homemade
                            food delivered with complete convenience.
                        </p>
                    </div>

                </Reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {screens.map((item, index) => (

                        <Reveal
                            key={index}
                            delay={index * 0.15}
                        >

                            <div
                                className="group rounded-3xl overflow-hidden border border-violet-500/20 bg-white/5 backdrop-blur-xl transition duration-500 hover:scale-[1.03] hover:border-violet-500 hover:shadow-[0_0_45px_rgba(139,92,246,.4)]"
                            >

                                <div className="relative overflow-hidden">

                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="transition duration-700 group-hover:scale-110"
                                    />

                                </div>

                                <div className="p-6">

                                    <h3 className="text-2xl text-white font-bold">
                                        {item.title}
                                    </h3>

                                </div>

                            </div>

                        </Reveal>

                    ))}

                </div>

            </div>
        </section>
    );
}