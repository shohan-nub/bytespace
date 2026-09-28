import { CourseCard, type Course } from "@/components/course-card";
import { CourseTabs } from "@/components/course-tabs";

const courses: Course[] = [
  { title: "Learn Figma from Basic", image: "/figma/courses/course-figma.png" },
  { title: "Build Digital Asset", image: "/figma/courses/course-digital-assets.png" },
  { title: "the Power of Big Data", image: "/figma/courses/course-big-data.png" },
  { title: "Balancing Productivity and Self-Care", image: "/figma/courses/course-productivity.png" },
  { title: "Mastering Money Management", image: "/figma/courses/course-finance.png" },
  { title: "From Idea to Startup Success", image: "/figma/courses/course-startup.png" },
];

export function CoursesSection() {
  return (
    <section aria-label="Featured courses" className="motion-safe:animate-fade-up mt-[42px] w-full overflow-hidden pb-10">
      <CourseTabs />
      <div className="mx-auto mt-[77px] grid w-[calc(100%-40px)] max-w-[1199px] grid-cols-1 gap-10 sm:w-[calc(100%-64px)] md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => <CourseCard course={course} key={course.title} />)}
      </div>
    </section>
  );
}
