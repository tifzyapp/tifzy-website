export default function Testimonials() {

  const reviews = [

    {
      name: "Amit Sharma",
      role: "College Student",
      review:
        "Tifzy makes my daily routine much easier. The food tastes homemade and always arrives on time.",
    },

    {
      name: "Priya Verma",
      role: "Software Engineer",
      review:
        "Perfect for office life. I no longer worry about cooking or ordering unhealthy fast food.",
    },

    {
      name: "Rahul Patil",
      role: "Working Professional",
      review:
        "The app is simple to use and the meal plans are flexible. Looking forward to using it regularly.",
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

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden -z-10">

        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-violet-500/20 rounded-full blur-[180px]" />

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-purple-600/20 rounded-full blur-[180px]" />

      </div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="inline-block bg-violet-500/20 border border-violet-500/30 backdrop-blur-md text-violet-300 px-5 py-2 rounded-full font-semibold">

            TESTIMONIALS

          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-white">

            Loved By

            <span className="text-violet-400">

              {" "}Our Customers

            </span>

          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">

            Thousands of users trust Tifzy for fresh homemade meals,
            reliable delivery and complete transparency.

          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {reviews.map((item,index)=>(

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

              {/* Quote */}

              <div className="absolute top-6 right-6 text-7xl text-violet-500/15 font-black">

                “

              </div>

              {/* Rating */}

              <div className="text-yellow-400 text-xl tracking-wider">

                ★★★★★

              </div>

              {/* Review */}

              <p className="mt-6 text-gray-300 leading-8 italic">

                "{item.review}"

              </p>

              {/* User */}

              <div className="flex items-center gap-4 mt-10">

                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">

                  {item.name.charAt(0)}

                </div>

                <div>

                  <h3 className="text-white font-bold text-xl">

                    {item.name}

                  </h3>

                  <p className="text-violet-300">

                    {item.role}

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}