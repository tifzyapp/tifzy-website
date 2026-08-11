export default function Features() {
  const features = [
    {
      icon: "📅",
      title: "Smart Meal Management",
      desc: "Cancel meals before cutoff time and receive fair meal extensions according to your package."
    },
    {
      icon: "🍛",
      title: "Fresh Homemade Food",
      desc: "Healthy, hygienic and delicious homemade meals prepared fresh every day."
    },
    {
      icon: "📍",
      title: "Live Address Change",
      desc: "Update your delivery address instantly from the app whenever you need."
    },
    {
      icon: "⏰",
      title: "On-Time Delivery",
      desc: "Lunch and dinner delivered at your preferred time with reliable service."
    },
    {
      icon: "💳",
      title: "Secure Payments",
      desc: "Fast and secure online payments powered by Razorpay."
    },
    {
      icon: "📱",
      title: "Easy To Use App",
      desc: "Manage subscriptions, cancellations and meal plans with just a few taps."
    },
    {
      icon: "📦",
      title: "Flexible Packages",
      desc: "Choose from Weekly, Monthly and Combo meal plans according to your lifestyle."
    },
    {
      icon: "🤝",
      title: "Fair Meal Promise",
      desc: "Pay for every meal and receive every meal. Complete fairness and transparency."
    }
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#070715] via-[#0F0B2F] to-[#070715]"
    >

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden -z-10">

        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-violet-500/20 rounded-full blur-[180px]" />

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-purple-600/20 rounded-full blur-[180px]" />

      </div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="inline-block bg-violet-500/20 border border-violet-500/30 backdrop-blur-md text-violet-300 px-5 py-2 rounded-full font-semibold">

            APP FEATURES

          </span>

          <h2 className="text-5xl font-extrabold mt-6 text-white">

            Everything You Need

            <span className="text-violet-400">

              {" "}In One App

            </span>

          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">

            Tifzy is more than a tiffin service.
            It's a complete meal management platform
            built for students, professionals,
            and busy lifestyles.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

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
                w-16
                h-16
                rounded-2xl
                bg-violet-500/20
                flex
                items-center
                justify-center
                text-4xl
                transition
                duration-500
                group-hover:scale-110
                "
              >

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold text-white mt-6">

                {item.title}

              </h3>

              <p className="text-gray-300 mt-5 leading-8">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}