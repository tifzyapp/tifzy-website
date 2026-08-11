export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#070715] via-[#0F0B2F] to-[#070715] border-t border-violet-500/20">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-violet-600/20 rounded-full blur-[140px]"></div>

        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-purple-700/20 rounded-full blur-[170px]"></div>

      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-4xl font-extrabold text-white">
              Tifzy
            </h2>

            <p className="text-violet-400 mt-2 font-medium">
              Taste of Mother ❤️
            </p>

            <p className="text-gray-400 mt-6 leading-8">
              Fresh homemade meals delivered every day with
              hygiene, fairness and love.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <a href="#home" className="text-gray-400 hover:text-violet-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#features" className="text-gray-400 hover:text-violet-400 transition">
                  Features
                </a>
              </li>

              <li>
                <a href="#packages" className="text-gray-400 hover:text-violet-400 transition">
                  Packages
                </a>
              </li>

              <li>
                <a href="#contact" className="text-gray-400 hover:text-violet-400 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Legal */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Legal
            </h3>

            <ul className="space-y-4">

              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-violet-400 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="/terms-and-conditions" className="text-gray-400 hover:text-violet-400 transition">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="/shipping-policy" className="text-gray-400 hover:text-violet-400 transition">
                  Shipping Policy
                </a>
              </li>

              <li>
                <a href="/cancellation-refund" className="text-gray-400 hover:text-violet-400 transition">
                  Cancellation & Refund
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <p>
                📍 Nagpur, Maharashtra
              </p>

              <p>
                📧 tifzy99@gmail.com
              </p>

              <p>
                📞 +91 9356299245
              </p>

            </div>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 border border-violet-500/20 flex items-center justify-center hover:bg-violet-500 transition text-xl"
              >
                📘
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 border border-violet-500/20 flex items-center justify-center hover:bg-violet-500 transition text-xl"
              >
                📸
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 border border-violet-500/20 flex items-center justify-center hover:bg-violet-500 transition text-xl"
              >
                ▶️
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 pt-8 border-t border-violet-500/20 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 Tifzy. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Made with ❤️ in India
          </p>

        </div>

      </div>

    </footer>
  );
}