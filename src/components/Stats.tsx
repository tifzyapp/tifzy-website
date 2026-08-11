export default function Stats() {
  const stats = [
    {
      number: "100%",
      title: "Fair Meal Promise",
      icon: "🤝",
    },
    {
      number: "24×7",
      title: "Easy App Access",
      icon: "📱",
    },
    {
      number: "7 Days",
      title: "Fresh Meal Service",
      icon: "🍱",
    },
    {
      number: "On Time",
      title: "Delivery Commitment",
      icon: "🚚",
    },
  ];

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
    right-10
    w-80
    h-80
    bg-violet-500/20
    rounded-full
    blur-[150px]
    "
        />

        <div
          className="
    absolute
    bottom-0
    left-0
    w-96
    h-96
    bg-purple-600/20
    rounded-full
    blur-[180px]
    "
        />

      </div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-violet-400 uppercase tracking-[0.25em] font-semibold">
            WHY PEOPLE LOVE TIFZY
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
            Trusted by Students &
            <span className="text-violet-400"> Working Professionals</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Every package is designed to provide fresh homemade meals,
            reliable delivery, and complete peace of mind.
          </p>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="
              rounded-3xl
              border
              border-violet-500/20
              bg-white/5
backdrop-blur-xl
              p-8
              text-center
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-violet-500
              hover:shadow-[0_0_40px_rgba(139,92,246,.35)]
              "
            >

              <div className="text-6xl mb-5">
                {item.icon}
              </div>

              <h2 className="text-5xl font-extrabold text-violet-400">
                {item.number}
              </h2>

              <p className="mt-5 text-gray-300 text-lg font-semibold leading-7">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}