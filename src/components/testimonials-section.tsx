"use client";

import Image from "next/image";
import { useScrollReveal } from "@/components/use-scroll-reveal";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  desktopHeight: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/figma/testimonials/testimonial-sarah.png",
    desktopHeight: "xl:min-h-[432px]",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/figma/testimonials/testimonial-james.png",
    desktopHeight: "xl:min-h-[436px]",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/figma/testimonials/testimonial-alex.png",
    desktopHeight: "xl:min-h-[407px]",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className={`flex flex-col gap-6 rounded-[24px] bg-white p-6 motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:-translate-y-0.5 ${testimonial.desktopHeight}`}>
      <Image alt="" className="h-20 w-20 shrink-0 rounded-full object-cover" height={80} src={testimonial.avatar} width={80} />
      <div className="flex flex-col items-start">
        <div>
          <h3 className="font-poppins text-[20px] font-semibold leading-[1.2] tracking-[-0.2px] text-black">
            {testimonial.name}
          </h3>
          <p className="text-[18px] leading-[1.6] text-[#003be2]">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-[18px] leading-[1.6] text-[#4f4f4f]">{testimonial.quote}</p>
    </article>
  );
}

export function TestimonialsSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative isolate overflow-hidden bg-[#fafafa] pb-[58px] pt-[74px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute left-[842px] top-[-241px] -z-10 hidden h-[1137px] w-[1137px] min-[900px]:block">
        <Image alt="" className="absolute -inset-[3.52%] max-w-none" height={1217} src="/figma/testimonials/testimonial-glow-blue.svg" width={1217} />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute left-[395px] top-[-138px] -z-10 hidden h-[672px] w-[672px] min-[900px]:block">
        <Image alt="" className="absolute -inset-[5.95%] max-w-none" height={752} src="/figma/professional-growth/growth-blue-glow.svg" width={752} />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute left-[-442px] top-[149px] -z-10 hidden h-[1137px] w-[1137px] min-[900px]:block">
        <Image alt="" className="absolute -inset-[3.52%] max-w-none" height={1217} src="/figma/testimonials/testimonial-glow-lime.svg" width={1217} />
      </div>
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1204px]" ref={revealRef}>
        <div className="grid gap-8 min-[1248px]:grid-cols-[577px_580px] min-[1248px]:items-end min-[1248px]:gap-[43px]">
          <h2
            className="font-poppins text-[clamp(32px,3.06vw,44px)] font-semibold leading-[1.2] tracking-[-0.44px] text-black"
            id="testimonials-heading"
          >
            Discover What Our Community Is Saying
          </h2>
          <p className="text-[18px] leading-[1.6] text-[#4f4f4f]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="mt-12 grid items-start gap-6 sm:grid-cols-2 xl:mt-[72px] xl:grid-cols-3 xl:gap-[41px]">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
