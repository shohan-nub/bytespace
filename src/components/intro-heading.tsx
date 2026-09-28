export function IntroHeading() {
  return (
    <section
      aria-labelledby="intro-heading"
      className="motion-safe:animate-fade-up mx-auto mt-[72px] flex w-[min(917px,calc(100%-48px))] flex-col items-center gap-4 text-center"
    >
      <h2
        className="font-poppins w-full max-w-[588px] text-[clamp(32px,3.056vw,44px)] font-semibold leading-[1.2] tracking-[-0.44px] text-[#040819]"
        id="intro-heading"
      >
        Discover Your Passion, Build Your Skills
      </h2>
      <p className="w-full text-[18px] leading-[1.6] text-[#82868e]">
        At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
      </p>
    </section>
  );
}
