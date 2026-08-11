"use client";

import { motion } from "framer-motion";

const particles = [
    { left: "5%", top: "10%", size: 2 },
    { left: "12%", top: "70%", size: 3 },
    { left: "20%", top: "30%", size: 2 },
    { left: "28%", top: "85%", size: 4 },
    { left: "35%", top: "18%", size: 2 },
    { left: "42%", top: "60%", size: 3 },
    { left: "50%", top: "15%", size: 2 },
    { left: "58%", top: "78%", size: 4 },
    { left: "65%", top: "40%", size: 2 },
    { left: "72%", top: "90%", size: 3 },
    { left: "80%", top: "25%", size: 2 },
    { left: "88%", top: "65%", size: 4 },
    { left: "95%", top: "45%", size: 2 },
];

export default function ParticlesBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">

            {/* Main Purple Glow */}
            <motion.div
                animate={{
                    x: [0, 80, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[180px]"
            />

            {/* Pink Glow */}
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 80, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/15 rounded-full blur-[180px]"
            />

            {/* Floating Dots */}
            {particles.map((particle, index) => (
                <motion.div
                    key={index}
                    animate={{
                        y: [0, -80, 0],
                        opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                        duration: 5 + (index % 5),
                        repeat: Infinity,
                        delay: index * 0.2,
                    }}
                    className="absolute rounded-full bg-violet-400"
                    style={{
                        left: particle.left,
                        top: particle.top,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                    }}
                />
            ))}
        </div>
    );
}