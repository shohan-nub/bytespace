const partnerLogos = [
  { src: "/figma/partners/partner-logo-1.svg", width: 167, height: 41 },
  { src: "/figma/partners/partner-logo-2.svg", width: 168, height: 41 },
  { src: "/figma/partners/partner-logo-3.svg", width: 170, height: 41 },
  { src: "/figma/partners/partner-logo-4.svg", width: 170, height: 41 },
  { src: "/figma/partners/partner-logo-5.svg", width: 169, height: 42 },
];

export function PartnerLogos() {
  return (
    <section aria-label="Our partners" className="flex min-h-[202px] items-center justify-center bg-[#f5f5f6] py-8 sm:h-[202px] sm:py-0">
      <div className="grid w-full grid-cols-6 items-center gap-x-3 gap-y-6 px-6 md:flex md:w-auto md:justify-center md:gap-8 md:px-0 xl:gap-[72px]">
        {partnerLogos.map((logo, index) => (
          <div
            className={`col-span-2 flex justify-center md:block ${index === 3 ? "col-start-2" : ""} ${index === 4 ? "col-start-4" : ""}`}
            key={logo.src}
          >
            <img
              alt="Logoipsum partner"
              className="h-auto w-full max-w-[167px] motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:scale-[1.025] md:w-[clamp(112px,13vw,167px)] xl:w-auto"
              height={logo.height}
              src={logo.src}
              width={logo.width}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
