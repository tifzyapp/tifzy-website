"use client";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
  id="home"
  className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#070715] via-[#0F0B2F] to-[#070715] flex items-center pt-28"
>
<div className="absolute inset-0 overflow-hidden -z-10">

  <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/20 rounded-full blur-[140px]"></div>

  <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[170px]"></div>

</div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left Side */}
        <div>

          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-violet-500/20 border border-violet-500/30 backdrop-blur-md text-violet-300 px-4 py-2 rounded-full font-semibold"
          >
            🍱 Healthy • Fresh • Homemade
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="mt-6 text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight"
          >
            Homemade Meals
            <br />
            Delivered
            <span className="text-violet-400"> Daily.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4
            }}
            className="mt-6 text-xl text-gray-300 leading-9 max-w-xl"
          >
            Tifzy delivers fresh, hygienic and affordable homemade meals to
            students, office employees and working professionals. No cooking,
            no stress — just delicious food delivered on time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6
            }}
            className="mt-10 flex flex-wrap gap-5"
          >

            <button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:scale-105 transition text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-violet-500/40">
              Download APK
            </button>

            <button className="border-2 border-violet-500 text-violet-300 hover:bg-violet-500 hover:text-white transition px-8 py-4 rounded-xl font-bold">
              Explore Packages
            </button>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8
            }}
            className="mt-12 flex flex-wrap gap-12"
          >

            <div>
              <h2 className="text-3xl font-bold text-violet-400">100%</h2>
              <p className="text-gray-300">Homemade Food</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-violet-400">7 Days</h2>
              <p className="text-gray-300">Weekly Plans</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-violet-400">24×7</h2>
              <p className="text-gray-300">Support</p>
            </div>

          </motion.div>

        </div>

        {/* Right Side */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            x: 60
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0
          }}
          transition={{
            duration: 1,
            delay: 1
          }}
          className="relative flex justify-center"
        >

          <div className="absolute w-[420px] h-[420px] bg-violet-600 rounded-full blur-[150px] opacity-30"></div>

          <img
            src="/images/logo.png"
            alt="Tifzy"
            className="relative w-72 lg:w-96 drop-shadow-2xl"
          />

      </motion.div>

    </div>
    </section >
  );
}