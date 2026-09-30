import Image from "next/image";
import { SiteHeader } from "./site-header";

const asset = (name: string) => "/figma/" + name;

const students = [
  "student-1.png",
  "student-2.png",
  "student-3.png",
  "student-4.png",
  "student-5.png",
  "student-6.png",
  "student-7.png",
];

function SearchBar() {
  return (
    <form action="#courses" className="hero-search mx-auto flex items-center gap-4" role="search">
      <label className="search-field flex h-[52px] min-w-0 flex-1 items-center gap-2 rounded-[24px] bg-white px-6">
        <img alt="" className="h-6 w-6 shrink-0" height="24" src={asset("search.svg")} width="24" />
        <input aria-label="Search courses, topics, and creators" className="min-w-0 flex-1 bg-transparent text-[18px] text-[#242528] outline-none placeholder:text-[#82868e]" placeholder="Course, topic, creator" />
      </label>
      <button className="search-button h-[52px] rounded-[24px] bg-[#d4fb20] px-6 text-[18px] font-medium text-[#242528] transition-colors hover:bg-[#c8ef17]" type="submit">Search</button>
    </form>
  );
}

function LearningProgressCard() {
  return (
    <aside aria-label="Learning progress: 55 percent" className="progress-card absolute z-10 rounded-2xl bg-white p-4 backdrop-blur-[10px]">
      <p className="text-[14px] font-medium leading-[17px] text-[#242528]">Learning Progress</p>
      <p className="mt-2 font-poppins text-[48px] font-semibold leading-[58px] tracking-[-0.48px] text-[#242528]">55%</p>
      <div aria-hidden="true" className="mt-2 h-2 w-[200px] overflow-hidden rounded-full bg-[#f6f6f6]">
        <div className="h-full w-[56%] rounded-full bg-[#d4fb20]" />
      </div>
    </aside>
  );
}

function StudentsCard() {
  return (
    <aside aria-label="Happy students, rating 4.5 out of 5" className="students-card absolute z-10 rounded-2xl bg-white p-4 backdrop-blur-[10px]">
      <p className="text-[16px] font-medium leading-5 text-[#242528]">Happy Students</p>
      <div className="flex items-center gap-0.5 text-[12px] leading-[19px] text-[#82868e]">
        <span className="text-[#242528]">4.5</span><span>(240)</span>
        <img alt="" className="ml-0.5 h-4 w-4" height="16" src={asset("star.svg")} width="16" />
      </div>
      <div className="mt-2 flex items-center">
        {students.map((student, index) => (
          <Image alt="" className="-ml-4 first:ml-0 rounded-full object-cover ring-2 ring-white" height={43} key={student} src={asset(student)} width={43} style={{ zIndex: index }} />
        ))}
        <span className="-ml-4 flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#d4fb20] text-[12px] font-bold text-[#242528] ring-2 ring-white">2K+</span>
      </div>
    </aside>
  );
}

function CourseCategoryCard() {
  return (
    <aside className="category-card absolute z-10 rounded-2xl bg-white px-4 py-4 backdrop-blur-[10px]">
      <p className="text-[16px] font-medium leading-5 text-[#242528]">UI/UX Design</p>
      <p className="mt-0.5 whitespace-nowrap text-[12px] leading-4 text-[#82868e]">200 Courses&nbsp;&nbsp; • &nbsp;&nbsp;1000+ Students</p>
    </aside>
  );
}

function MaskedHeroAsset({
  className,
  image,
  mask,
  color,
  flipped = false,
}: {
  className: string;
  image: string;
  mask: string;
  color: "lime" | "white";
  flipped?: boolean;
}) {
  const maskUrl = `url("${asset(mask)}")`;
  return (
    <div aria-hidden="true" className={`absolute ${className} ${flipped ? "-scale-x-100" : ""}`}>
      <Image alt="" className="absolute inset-0 h-full w-full object-cover" fill sizes="385px" src={asset(image)} />
      <span
        className={`absolute inset-0 mix-blend-hard-light ${color === "lime" ? "bg-[#d4fb20]" : "bg-[#f5f5f6]"}`}
        style={{
          maskImage: maskUrl,
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
          WebkitMaskImage: maskUrl,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
        }}
      />
    </div>
  );
}

function HeroArtwork() {
  return (
    <div aria-hidden="true" className="hero-art pointer-events-none absolute left-1/2 top-0 z-[1] h-[1024px] w-[1440px] -translate-x-1/2 max-[1100px]:bottom-0 max-[1100px]:left-0 max-[1100px]:h-auto max-[1100px]:w-full max-[1100px]:translate-x-0">
      <div className="hero-orb absolute rounded-full bg-[#d4fb20]" />
      <Image alt="" className="hero-photo absolute object-cover" height={541} priority src={asset("hero-photo.png")} width={578} />
      <MaskedHeroAsset className="ornament ornament-left" color="lime" image="ornament-photo-1.png" mask="ornament-mask-1.png" />
      <MaskedHeroAsset   className="ornament ornament-right rotate-189" color="white" image="ornament-photo-2.png" mask="ornament-mask-2.png" />
      <MaskedHeroAsset className="ornament ornament-small" color="white" image="ornament-photo-2.png" mask="ornament-mask-3.png" />
      <MaskedHeroAsset className="cone cone-one" color="lime" image="cone-2.png" mask="cone-mask-2.png" />
      <MaskedHeroAsset className="cone cone-two" color="white" image="cone-1.png" mask="cone-mask-1.png" />
      <MaskedHeroAsset className="cone cone-three" color="white" image="cone-3.png" mask="cone-mask-3.png" />
      <div className="course-category-position"><CourseCategoryCard /></div>
      <div className="progress-position max-[767px]:!top-[500px] max-[767px]:w-[232px]"><LearningProgressCard /></div>
      <div className="students-position"><StudentsCard /></div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="hero-section relative isolate min-h-[1024px] overflow-hidden bg-[#003be2]">
      <div aria-hidden="true" className="hero-grid absolute inset-0" />
      <SiteHeader />
      <div className="hero-copy absolute left-1/2 z-[2] flex w-[min(1200px,calc(100%-48px))] -translate-x-1/2 flex-col items-center text-center">
        <h1 id="hero-title" className="max-w-[935px] font-poppins text-[clamp(40px,5vw,72px)] font-semibold leading-[1.2] tracking-[-0.72px] text-white xl:text-[72px]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="hero-description mt-8 text-[18px] leading-[1.6] text-[#e5e6e8]">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
        <div className="hero-search-position mt-[60px] w-full">
          <SearchBar />
        </div>
      </div>
      <HeroArtwork />
    </section>
  );
}
