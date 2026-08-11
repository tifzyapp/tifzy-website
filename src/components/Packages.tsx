export default function Packages() {

  const packages = [

    {
      title: "Weekly Plan",
      price: "₹499",
      duration: "7 Days",
      popular: false,
      features: [
        "Lunch / Dinner",
        "Fresh Homemade Meals",
        "Meal Cancellation",
        "Live Address Change",
        "Customer Support"
      ]
    },

    {
      title: "Monthly Plan",
      price: "₹1799",
      duration: "30 Days",
      popular: true,
      features: [
        "Lunch / Dinner",
        "Best Value",
        "Meal Cancellation",
        "Live Address Change",
        "Priority Support"
      ]
    },

    {
      title: "Quarterly Plan",
      price: "₹4999",
      duration: "90 Days",
      popular: false,
      features: [
        "Lunch / Dinner",
        "Maximum Savings",
        "Meal Cancellation",
        "Live Address Change",
        "Premium Support"
      ]
    }

  ];

  return (

    <section
      id="packages"
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

            TIFZY PLANS

          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-white">

            Choose Your

            <span className="text-violet-400">

              {" "}Perfect Plan

            </span>

          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">

            Flexible meal subscriptions designed for students,
            professionals and families with complete transparency.

          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {packages.map((item,index)=>(

            <div
              key={index}
              className={`
              relative
              rounded-3xl
              border
              backdrop-blur-xl
              bg-white/5
              p-10
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-[0_0_45px_rgba(139,92,246,.35)]

              ${
                item.popular
                  ? "border-violet-500 scale-105"
                  : "border-violet-500/20"
              }

              `}
            >

              {item.popular && (

                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-2 rounded-full text-white font-bold shadow-lg">

                  ⭐ Most Popular

                </div>

              )}

              <h3 className="text-3xl font-bold text-white">

                {item.title}

              </h3>

              <div className="mt-8">

                <span className="text-6xl font-extrabold text-violet-400">

                  {item.price}

                </span>

                <p className="text-gray-400 mt-3">

                  {item.duration}

                </p>

              </div>

              <div className="mt-10 space-y-5">

                {item.features.map((feature,i)=>(

                  <div
                    key={i}
                    className="flex items-center gap-4"
                  >

                    <div className="w-7 h-7 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400">

                      ✓

                    </div>

                    <span className="text-gray-300">

                      {feature}

                    </span>

                  </div>

                ))}

              </div>

              <button
                className={`
                mt-10
                w-full
                py-4
                rounded-2xl
                font-bold
                transition-all
                duration-300

                ${
                  item.popular
                    ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:scale-105 hover:shadow-violet-500/40"
                    : "border border-violet-500 text-violet-300 hover:bg-violet-500 hover:text-white"
                }

                `}
              >

                Choose Plan

              </button>

            </div>

          ))}

        </div>

        {/* Trust Section */}

        <div className="mt-24">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-violet-500/20 p-8 text-center hover:border-violet-500 transition">

              <div className="text-5xl">🤝</div>

              <h3 className="text-white text-2xl font-bold mt-5">

                100% Fair Meal Promise

              </h3>

              <p className="text-gray-400 mt-4 leading-8">

                Pay for every meal and receive every meal.
                No hidden deductions.

              </p>

            </div>

            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-violet-500/20 p-8 text-center hover:border-violet-500 transition">

              <div className="text-5xl">🍱</div>

              <h3 className="text-white text-2xl font-bold mt-5">

                Fresh Homemade Food

              </h3>

              <p className="text-gray-400 mt-4 leading-8">

                Healthy meals prepared daily with
                homemade taste and hygiene.

              </p>

            </div>

            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-violet-500/20 p-8 text-center hover:border-violet-500 transition">

              <div className="text-5xl">📍</div>

              <h3 className="text-white text-2xl font-bold mt-5">

                Smart Delivery

              </h3>

              <p className="text-gray-400 mt-4 leading-8">

                Change your address anytime and enjoy
                reliable on-time delivery.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>


  );

}