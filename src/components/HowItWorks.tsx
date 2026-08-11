export default function HowItWorks() {

  const steps = [

    {
      number: "01",
      icon: "📲",
      title: "Download Tifzy",
      desc: "Install the Tifzy app and create your account within a minute."
    },

    {
      number: "02",
      icon: "🍱",
      title: "Choose Your Package",
      desc: "Select Weekly, Monthly or Quarterly meal plans according to your lifestyle."
    },

    {
      number: "03",
      icon: "👩‍🍳",
      title: "Fresh Food is Prepared",
      desc: "Our kitchen prepares hygienic and delicious homemade meals every day."
    },

    {
      number: "04",
      icon: "🚚",
      title: "Delivered To Your Door",
      desc: "Enjoy fresh meals delivered on time to your preferred location."
    }

  ];

  return (

    <section
      id="how-it-works"
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

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden -z-10">

        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-violet-500/20 rounded-full blur-[180px]" />

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-purple-600/20 rounded-full blur-[180px]" />

      </div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="inline-block bg-violet-500/20 border border-violet-500/30 backdrop-blur-md text-violet-300 px-5 py-2 rounded-full font-semibold">

            HOW IT WORKS

          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-white">

            Start Your

            <span className="text-violet-400">

              {" "}Meal Journey

            </span>

          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">

            From downloading the app to receiving fresh homemade meals,
            everything is simple, transparent and designed for convenience.

          </p>

        </div>

        <div className="relative mt-20">

          {/* Desktop Timeline */}

          <div className="hidden lg:block absolute top-16 left-0 right-0 h-[2px] bg-violet-500/20"></div>

          <div className="grid lg:grid-cols-4 gap-10">

            {steps.map((step,index)=>(

              <div
                key={index}
                className="
                relative
                group
                rounded-3xl
                border
                border-violet-500/20
                bg-white/5
                backdrop-blur-xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-violet-500
                hover:shadow-[0_0_45px_rgba(139,92,246,.35)]
                "
              >

                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold flex items-center justify-center shadow-lg">

                  {step.number}

                </div>

                <div className="text-6xl mt-8 text-center">

                  {step.icon}

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white text-center">

                  {step.title}

                </h3>

                <p className="mt-5 text-gray-300 text-center leading-8">

                  {step.desc}

                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}