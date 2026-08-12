import Image from "next/image";

export default function Download() {
  return (
    <section
      id="download"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#070715] via-[#0F0B2F] to-[#070715]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-[150px]" />

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-purple-700/20 rounded-full blur-[170px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-block bg-violet-500/20 border border-violet-500/30 text-violet-300 px-5 py-2 rounded-full font-semibold backdrop-blur-md">
              📱 Android Application
            </span>

            <h2 className="text-5xl font-extrabold text-white mt-8 leading-tight">
              Download the
              <br />

              <span className="text-violet-400">
                Tifzy App Today
              </span>

            </h2>

            <p className="mt-8 text-gray-300 text-lg leading-8 max-w-xl">
              Fresh homemade meals delivered every day to students,
              office employees and working professionals.
              Enjoy hygienic food without worrying about cooking.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="https://github.com/tifzyapp/tifzy-website/releases/download/v1.0.0/tifzy.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="
    bg-gradient-to-r
    from-violet-500
    to-purple-600
    text-white
    font-bold
    px-8
    py-4
    rounded-2xl
    hover:scale-105
    transition
    shadow-lg
    hover:shadow-violet-500/40
  "
              >
                📥 Download APK
              </a>

              <a
                href="#packages"
                className="
border
border-violet-500
text-violet-300
px-8
py-4
rounded-2xl
hover:bg-violet-500
hover:text-white
transition
"
              >
                View Packages
              </a>

            </div>

            <div className="grid grid-cols-3 gap-8 mt-14">

              <div>

                <h3 className="text-3xl font-bold text-violet-400">
                  4.9★
                </h3>

                <p className="text-gray-400">
                  User Rating
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-violet-400">
                  24×7
                </h3>

                <p className="text-gray-400">
                  Support
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-violet-400">
                  100%
                </h3>

                <p className="text-gray-400">
                  Homemade Food
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <div
              className="
w-[340px]
rounded-[36px]
border
border-violet-500/20
bg-white/5
backdrop-blur-xl
shadow-[0_0_45px_rgba(139,92,246,.35)]
p-6
"
            >

              <Image
                src="/images/logo.png"
                alt="Tifzy App"
                width={300}
                height={300}
                className="rounded-3xl mx-auto"
              />

              <h3 className="text-3xl font-bold text-center text-white mt-6">
                Tifzy
              </h3>

              <p className="text-center text-violet-300 mt-2">
                Taste of Mother ❤️
              </p>

              <div className="mt-8 space-y-4">

                <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-4 text-center text-violet-200 font-semibold">
                  🍱 Fresh Homemade Meals
                </div>

                <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-4 text-center text-violet-200 font-semibold">
                  🚚 Fast Daily Delivery
                </div>

                <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-4 text-center text-violet-200 font-semibold">
                  📅 Flexible Meal Plans
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}