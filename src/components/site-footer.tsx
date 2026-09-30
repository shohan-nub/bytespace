"use client";

import Image from "next/image";
import { useScrollReveal } from "@/components/use-scroll-reveal";

const footerColumns = [
  {
    label: "Browse",
    links: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  },
  {
    label: "More categories",
    links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
  },
  {
    label: "Platform",
    links: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
  },
];

function FooterLink({ children }: { children: string }) {
  return (
    <a
      className="w-fit text-[14px] leading-[1.6] text-[#242528] transition-colors hover:text-[#003be2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003be2]"
      href="#"
    >
      {children}
    </a>
  );
}

export function SiteFooter() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  return (
    <footer className="relative bg-white">
      <img
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-full object-cover"
        src="/figma/footer/footer-top-rule.svg"
      />
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1200px] pb-10 pt-[56px] min-[1248px]:h-[525px] min-[1248px]:pb-0 min-[1248px]:pt-[71px]" ref={revealRef}>
        <div className="grid gap-12 min-[1248px]:h-[234px] min-[1248px]:grid-cols-[528px_1fr] min-[1248px]:gap-[92px]">
          <div className="w-full max-w-[528px]">
            <div className="flex items-center gap-4">
              <Image
                alt=""
                aria-hidden="true"
                height={32}
                src="/figma/footer/footer-brand-mark.svg"
                width={29}
              />
              <span className="font-clash text-[24px] font-bold leading-[1.2] text-[#242528]">
                ByteSpace
              </span>
            </div>
            <p className="mt-4 max-w-[528px] text-[14px] leading-[1.6] text-[#242528]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <form className="mt-[45px] flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6" action="#">
              <label className="sr-only" htmlFor="footer-email">Email address</label>
              <input
                className="h-[52px] min-w-0 flex-1 rounded-full border border-[#ced0d3] bg-white px-6 text-[16px] text-[#242528] outline-none placeholder:text-[#7a7b7d] focus:border-[#003be2]"
                id="footer-email"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
              <button
                className="h-[46px] shrink-0 rounded-[24px] bg-[#d4fb20] px-6 text-[18px] font-medium leading-[1.2] text-[#242528] transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] motion-reduce:transform-none"
                type="submit"
              >
                Search
              </button>
            </form>
            <p className="mt-6 max-w-[504px] text-[12px] leading-[1.6] text-[#242528]">
              By subscribing, you agree to our <a className="underline" href="#privacy">Privacy Policy</a> and consent to receive updates from our company.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-8 min-[1248px]:gap-x-10">
            {footerColumns.map((column, index) => (
              <div className="pt-0 xl:pt-12" key={column.label}>
                <h2 className="mb-6 text-[14px] font-semibold leading-[1.6] text-[#242528] xl:sr-only">
                  {column.label}
                </h2>
                <ul className="flex flex-col gap-4">
                  {column.links.map((link) => <li key={link}><FooterLink>{link}</FooterLink></li>)}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 xl:mt-[59px]">
          <img
            alt=""
            aria-hidden="true"
            className="h-px w-full object-cover"
            src="/figma/footer/footer-copy-divider.svg"
          />
          <div className="flex flex-col gap-4 pt-6 text-[12px] leading-[1.6] text-[#4f4f4f] sm:flex-row sm:items-center sm:justify-between">
            <p>@ 2023 ByteSpace. All rights reserved.</p>
            <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
              <a className="hover:text-[#003be2]" href="#privacy">Privacy Policy</a>
              <a className="hover:text-[#003be2]" href="#terms">Terms of Service</a>
              <a className="hover:text-[#003be2]" href="#cookies">Cookies Settings</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
