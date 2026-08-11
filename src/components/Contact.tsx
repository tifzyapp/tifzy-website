export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#070715] via-[#0F0B2F] to-[#070715]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-violet-600/20 rounded-full blur-[170px]"></div>

        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-purple-700/20 rounded-full blur-[150px]"></div>

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-block bg-violet-500/20 border border-violet-500/30 text-violet-300 px-5 py-2 rounded-full font-semibold backdrop-blur-md">
            Contact Us
          </span>

          <h2 className="text-5xl font-extrabold text-white mt-6">
            Get In
            <span className="text-violet-400"> Touch</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Reach out for support, partnerships,
            feedback or any questions.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {/* LEFT CARD */}

          <div
            className="
bg-white/5
border
border-violet-500/20
rounded-3xl
backdrop-blur-xl
shadow-[0_0_40px_rgba(139,92,246,.20)]
p-10
"
          >

            <h3 className="text-3xl font-bold text-white mb-10">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5">

                <div className="text-3xl">
                  📍
                </div>

                <div>

                  <h4 className="text-white font-semibold">
                    Address
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Nagpur, Maharashtra, India
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="text-3xl">
                  📧
                </div>

                <div>

                  <h4 className="text-white font-semibold">
                    Email
                  </h4>

                  <p className="text-gray-400 mt-2">
                    support@tifzy.in
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="text-3xl">
                  📞
                </div>

                <div>

                  <h4 className="text-white font-semibold">
                    Phone
                  </h4>

                  <p className="text-gray-400 mt-2">
                    +91 XXXXXXXXXX
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="text-3xl">
                  🕒
                </div>

                <div>

                  <h4 className="text-white font-semibold">
                    Support Hours
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Monday – Sunday
                    <br />
                    8:00 AM – 10:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT CARD */}

          <div
            className="
bg-white/5
border
border-violet-500/20
rounded-3xl
backdrop-blur-xl
shadow-[0_0_40px_rgba(139,92,246,.20)]
p-10
"
          >

            <h3 className="text-3xl font-bold text-white mb-8">
              Send a Message
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="
w-full
rounded-2xl
bg-[#16162A]
border
border-violet-500/20
p-4
text-white
placeholder:text-gray-500
outline-none
focus:border-violet-500
transition
"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
w-full
rounded-2xl
bg-[#16162A]
border
border-violet-500/20
p-4
text-white
placeholder:text-gray-500
outline-none
focus:border-violet-500
transition
"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="
w-full
rounded-2xl
bg-[#16162A]
border
border-violet-500/20
p-4
text-white
placeholder:text-gray-500
outline-none
focus:border-violet-500
transition
resize-none
"
              />

              <button
                className="
w-full
py-4
rounded-2xl
font-bold
text-white
bg-gradient-to-r
from-violet-500
to-purple-600
hover:scale-[1.02]
transition
shadow-lg
hover:shadow-violet-500/40
"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}