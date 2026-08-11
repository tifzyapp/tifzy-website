export default function WhyChoose() {
  const features = [
    {
      title: "Homemade Food",
      icon: "🏠",
      desc: "Fresh meals prepared with home-style taste every day.",
    },
    {
      title: "Flexible Meal Management",
      icon: "📅",
      desc: "Cancel or manage meals easily through the app.",
    },
    {
      title: "On-Time Delivery",
      icon: "⏰",
      desc: "Lunch and dinner delivered at your preferred time.",
    },
    {
      title: "Live Address Change",
      icon: "📍",
      desc: "Change your delivery location instantly whenever needed.",
    },
    {
      title: "Affordable Packages",
      icon: "💰",
      desc: "Weekly and monthly plans for every budget.",
    },
    {
      title: "Secure Payments",
      icon: "🔒",
      desc: "Simple and secure online payment experience.",
    },
  ];

  return (
    <section
      id="features"
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

        <div
          className="
          absolute
          top-0
          left-10
          w-96
          h-96
          bg-violet-500/20
          rounded-full
          blur-[170px]
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
          blur-[190px]
          "
        />

      </div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="text-violet-400 uppercase tracking-[0.25em] font-semibold">

            WHY CHOOSE TIFZY

          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-white">

            Everything You Need

            <span className="text-violet-400">

              {" "}In One App

            </span>

          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">

            Experience homemade food with complete flexibility,
            smart meal management, secure payments,
            and reliable delivery — all inside one premium app.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {features.map((item, index) => (

            <div
              key={index}
              className="
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

              <div
                className="
                w-20
                h-20
                rounded-2xl
                bg-violet-500/20
                flex
                items-center
                justify-center
                text-5xl
                transition
                duration-500
                group-hover:scale-110
                "
              >

                {item.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">

                {item.title}

              </h3>

              <p className="mt-5 text-gray-300 leading-8">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}