"use client";

import { FormEvent, useState } from "react";

type CoursePreview = {
  title: string;
  image: string;
  rating: string;
  price: string;
};

const coursePreviews: CoursePreview[] = [
  {
    title: "Build Digital Asset",
    image: "/figma/courses/course-digital-assets.png",
    rating: "4.5",
    price: "25",
  },
  {
    title: "the Power of Big Data",
    image: "/figma/courses/course-big-data.png",
    rating: "4.5",
    price: "25",
  },
];

function CoursePreviewCard({ course, className = "" }: { course: CoursePreview; className?: string }) {
  return (
    <article className={`absolute h-[384px] w-[373px] overflow-hidden rounded-[24px] border border-[#ced0d3] bg-white ${className}`}>
      <div className="absolute left-[15px] top-[15px] h-[195px] w-[341px] overflow-hidden rounded-[12px]">
        <img src={course.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute left-[12px] top-[150px] flex gap-3 whitespace-nowrap text-[12px] font-medium leading-5 text-[#4f4f4f]">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((label) => (
            <span key={label} className="rounded-full bg-[rgba(246,246,246,.6)] px-3 py-1.5 backdrop-blur-[4px]">{label}</span>
          ))}
        </div>
      </div>

      <div className="absolute left-[15px] top-[231px] flex flex-col items-start gap-4">
        <div className="whitespace-nowrap">
          <h2 className="font-poppins text-[20px] font-semibold leading-7 tracking-[-.2px] text-black">{course.title}</h2>
          <p className="text-[12px] leading-5 text-[#4f4f4f]">by <span className="text-[#003be2]">purepearl studio</span></p>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 rounded-full bg-[#f5f5f6] px-3 py-1.5 text-[12px] font-medium leading-5 text-[#4b4c53]">
            <img src="/figma/courses/difficulty.svg" alt="" className="h-5 w-5" /> Beginner
          </span>
          <div className="flex items-center pl-1">
            {[1, 2, 3, 4].map((n) => (
              <img key={n} src={`/figma/courses/student-${n}.png`} alt="" className="-ml-2 h-8 w-8 rounded-full border-2 border-white" />
            ))}
            <span className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-[12px] font-medium leading-5 text-white">
              26+
            </span>
          </div>
        </div>
        <p className="font-poppins text-[20px] font-semibold leading-7 tracking-[-.2px] text-[#003be2]">${course.price}<span className="font-sans text-[12px] font-normal leading-5 tracking-normal text-[#4f4f4f]">/lifetime</span></p>
      </div>

      <div className="absolute left-[305px] top-[231px] flex items-center gap-0.5 text-[18px] font-medium leading-7 text-[#4f4f4f]">
        {course.rating}<img src="/figma/star.svg" alt="" className="h-6 w-6" />
      </div>
    </article>
  );
}

function PreviewArtwork() {
  return (
    <div className="register-art-shell" aria-label="Featured ByteSpace course previews">
      <div className="register-art">
        <div className="register-cone register-cone-top" aria-hidden="true" />
        <CoursePreviewCard course={coursePreviews[0]} className="left-[25px] top-[89px]" />
        <CoursePreviewCard course={coursePreviews[1]} className="left-[136px] top-0 z-[2]" />
        <div className="register-spring" aria-hidden="true" />
        <div className="register-cone register-cone-bottom" aria-hidden="true" />
        <div className="absolute left-[251px] top-[435px] z-[4] w-[258px] rounded-2xl bg-[#d4fb20] p-4 backdrop-blur-[10px]">
          <p className="text-[16px] font-medium leading-6 text-[#242528]">Happy Students</p>
          <div className="mt-1 flex items-center gap-1 text-[10px] leading-[15px] text-[#82868e]">
            <span className="font-bold text-[#242528]">4.5</span> (240)
            <svg aria-hidden="true" viewBox="0 0 13.2 12.6" className="h-4 w-4"><path d="M6.1.34c.15-.46.8-.46.95 0l1.22 3.72c.07.2.26.34.48.35l3.91.01c.48 0 .68.62.29.9L9.79 7.63a.55.55 0 0 0-.18.56l1.2 3.72c.15.46-.38.84-.77.56l-3.17-2.3a.55.55 0 0 0-.64 0l-3.17 2.3c-.4.28-.92-.1-.77-.56l1.2-3.72a.55.55 0 0 0-.18-.56L.21 5.32c-.39-.28-.19-.9.29-.9l3.91-.01c.22 0 .41-.14.48-.35L6.1.34Z" fill="#003BE2" /></svg>
          </div>
          <div className="mt-2 flex items-center">
            {Array.from({ length: 7 }, (_, i) => (
              <img key={i} src={`/figma/professional-growth/happy-student-${i + 1}.png`} alt="" className={`${i === 0 ? "" : "-ml-4"} h-[43px] w-[43px] shrink-0 rounded-full`} />
            ))}
            <span className="-ml-4 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-[#242528]">
              <span className="text-[12px] font-bold text-white">2K+</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

type FormValues = { name: string; email: string; password: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;

export default function RegisterPage() {
  const [values, setValues] = useState<FormValues>({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSuccess(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: FormErrors = {};
    if (!values.name.trim()) nextErrors.name = "Enter your full name.";
    if (!values.email.trim()) nextErrors.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) nextErrors.email = "Enter a valid email address.";
    if (!values.password) nextErrors.password = "Enter a password.";
    else if (values.password.length < 8) nextErrors.password = "Use at least 8 characters.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 500);
  }

  const fields: { key: keyof FormValues; label: string; placeholder: string; type: string; autoComplete: string }[] = [
    { key: "name", label: "Full Name", placeholder: "Jamie Davis", type: "text", autoComplete: "name" },
    { key: "email", label: "Email", placeholder: "designer@example.com", type: "email", autoComplete: "email" },
    { key: "password", label: "Password", placeholder: "********", type: "password", autoComplete: "new-password" },
  ];

  return (
    <main className="register-page relative min-h-[1024px] w-full max-w-none overflow-hidden bg-[#003be2] text-[#242528]">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="register-canvas relative mx-auto min-h-[1024px] w-full max-w-[1440px] overflow-hidden">
      <header className="relative z-10 h-[120px] px-[max(24px,8.47%)] pt-[35px]">
        <a href="/" aria-label="ByteSpace home" className="inline-flex items-center">
          <img src="/figma/bytespace-mark.svg" alt="ByteSpace" className="h-[31.5px] w-[28.875px]" />
        </a>
      </header>

      <section className="register-copy absolute left-[8.47%] top-[120px] z-10 w-[475px] max-w-[83%] text-[#f5f5f6]">
        <h1 className="font-poppins text-[20px] font-semibold leading-[1.2] tracking-[-.2px]">Sign up and come in</h1>
        <p className="mt-4 text-[18px] leading-[1.6]">
          The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
        </p>
      </section>

      <section className="register-card absolute left-[calc(50%+21px)] top-[120px] z-10 h-[784px] w-[579px] rounded-[24px] bg-white">
        <div className="register-card-content absolute left-[63px] top-[61px] flex w-[453px] flex-col items-center gap-[122px]">
          <div className="w-full">
            <div>
              <p className="text-[18px] leading-[1.6] text-[#003be2]">Create an Account</p>
              <h2 className="mt-0 font-poppins text-[44px] font-semibold leading-[1.2] tracking-[-.44px] text-[#242528]">Welcome to ByteSpace</h2>
            </div>

            <form onSubmit={handleSubmit} noValidate className="mt-10 flex w-full flex-col items-end gap-6" aria-label="Create an account">
              {fields.map((field) => (
                <div key={field.key} className="w-full">
                  <label htmlFor={`register-${field.key}`} className="mb-2 block text-[14px] font-medium leading-[1.2] text-[#242528]">{field.label}</label>
                  <input
                    id={`register-${field.key}`}
                    name={field.key}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    placeholder={field.placeholder}
                    value={values[field.key]}
                    onChange={(event) => updateField(field.key, event.target.value)}
                    aria-invalid={Boolean(errors[field.key])}
                    aria-describedby={errors[field.key] ? `${field.key}-error` : undefined}
                    className={`h-[52px] w-full rounded-[12px] border bg-white px-6 py-3 text-[18px] leading-[1.6] text-[#242528] outline-none transition-colors placeholder:text-[#82868e] focus:border-[#003be2] focus:ring-2 focus:ring-[#003be2]/15 ${errors[field.key] ? "border-red-500" : "border-[#e5e6e8]"}`}
                  />
                  {errors[field.key] && <p id={`${field.key}-error`} role="alert" className="mt-1 text-sm leading-5 text-red-600">{errors[field.key]}</p>}
                </div>
              ))}
              <button type="submit" disabled={loading} className="min-h-[46px] rounded-full bg-[#d4fb20] px-6 py-3 text-[18px] font-medium leading-[1.2] text-[#242528] transition duration-200 hover:-translate-y-0.5 hover:bg-[#c9f313] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003be2] disabled:cursor-wait disabled:opacity-70 motion-reduce:transform-none">
                {loading ? "Please wait…" : "Continue"}
              </button>
              {success && <p role="status" className="-mt-3 w-full text-right text-sm leading-5 text-[#236b2b]">Your details are ready. No account has been created.</p>}
            </form>
          </div>

          <p className="flex items-center gap-1 whitespace-nowrap text-[16px] leading-[1.6] text-[#4b4c53]">
            Already have an account? <a href="/login" className="text-[#003be2] transition-colors hover:text-[#002ca8] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003be2]">Login</a>
          </p>
        </div>
      </section>
      <PreviewArtwork />
      </div>

      <style>{`
        .register-page { isolation: isolate; animation: register-enter 600ms cubic-bezier(.22,1,.36,1) both; }
        .register-canvas { overflow: hidden; }
        .register-page { min-height: max(1024px, 100vh); }
        .register-page > .hero-grid { background-position: center top; }
        .register-art-shell { position: absolute; left: 97px; top: 305px; width: 635px; height: 585px; }
        .register-art-shell { animation: register-art-enter 700ms 80ms cubic-bezier(.22,1,.36,1) both; }
        .register-art { position: absolute; inset: 0 auto auto 0; width: 635px; height: 585px; }
        .register-cone, .register-spring { position: absolute; pointer-events: none; background-repeat: no-repeat; background-position: center; background-size: contain; }
        .register-cone-top { z-index: 3; left: 54px; top: 15px; width: 146px; height: 146px; background-image: linear-gradient(#d4fb20, #d4fb20), url('/figma/cone-1.png'); background-blend-mode: hard-light, normal; -webkit-mask: url('/figma/cone-mask-1.png') center / contain no-repeat; mask: url('/figma/cone-mask-1.png') center / contain no-repeat; }
        .register-cone-bottom { z-index: 3; left: 0; top: 397px; width: 188px; height: 188px; background-image: linear-gradient(#d4fb20, #d4fb20), url('/figma/cone-3.png'); background-blend-mode: hard-light, normal; -webkit-mask: url('/figma/cone-mask-3.png') center / contain no-repeat; mask: url('/figma/cone-mask-3.png') center / contain no-repeat; }
        .register-spring { z-index: 3; left: 363px; top: 321px; width: 175px; height: 175px; background-image: linear-gradient(#f5f5f6, #f5f5f6), url('/figma/ornament-photo-1.png'); background-blend-mode: hard-light, normal; -webkit-mask: url('/figma/ornament-mask-1.png') center / contain no-repeat; mask: url('/figma/ornament-mask-1.png') center / contain no-repeat; transform: scaleX(-1); }
        @keyframes register-enter { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes register-art-enter { from { opacity: 0; translate: 0 8px; } to { opacity: 1; translate: 0 0; } }
        @media (max-width: 1199px) {
          .register-canvas { display: flex; min-height: 100vh; flex-direction: column; align-items: center; overflow: hidden; padding: 0 24px 48px; }
          .register-canvas > header { width: min(100%, 680px); height: 96px; padding: 28px 0 0; }
          .register-copy { position: relative; inset: auto; width: min(100%, 600px); max-width: 100%; margin: 18px auto 0; text-align: center; }
          .register-copy p { max-width: 475px; margin: 16px auto 0; }
          .register-card { position: relative; inset: auto; width: min(100%, 579px); height: auto; min-height: 0; margin-top: 34px; padding: 44px 40px; }
          .register-card-content { position: static; width: 100%; gap: 54px; }
          .register-card-content h2 { font-size: clamp(34px, 5vw, 44px); }
          .register-art-shell { position: relative; inset: auto; width: 100%; height: 560px; margin-top: 44px; }
          .register-art { position: absolute; top: 0; left: 50%; width: 635px; height: 585px; transform: translateX(-50%) scale(.92); transform-origin: top center; }
        }
        @media (max-width: 639px) {
          .register-canvas { padding-inline: 16px; padding-bottom: 36px; }
          .register-canvas > header { height: 82px; padding-top: 24px; }
          .register-copy { margin-top: 18px; }
          .register-copy h1 { font-size: 20px; }
          .register-copy p { font-size: 16px; line-height: 1.5; }
          .register-card { margin-top: 28px; padding: 32px 22px; border-radius: 20px; }
          .register-card-content { gap: 42px; }
          .register-card-content h2 { font-size: clamp(32px, 9vw, 38px); letter-spacing: -.38px; }
          .register-card-content form { margin-top: 30px; gap: 20px; }
          .register-card-content input { padding-inline: 18px; font-size: 16px; }
          .register-card-content form button { align-self: stretch; }
          .register-card-content > p { font-size: 14px; }
          .register-art-shell { height: 380px; margin-top: 32px; }
          .register-art { transform: translateX(-50%) scale(.54); }
        }
        @media (min-width: 400px) and (max-width: 425px) { .register-art { transform: translateX(-50%) scale(.58); } }
        @media (min-width: 426px) and (max-width: 639px) { .register-art { transform: translateX(-50%) scale(.62); } }
        @media (prefers-reduced-motion: reduce) {
          .register-page, .register-art-shell { animation: none; }
          .register-card-content input, .register-card-content form button { transition: none; }
        }
      `}</style>
    </main>
  );
}
