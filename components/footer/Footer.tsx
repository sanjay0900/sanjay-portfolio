import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight, ArrowUp } from "lucide-react";

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
      className="relative mt-32 overflow-hidden border-t border-white/10 bg-[#08090C] sm:mt-40"
    >
      {/* Background Atmosphere */}

      <div className="pointer-events-none absolute inset-0">
        {/* Indigo */}

        <div className="absolute left-[10%] top-0 h-[350px] w-[350px] rounded-full bg-indigo-600/10 blur-[150px]" />

        {/* Cyan */}

        <div className="absolute right-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-cyan-500/[0.06] blur-[140px]" />

        {/* Violet */}

        <div className="absolute bottom-0 left-1/2 h-[250px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/[0.06] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 sm:text-sm sm:tracking-[0.35em]">
              LET'S CONNECT
            </p>

            <h2 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Let's Build
              <br />
              Something Great
              <br />
              <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                Together.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-300 sm:mt-8 sm:text-lg sm:leading-9">
              Whether you're launching a new Web3 ecosystem,
              scaling an existing community, planning regional
              campaigns or hosting offline events, I'd love
              to collaborate and help build meaningful
              communities.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">
              {[
                "Community Growth",
                "Operations",
                "Web3",
                "Offline Events",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-zinc-300 transition-all duration-300 hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-indigo-200 sm:px-5 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <Link
                  key={contact.title}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:bg-white/[0.05] hover:shadow-[0_0_45px_rgba(99,102,241,0.18)] sm:rounded-3xl sm:p-6"
                >
                  {/* Card Glow */}

                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-500/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 sm:h-16 sm:w-16">
                      <Icon className="text-3xl text-indigo-400 sm:text-4xl" />
                    </div>

                    <ArrowUpRight className="text-zinc-500 transition-all duration-300 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:rotate-12 group-hover:text-indigo-400" />
                  </div>

                  <h3 className="relative mt-5 text-xl font-bold text-white sm:mt-6 sm:text-2xl">
                    {contact.title}
                  </h3>

                  <p className="relative mt-2 break-all text-xs text-zinc-400 sm:text-sm">
                    {contact.value}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom */}

        <div className="relative mt-20 pt-8 sm:mt-24">
          {/* Gradient Divider */}

          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

          <div className="flex flex-col gap-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            {/* Identity */}

            <div className="flex flex-col gap-1">
              <Link
                href="#home"
                className="font-[family-name:var(--font-space)] text-lg font-semibold tracking-tight text-white transition-colors hover:text-violet-300"
              >
                Sanjay.
              </Link>

              <p>
                © 2026 Sanjay Das. All rights reserved.
              </p>
            </div>

            {/* Tech */}

            <p className="text-xs text-zinc-500 sm:text-sm">
              Crafted with{" "}
              <span className="text-pink-400">♥</span>{" "}
              using Next.js • TypeScript • Tailwind CSS
            </p>

            {/* Back To Top */}

            <Link
              href="#home"
              className="group inline-flex w-fit items-center gap-2 text-zinc-400 transition-colors hover:text-white"
            >
              Back to top
              <ArrowUp
                className="size-4 transition-transform duration-300 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}