"use client";

import { FormEvent, useState } from "react";

type CourseData = { title: string; image: string };

const featuredCourses: CourseData[] = [
  { title: "Build Digital Asset", image: "/figma/courses/course-digital-assets.png" },
  { title: "the Power of Big Data", image: "/figma/courses/course-big-data.png" },
];

function CoursePreview({ course, className = "" }: { course: CourseData; className?: string }) {
  return (
    <article className={`absolute h-[384px] w-[373px] overflow-hidden rounded-[24px] border border-[#ced0d3] bg-white ${className}`}>
      <div className="absolute left-[15px] top-[15px] h-[195px] w-[341px] overflow-hidden rounded-[12px]">
        <img src={course.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute left-3 top-[150px] flex gap-3 whitespace-nowrap text-[12px] font-medium leading-5 text-[#4f4f4f]">
          {["17 Lessons", "2 hours 16 mins", "59 Comments"].map((text) => <span key={text} className="rounded-full bg-[rgba(246,246,246,.6)] px-3 py-1.5 backdrop-blur-[4px]">{text}</span>)}
        </div>
      </div>
      <div className="absolute left-[15px] top-[231px] flex flex-col items-start gap-4">
        <div className="whitespace-nowrap">
          <h2 className={`font-poppins text-[20px] font-semibold leading-7 tracking-[-.2px] text-black ${course.title.startsWith("the") ? "w-[275px] overflow-hidden text-ellipsis" : ""}`}>{course.title}</h2>
          <p className="text-[12px] leading-5 text-[#4f4f4f]">by <span className="text-[#003be2]">purepearl studio</span></p>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 rounded-full bg-[#f5f5f6] px-3 py-1.5 text-[12px] font-medium leading-5 text-[#4b4c53]"><img src="/figma/courses/difficulty.svg" alt="" className="h-5 w-5" /> Beginner</span>
          <div className="flex items-center pl-1">
            {[1, 2, 3, 4].map((index) => <img key={index} src={`/figma/courses/student-${index}.png`} alt="" className="-ml-2 h-8 w-8 rounded-full border-2 border-white" />)}
            <span className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-[12px] font-medium leading-5 text-white">
              26+
            </span>
          </div>
        </div>
        <p className="font-poppins text-[20px] font-semibold leading-7 tracking-[-.2px] text-[#003be2]">$25<span className="font-sans text-[12px] font-normal tracking-normal text-[#4f4f4f]">/lifetime</span></p>
      </div>
      <div className="absolute left-[305px] top-[231px] flex items-center text-[18px] font-medium leading-7 text-[#4f4f4f]">4.5<img src="/figma/star.svg" alt="" className="h-6 w-6" /></div>
    </article>
  );
}

function SocialMark({ network }: { network: "facebook" | "google" }) {
  if (network === "facebook") {
    return <svg aria-hidden="true" viewBox="0 0 40 40" className="h-10 w-10"><circle cx="20" cy="20" r="20" fill="black" /><path fill="white" d="M22.4 34V21.8h4.1l.6-4.8h-4.7v-3.1c0-1.4.4-2.4 2.4-2.4h2.5V7.2c-.4-.1-1.9-.2-3.6-.2-3.6 0-6.1 2.2-6.1 6.3V17h-4.1v4.8h4.1V34h4.8Z" /></svg>;
  }
  return <svg aria-hidden="true" viewBox="0 0 40 40" className="h-10 w-10"><path fill="black" d="M39.6 20.4c0-1.3-.1-2.5-.3-3.7H20v7h11a9.4 9.4 0 0 1-4.1 6.1v4.6h6.6c3.9-3.6 6.1-8.4 6.1-14Z" /><path fill="black" d="M20 40c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.2a12.2 12.2 0 0 1-18-6.4H2.1v4.7A20 20 0 0 0 20 40Z" /><path fill="black" d="M8.9 23.5a12 12 0 0 1 0-7V11.8H2.1a20 20 0 0 0 0 16.4l6.8-4.7Z" /><path fill="black" d="M20 7.9c3 0 5.6 1 7.7 3.1l5.8-5.8A19.2 19.2 0 0 0 20 0 20 20 0 0 0 2.1 11.8l6.8 4.7A12.1 12.1 0 0 1 20 7.9Z" /></svg>;
}

function LoginArtwork() {
  return (
    <div className="login-art-shell" aria-label="Featured courses and student community">
      <div className="login-art">
        <div className="login-decoration login-ring" aria-hidden="true" />
        <CoursePreview course={featuredCourses[0]} className="left-[25px] top-[89px]" />
        <CoursePreview course={featuredCourses[1]} className="left-[136px] top-0 z-[2]" />
        <div className="login-decoration login-spring" aria-hidden="true" />
        <div className="login-decoration login-cone" aria-hidden="true" />
        <div className="absolute left-[251px] top-[435px] z-[4] w-[258px] rounded-2xl bg-[#d4fb20] p-4 backdrop-blur-[10px]">
          <p className="text-[16px] font-medium leading-6">Happy Students</p>
          <div className="flex items-center text-[10px] leading-[15px] text-[#82868e]"><span className="font-bold text-[#242528]">4.5 </span>(240)<svg aria-hidden="true" viewBox="0 0 13.2 12.6" className="h-4 w-4"><path d="M6.1.34c.15-.46.8-.46.95 0l1.22 3.72c.07.2.26.34.48.35l3.91.01c.48 0 .68.62.29.9L9.79 7.63a.55.55 0 0 0-.18.56l1.2 3.72c.15.46-.38.84-.77.56l-3.17-2.3a.55.55 0 0 0-.64 0l-3.17 2.3c-.4.28-.92-.1-.77-.56l1.2-3.72a.55.55 0 0 0-.18-.56L.21 5.32c-.39-.28-.19-.9.29-.9l3.91-.01c.22 0 .41-.14.48-.35L6.1.34Z" fill="#003BE2" /></svg></div>
          <div className="mt-2 flex items-center">
            {Array.from({ length: 7 }, (_, i) => <img key={i} src={`/figma/professional-growth/happy-student-${i + 1}.png`} alt="" className={`${i === 0 ? "" : "-ml-4"} h-[43px] w-[43px] shrink-0 rounded-full`} />)}
            <span className="-ml-4 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-full bg-[#242528] text-[12px] font-bold text-white">
              <span>2K+</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: { email?: string; password?: string } = {};
    if (!email.trim()) next.email = "Enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Enter a valid email address.";
    if (!password) next.password = "Enter your password.";
    setErrors(next);
    setMessage("");
    if (Object.keys(next).length) return;

    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setMessage("Your details are valid. No account has been authenticated.");
    }, 500);
  }

  function updateEmail(value: string) {
    setEmail(value);
    setErrors((current) => ({ ...current, email: undefined }));
    setMessage("");
  }

  function updatePassword(value: string) {
    setPassword(value);
    setErrors((current) => ({ ...current, password: undefined }));
    setMessage("");
  }

  function socialNotice(network: string) {
    setMessage(`${network} sign-in is not connected in this demo.`);
  }

  return (
    <main className="login-page relative min-h-[1024px] w-full max-w-none overflow-hidden bg-[#003be2] text-[#242528]">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="login-canvas relative mx-auto min-h-[1024px] w-full max-w-[1440px] overflow-hidden">
      <header className="relative z-10 h-[120px] px-[max(24px,8.47%)] pt-[35px]">
        <a href="/" aria-label="ByteSpace home" className="inline-flex"><img src="/figma/bytespace-mark.svg" alt="ByteSpace" className="h-[31.5px] w-[28.875px]" /></a>
      </header>

      <section className="login-intro absolute left-[8.47%] top-[120px] z-10 w-[475px] max-w-[83%] text-[#f5f5f6]">
        <h1 className="font-poppins text-[20px] font-semibold leading-[1.2] tracking-[-.2px]">Sign in with ease</h1>
        <p className="mt-4 text-[18px] leading-[1.6]">Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.</p>
      </section>

      <section className="login-card absolute left-[calc(50%+21px)] top-[120px] z-10 h-[784px] w-[579px] rounded-[24px] bg-white">
        <div className="login-card-content absolute left-[63px] top-[61px] flex h-[683px] w-[453px] flex-col items-center justify-between">
          <div className="w-full">
            <div>
              <p className="text-[18px] leading-[1.6] text-[#003be2]">Sign In</p>
              <h2 className="font-poppins text-[44px] font-semibold leading-[1.2] tracking-[-.44px] text-[#242528]">Welcome Back</h2>
            </div>
            <form onSubmit={submit} noValidate aria-label="Sign in" className="mt-10 flex w-full flex-col items-end gap-6">
              <div className="w-full">
                <label htmlFor="login-email" className="mb-2 block text-[14px] font-medium leading-[1.2]">Email</label>
                <input id="login-email" name="email" type="email" autoComplete="email" placeholder="designer@example.com" value={email} onChange={(event) => updateEmail(event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "login-email-error" : undefined} className={`h-[52px] w-full rounded-[12px] border bg-white px-6 py-3 text-[18px] leading-[1.6] outline-none transition-colors placeholder:text-[#82868e] focus:border-[#003be2] focus:ring-2 focus:ring-[#003be2]/15 ${errors.email ? "border-red-500" : "border-[#e5e6e8]"}`} />
                {errors.email && <p id="login-email-error" role="alert" className="mt-1 text-sm leading-5 text-red-600">{errors.email}</p>}
              </div>
              <div className="w-full">
                <label htmlFor="login-password" className="mb-2 block text-[14px] font-medium leading-[1.2]">Password</label>
                <input id="login-password" name="password" type="password" autoComplete="current-password" placeholder="********" value={password} onChange={(event) => updatePassword(event.target.value)} aria-invalid={Boolean(errors.password)} aria-describedby={errors.password ? "login-password-error" : undefined} className={`h-[52px] w-full rounded-[12px] border bg-white px-6 py-3 text-[18px] leading-[1.6] outline-none transition-colors placeholder:text-[#82868e] focus:border-[#003be2] focus:ring-2 focus:ring-[#003be2]/15 ${errors.password ? "border-red-500" : "border-[#e5e6e8]"}`} />
                {errors.password && <p id="login-password-error" role="alert" className="mt-1 text-sm leading-5 text-red-600">{errors.password}</p>}
              </div>
              <button type="submit" disabled={loading} className="min-h-[46px] rounded-full bg-[#d4fb20] px-6 py-3 text-[18px] font-medium leading-[1.2] transition duration-200 hover:-translate-y-0.5 hover:bg-[#c9f313] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003be2] disabled:cursor-wait disabled:opacity-70 motion-reduce:transform-none">{loading ? "Please wait…" : "Sign In"}</button>
            </form>
          </div>

          <div className="flex w-full flex-col items-center gap-10">
            <div className="flex w-full items-center justify-center gap-[11px] text-[18px] leading-[1.6] text-[#888]">
              <span className="h-px flex-1 bg-[#d1d1d1]" />or<span className="h-px flex-1 bg-[#d1d1d1]" />
            </div>
            <div className="flex items-center gap-4">
              {(["facebook", "google"] as const).map((network) => (
                <button key={network} type="button" onClick={() => socialNotice(network === "facebook" ? "Facebook" : "Google")} aria-label={`Continue with ${network}`} className="flex h-[72px] w-[72px] items-center justify-center rounded-[24px] border border-[#d1d1d1] bg-white transition hover:-translate-y-0.5 hover:border-[#888] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003be2] motion-reduce:transform-none">
                  <SocialMark network={network} />
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-1 whitespace-nowrap text-[16px] leading-[1.6]">
            <span className="text-[#888]">New user?</span>
            <a href="/register" className="text-[#003be2] transition-colors hover:text-[#002ca8] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003be2]">Create an account</a>
          </div>
          {message && <p role="status" className="absolute bottom-[-38px] left-0 w-full text-center text-sm leading-5 text-[#236b2b]">{message}</p>}
        </div>
      </section>

      <LoginArtwork />
      </div>

      <style>{`
        .login-page { isolation: isolate; min-height: max(1024px, 100vh); animation: login-enter 600ms cubic-bezier(.22,1,.36,1) both; }
        .login-page > .hero-grid { background-position: center top; }
        .login-canvas { overflow: hidden; }
        .login-art-shell { position: absolute; left: 97px; top: 305px; width: 635px; height: 585px; }
        .login-art-shell { animation: login-art-enter 700ms 80ms cubic-bezier(.22,1,.36,1) both; }
        .login-art { position: absolute; inset: 0 auto auto 0; width: 635px; height: 585px; }
        .login-decoration { position: absolute; pointer-events: none; background-repeat: no-repeat; background-position: center; background-size: contain; }
        .login-ring { z-index: 3; left: 54px; top: 15px; width: 146px; height: 146px; background-image: linear-gradient(#d4fb20, #d4fb20), url('/figma/cone-1.png'); background-blend-mode: hard-light, normal; -webkit-mask: url('/figma/cone-mask-1.png') center / contain no-repeat; mask: url('/figma/cone-mask-1.png') center / contain no-repeat; }
        .login-spring { z-index: 3; left: 363px; top: 321px; width: 175px; height: 175px; background-image: linear-gradient(#f5f5f6, #f5f5f6), url('/figma/ornament-photo-1.png'); background-blend-mode: hard-light, normal; -webkit-mask: url('/figma/ornament-mask-1.png') center / contain no-repeat; mask: url('/figma/ornament-mask-1.png') center / contain no-repeat; transform: scaleX(-1); }
        .login-cone { z-index: 1; left: 0; top: 397px; width: 188px; height: 188px; background-image: linear-gradient(#d4fb20, #d4fb20), url('/figma/cone-3.png'); background-blend-mode: hard-light, normal; -webkit-mask: url('/figma/cone-mask-3.png') center / contain no-repeat; mask: url('/figma/cone-mask-3.png') center / contain no-repeat; }
        @keyframes login-enter { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes login-art-enter { from { opacity: 0; translate: 0 8px; } to { opacity: 1; translate: 0 0; } }
        @media (max-width: 1199px) {
          .login-canvas { display: flex; min-height: 100vh; flex-direction: column; align-items: center; padding: 0 24px 48px; }
          .login-canvas > header { width: min(100%, 680px); height: 96px; padding: 28px 0 0; }
          .login-intro { position: relative; inset: auto; width: min(100%, 600px); max-width: 100%; margin: 18px auto 0; text-align: center; }
          .login-intro p { max-width: 475px; margin: 16px auto 0; }
          .login-card { position: relative; inset: auto; width: min(100%, 579px); height: auto; min-height: 720px; margin-top: 34px; padding: 34px 40px; }
          .login-card-content { position: static; width: 100%; height: auto; min-height: 650px; }
          .login-card-content h2 { font-size: clamp(36px, 5vw, 44px); }
          .login-art-shell { position: relative; inset: auto; width: 100%; height: 560px; margin-top: 44px; }
          .login-art { top: 0; left: 50%; transform: translateX(-50%) scale(.92); transform-origin: top center; }
        }
        @media (max-width: 639px) {
          .login-canvas { padding-inline: 16px; padding-bottom: 36px; }
          .login-canvas > header { height: 82px; padding-top: 24px; }
          .login-intro { margin-top: 18px; }
          .login-intro p { font-size: 16px; line-height: 1.5; }
          .login-card { min-height: 660px; margin-top: 28px; padding: 30px 22px; border-radius: 20px; }
          .login-card-content { min-height: 600px; }
          .login-card-content h2 { font-size: clamp(34px, 9vw, 40px); letter-spacing: -.4px; }
          .login-card-content form { margin-top: 30px; gap: 20px; }
          .login-card-content input { padding-inline: 18px; font-size: 16px; }
          .login-card-content form button[type="submit"] { align-self: stretch; }
          .login-card-content > div:nth-child(2) { gap: 28px; }
          .login-card-content > div:nth-child(2) > div:first-child { font-size: 16px; }
          .login-card-content > div:nth-child(3) { font-size: 14px; }
          .login-art-shell { height: 380px; margin-top: 32px; }
          .login-art { transform: translateX(-50%) scale(.54); }
        }
        @media (min-width: 400px) and (max-width: 425px) { .login-art { transform: translateX(-50%) scale(.58); } }
        @media (min-width: 426px) and (max-width: 639px) { .login-art { transform: translateX(-50%) scale(.62); } }
        @media (prefers-reduced-motion: reduce) {
          .login-page, .login-art-shell { animation: none; }
          .login-card-content input, .login-card-content button { transition: none; }
        }
      `}</style>
    </main>
  );
}
