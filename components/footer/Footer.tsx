import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

const contacts = [
  {
    title: "Email",
    value: "das.sanjay.2404@gmail.com",
    href: "mailto:das.sanjay.2404@gmail.com",
    icon: MdEmail,
  },
  {
    title: "Telegram",
    value: "@S4Sanjay_das",
    href: "https://t.me/S4Sanjay_das",
    icon: FaTelegramPlane,
  },
  {
    title: "LinkedIn",
    value: "Sanjay Das",
    href: "https://in.linkedin.com/in/sanjay-das-271655246",
    icon: FaLinkedin,
  },
  {
    title: "X (Twitter)",
    value: "@S4Sanjay_das",
    href: "https://x.com/S4Sanjay_das",
    icon: FaXTwitter,
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-40 border-t border-white/10 bg-[#08090C]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-400">
              LET'S CONNECT
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight text-white lg:text-7xl">
              Let's Build
              <br />
              Something Great
              <br />
              Together.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-zinc-300">
              Whether you're launching a new Web3 ecosystem,
              scaling an existing community, planning regional
              campaigns or hosting offline events, I'd love
              to collaborate and help build meaningful
              communities.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "Community Growth",
                "Operations",
                "Web3",
                "Offline Events",
              ].map((item) => (

                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 transition hover:border-indigo-500/40 hover:bg-indigo-500/10"
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="grid gap-6 sm:grid-cols-2">

            {contacts.map((contact) => {

              const Icon = contact.icon;

              return (

                <Link
                  key={contact.title}
                  href={contact.href}
                  target="_blank"
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:bg-white/[0.05] hover:shadow-[0_0_45px_rgba(99,102,241,0.18)]"
                >

                  {/* Card Glow */}

                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-500/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative flex items-center justify-between">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10">

                      <Icon className="text-4xl text-indigo-400" />

                    </div>

                    <ArrowUpRight className="text-zinc-500 transition-all duration-300 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:rotate-12 group-hover:text-indigo-400" />

                  </div>

                  <h3 className="relative mt-6 text-2xl font-bold text-white">
                    {contact.title}
                  </h3>

                  <p className="relative mt-2 break-all text-sm text-zinc-400">
                    {contact.value}
                  </p>

                </Link>

              );

            })}

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-24 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">

          <p>
            © 2026 Sanjay Das. All rights reserved.
          </p>

          <p>
            Crafted with ❤️ using Next.js • TypeScript • Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}