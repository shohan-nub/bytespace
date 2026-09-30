"use client";

import Image from "next/image";
import { CourseCard } from "@/components/course-card";
import { GrowthBenefits } from "@/components/growth-benefits";
import { GrowthMetric } from "@/components/growth-metric";
import { useScrollReveal } from "@/components/use-scroll-reveal";

const metricItems = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

function ProgressCard() {
  return (
    <div className="absolute left-[55.56%] top-[38.59%] z-20 flex w-[37.36%] flex-col gap-2 rounded-2xl bg-white/95 p-4 shadow-[0_12px_32px_rgba(36,37,40,0.10)] backdrop-blur-[10px]">
      <p className="text-[14px] font-medium leading-6 text-[#242528]">Learning Progress</p>
      <p className="font-poppins text-[48px] font-semibold leading-[1.2] tracking-[-0.48px] text-[#242528]">55%</p>
      <div aria-label="55 percent complete" className="h-2 w-full overflow-hidden rounded-full bg-[#f6f6f6]">
        <div className="h-full w-[56%] rounded-full bg-[#d4fb20]" />
      </div>
    </div>
  );
}

function GrowthCoursePreview() {
  return (
    <div className="@container/growth-art relative aspect-[621/552] w-full max-w-[621px] shrink-0">
      <div className="absolute left-0 top-0 h-[552px] w-[621px] origin-top-left [scale:clamp(0.45,calc(100cqw/621px),1)]">
      <div className="absolute left-0 top-0 z-10 w-[60.06%]">
        <CourseCard course={{ title: "Learn Figma from Basic", image: "/figma/courses/course-figma.png" }} />
      </div>
      <Image alt="" className="absolute left-0 top-[2.17%] z-20 h-[97.83%] w-[92.91%] object-contain drop-shadow-[28px_35px_26px_rgba(0,0,0,0.16)]" height={540} src="/figma/professional-growth/growth-student.png" width={577} />
      <div className="absolute left-[65.38%] top-[12.14%] z-30 aspect-square w-[34.62%] overflow-hidden" aria-hidden="true">
        <Image alt="" className="absolute inset-0 h-full w-full object-contain" height={216} src="/figma/professional-growth/growth-marker-top.png" width={216} />
        <span className="absolute inset-0 mix-blend-hard-light [mask-image:url('/figma/professional-growth/growth-marker-top-mask.png')] [-webkit-mask-image:url('/figma/professional-growth/growth-marker-top-mask.png')] [mask-size:100%_100%] [-webkit-mask-size:100%_100%] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat] bg-[#d4fb20]" />
      </div>
      <ProgressCard />
      </div>
    </div>
  );
}

function RevenueCard() {
  return (
    <div className="absolute left-0 top-[7.38%] z-10 flex w-[42.88%] flex-col gap-2 rounded-xl bg-[#003be2] p-4 text-[#f5f5f6] shadow-[0_12px_32px_rgba(0,59,226,0.18)] backdrop-blur-[10px]">
      <div>
        <p className="text-[16px] font-medium leading-[1.2]">Total Revenue</p>
        <p className="text-[10px] leading-[1.2]">July 1-28</p>
      </div>
      <div className="flex w-full items-center justify-between gap-2">
        <p className="font-poppins text-[24px] font-semibold leading-8 tracking-[-0.24px]">$120.29</p>
        <span className="rounded-full bg-[#cbfc01] px-2 py-0.5 text-[10px] font-medium leading-5 text-[#242528]">+12$</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white">
        <div className="h-full w-[56%] rounded-full bg-[#d4fb20]" />
      </div>
    </div>
  );
}

function YearToDateCard() {
  return (
    <div className="absolute left-0 top-[32.55%] z-10 flex w-[24.77%] flex-col gap-2 rounded-xl bg-[#003be2] p-4 text-[#f5f5f6] shadow-[0_12px_32px_rgba(0,59,226,0.18)] backdrop-blur-[10px]">
      <div>
        <p className="text-[16px] font-medium leading-[1.2]">Year to Date</p>
        <p className="text-[10px] leading-[1.2]">2023</p>
      </div>
      <p className="font-poppins text-[24px] font-semibold leading-8 tracking-[-0.24px]">$1,200.38</p>
      <span className="w-fit rounded-full bg-[#cbfc01] px-2 py-0.5 text-[10px] font-medium leading-5 text-[#242528]">+12$</span>
    </div>
  );
}

function HappyStudentsCard() {
  return (
    <div className="absolute left-[52.31%] top-[69.3%] z-30 flex w-[47.69%] flex-col gap-2 rounded-2xl bg-white/95 p-4 shadow-[0_12px_32px_rgba(36,37,40,0.12)] backdrop-blur-[10px]">
      <div>
        <p className="text-[16px] font-medium leading-6 text-[#242528]">Happy Students</p>
        <p className="flex items-center text-[10px] leading-[15px] text-[#82868e]"><span className="font-bold text-[#242528]">4.5 (240)</span><span className="flex h-4 w-4 items-center justify-center"><img alt="" className="h-auto w-[13.1625px]" src="/figma/professional-growth/growth-star.svg" /></span></p>
      </div>
      <div aria-label="More than two thousand happy students" className="flex items-center">
        {["happy-student-1.png", "happy-student-2.png", "happy-student-3.png", "happy-student-4.png", "happy-student-5.png", "happy-student-6.png", "happy-student-7.png"].map((student, index) => (
          <Image alt="" className={`relative h-[43px] w-[43px] shrink-0 rounded-full border-2 border-white object-cover ${index ? "-ml-4" : ""}`} height={43} key={student} src={`/figma/professional-growth/${student}`} width={43} />
        ))}
        <span className="relative -ml-4 flex h-[43px] w-[43px] shrink-0 items-center justify-center text-[12px] font-bold text-[#242528]">
          <Image alt="" className="absolute inset-0" height={43} src="/figma/professional-growth/happy-student-more.svg" width={43} />
          <span className="relative">2K+</span>
        </span>
      </div>
    </div>
  );
}

function CreatorDashboardArtwork() {
  return (
    <div className="@container/growth-dashboard relative aspect-[541/596] w-full max-w-[541px] shrink-0">
      <div className="absolute left-0 top-0 h-[596px] w-[541px] origin-top-left [scale:clamp(0.52,calc(100cqw/541px),1)]">
      <RevenueCard />
      <YearToDateCard />
      <Image alt="Creator holding a tablet while wearing a headset" className="absolute left-[5.18%] top-0 z-20 h-full w-[80.41%] object-contain drop-shadow-[28px_35px_26px_rgba(0,0,0,0.16)]" height={596} src="/figma/professional-growth/growth-creator.png" width={435} />
      <div className="absolute left-[56.38%] top-[19.13%] z-30 aspect-square w-[39.74%] overflow-hidden" aria-hidden="true">
        <Image alt="" className="absolute inset-0 h-full w-full object-contain" height={216} src="/figma/professional-growth/growth-marker-bottom.png" width={216} />
        <span className="absolute inset-0 mix-blend-hard-light [mask-image:url('/figma/professional-growth/growth-marker-bottom-mask.png')] [-webkit-mask-image:url('/figma/professional-growth/growth-marker-bottom-mask.png')] [mask-size:100%_100%] [-webkit-mask-size:100%_100%] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat] bg-[#d4fb20]" />
      </div>
      <HappyStudentsCard />
      </div>
    </div>
  );
}

function GrowthBackdrop() {
  return (
    <>
      <div aria-hidden="true" className="pointer-events-none absolute -left-[508px] -top-[466px] h-[2391px] w-[2456px]">
        <Image alt="" className="absolute left-[-40px] top-[-40px] max-w-none" height={2471} src="/figma/professional-growth/growth-decoration.svg" width={2536} />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -left-[287px] top-[946px] h-[672px] w-[672px]">
        <Image alt="" className="absolute -inset-[5.95%] max-w-none" height={752} src="/figma/professional-growth/growth-blue-glow.svg" width={752} />
      </div>
    </>
  );
}

export function ProfessionalGrowthSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  return (
    <section aria-labelledby="growth-heading" className="relative mt-20 w-full overflow-hidden bg-[#fafafa] py-20 lg:py-[120px]">
      <GrowthBackdrop />
      <div className="relative z-10 mx-auto flex w-[calc(100%-40px)] max-w-[1200px] flex-col gap-16 sm:w-[calc(100%-64px)] min-[1340px]:gap-[72px]" ref={revealRef}>
        <div className="grid items-center gap-12 min-[1340px]:w-[min(1258px,calc(100vw-48px))] min-[1340px]:grid-cols-[minmax(0,574fr)_minmax(0,621fr)] min-[1340px]:gap-[63px]">
          <div className="flex flex-col gap-8 sm:gap-10">
            <h2 className="font-poppins max-w-[577px] text-[clamp(34px,3.06vw,44px)] font-semibold leading-[1.2] tracking-[-0.44px] text-[#242528] xl:text-[44px]" id="growth-heading">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="max-w-[477px] text-[18px] leading-[1.6] text-[#4b4c53]">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-5 sm:gap-x-14">
              {metricItems.map((item) => <GrowthMetric key={item.label} {...item} />)}
            </div>
          </div>
          <GrowthCoursePreview />
        </div>

        <div className="grid items-center gap-12 min-[1340px]:grid-cols-[541px_580px] min-[1340px]:gap-[79px]">
          <CreatorDashboardArtwork />
          <div className="flex flex-col gap-8 sm:gap-10">
            <h2 className="font-poppins max-w-[391px] text-[clamp(34px,3.06vw,44px)] font-semibold leading-[1.2] tracking-[-0.44px] text-[#242528] xl:text-[44px]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="max-w-[574px] text-[18px] leading-[1.6] text-[#4b4c53]">
              <strong className="font-bold text-[#242528]">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            <GrowthBenefits />
          </div>
        </div>
      </div>
    </section>
  );
}
