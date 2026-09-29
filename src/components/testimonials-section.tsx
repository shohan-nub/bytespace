import Image from "next/image";

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
    desktopHeight: "min-[1100px]:min-h-[432px]",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/figma/testimonials/testimonial-james.png",
    desktopHeight: "min-[1100px]:min-h-[436px]",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/figma/testimonials/testimonial-alex.png",
    desktopHeight: "min-[1100px]:min-h-[407px]",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className={`flex flex-col gap-6 rounded-[24px] bg-white p-6 motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:-translate-y-1 ${testimonial.desktopHeight}`}>
      <div className="flex items-center gap-4">
        <Image
          alt=""
          className="h-20 w-20 shrink-0 rounded-full object-cover"
          height={80}
          src={testimonial.avatar}
          width={80}
        />
        <div>
          <h3 className="font-poppins text-[20px] font-semibold leading-[1.4] text-[#242528]">
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
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative isolate overflow-hidden bg-[#fafafa] pb-[57px] pt-[74px]"
    >
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[-40px] top-[149px] -z-10 hidden h-[1217px] w-[1217px] max-w-none min-[900px]:block"
        height={1217}
        src="/figma/testimonials/testimonial-glow-lime.svg"
        width={1217}
      />
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[calc(50%-5px)] top-[-138px] -z-10 hidden h-[1217px] w-[1217px] max-w-none min-[900px]:block"
        height={1217}
        src="/figma/professional-growth/growth-blue-glow.svg"
        width={1217}
      />
      <Image
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[calc(50%+802px)] top-[-281px] -z-10 hidden h-[1217px] w-[1217px] max-w-none min-[900px]:block"
        height={1217}
        src="/figma/testimonials/testimonial-glow-blue.svg"
        width={1217}
      />
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1204px] motion-safe:animate-fade-up">
        <div className="grid gap-8 min-[900px]:grid-cols-[1fr_1fr] min-[900px]:gap-[43px]">
          <h2
            className="font-poppins text-[clamp(32px,3.06vw,44px)] font-semibold leading-[1.2] tracking-[-0.44px] text-[#242528]"
            id="testimonials-heading"
          >
            Discover What Our Community Is Saying
          </h2>
          <p className="text-[18px] leading-[1.6] text-[#4f4f4f]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <div className="mt-12 grid items-start gap-6 sm:grid-cols-2 min-[1100px]:mt-[72px] min-[1100px]:grid-cols-3 min-[1100px]:gap-[41px]">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
