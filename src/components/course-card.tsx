import Image from "next/image";

export type Course = {
  title: string;
  image: string;
};

const avatars = [
  "/figma/courses/student-1.png",
  "/figma/courses/student-2.png",
  "/figma/courses/student-3.png",
  "/figma/courses/student-4.png",
];

function StudentAvatars() {
  return (
    <div aria-label="26 or more enrolled students" className="flex items-center pl-2" role="img">
      {avatars.map((avatar, index) => (
        <Image
          alt=""
          className={`-ml-2 h-8 w-8 rounded-full object-cover ${index === 0 ? "ml-0" : ""}`}
          height={32}
          key={avatar}
          src={avatar}
          width={32}
        />
      ))}
      <span className="relative -ml-2 flex h-8 w-8 items-center justify-center">
        <Image alt="" className="absolute inset-0 h-full w-full" height={32} src="/figma/courses/students-more.svg" width={32} />
        <span className="relative z-10 text-[12px] font-medium leading-5 text-[#242528]">26+</span>
      </span>
    </div>
  );
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group relative h-[384px] min-w-0 overflow-hidden rounded-[24px] border border-[#ced0d3] bg-white motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:-translate-y-1">
      <div className="absolute left-[15px] right-[15px] top-[15px] h-[195px] overflow-hidden rounded-[12px]">
        <Image alt="" className="h-full w-full object-cover" height={195} src={course.image} width={341} />
        <div className="absolute inset-x-[13px] bottom-[13px] flex flex-wrap items-center gap-2 lg:flex-nowrap lg:gap-3">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((badge) => (
            <span className="shrink-0 rounded-full bg-[rgba(246,246,246,0.6)] px-3 py-[6px] text-center text-[12px] font-medium leading-[14px] text-[#4f4f4f] backdrop-blur-[4px]" key={badge}>
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute left-[15px] right-[15px] top-[231px]">
        <div className="w-[min(280px,calc(100%-64px))]">
          <h3 className="truncate font-poppins text-[20px] font-semibold leading-6 tracking-[-0.2px] text-black">
            {course.title}
          </h3>
          <p className="text-[12px] leading-[19px] text-[#4f4f4f]">
            by <span className="text-[#003be2]">purepearl studio</span>
          </p>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="inline-flex h-8 shrink-0 items-center gap-1 rounded-full bg-[#f5f5f6] px-3 py-1.5 text-[12px] font-medium leading-5 text-[#4b4c53]">
            <Image alt="" className="h-5 w-5" height={20} src="/figma/courses/difficulty.svg" width={20} />
            Beginner
          </span>
          <StudentAvatars />
        </div>

        <p className="mt-4 flex h-6 items-end">
          <span className="font-poppins text-[20px] font-semibold leading-6 tracking-[-0.2px] text-[#003be2]">$25</span>
          <span className="text-[12px] leading-[19px] text-[#4f4f4f]">/lifetime</span>
        </p>
      </div>

      <div aria-label="Rated 4.5 out of 5" className="absolute right-4 top-[231px] flex h-6 items-center" role="img">
        <span className="text-[18px] leading-[29px] text-[#4f4f4f]">4.5</span>
        <Image alt="" className="h-6 w-6" height={24} src="/figma/courses/rating-star.svg" width={24} />
      </div>
    </article>
  );
}
