"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
    {
        label: "Home",
        href: "#home",
    },
    {
        label: "Features",
        href: "#features",
    },
    {
        label: "Packages",
        href: "#packages",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`
                fixed
                top-5
                left-1/2
                -translate-x-1/2
                w-[94%]
                max-w-7xl
                z-50
                rounded-2xl
                border
                transition-all
                duration-500
                ${
                    scrolled
                        ? `
                            bg-[#0B0B17]/90
                            backdrop-blur-2xl
                            border-white/15
                            shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                        `
                        : `
                            bg-[#0B0B17]/70
                            backdrop-blur-xl
                            border-white/10
                            shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                        `
                }
            `}
        >
            <div className="flex items-center justify-between h-20 px-5 sm:px-6 md:px-8">

                {/* =========================
                    LOGO + BRAND
                ========================== */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    className="flex items-center gap-3 shrink-0"
                >
                    <img
                        src="/images/logo.png"
                        alt="Tifzy"
                        className={`
                            w-11
                            h-11
                            sm:w-12
                            sm:h-12
                            rounded-xl
                            object-cover
                            transition-all
                            duration-300
                            ${
                                scrolled
                                    ? "shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                                    : "shadow-[0_0_15px_rgba(139,92,246,0.20)]"
                            }
                        `}
                    />

                    <div className="leading-tight">
                        <h1 className="text-xl sm:text-2xl font-bold text-white">
                            Tifzy
                        </h1>

                        <p className="text-[10px] sm:text-xs text-orange-400 whitespace-nowrap">
                            Taste of Mother ❤️
                        </p>
                    </div>
                </motion.div>

                {/* =========================
                    DESKTOP NAVIGATION
                ========================== */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="
                        hidden
                        md:flex
                        items-center
                        gap-8
                    "
                >
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="
                                relative
                                text-white
                                font-medium
                                transition-colors
                                duration-300
                                hover:text-violet-400
                                after:absolute
                                after:left-0
                                after:-bottom-2
                                after:h-[2px]
                                after:w-0
                                after:rounded-full
                                after:bg-violet-500
                                after:transition-all
                                after:duration-300
                                hover:after:w-full
                            "
                        >
                            {item.label}
                        </a>
                    ))}
                </motion.div>

                {/* =========================
                    DOWNLOAD BUTTON
                ========================== */}
                <motion.a
                    href="#download"
                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                    className="
                        shrink-0
                        px-4
                        py-2.5
                        sm:px-6
                        sm:py-3
                        rounded-xl
                        bg-gradient-to-r
                        from-violet-500
                        to-purple-600
                        text-white
                        text-sm
                        sm:text-base
                        font-semibold
                        shadow-lg
                        shadow-violet-500/20
                        hover:shadow-violet-500/50
                        transition-all
                        duration-300
                        whitespace-nowrap
                    "
                >
                    Download APK
                </motion.a>
            </div>
        </nav>
    );
}