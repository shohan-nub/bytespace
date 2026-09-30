"use client";

import Image from "next/image";
import { useScrollReveal } from "@/components/use-scroll-reveal";

type MaskedDecorationProps = {
  className: string;
  image: string;
  maskClass: string;
  color: "lime" | "white";
  flipped?: boolean;
};

const maskSizing = "[mask-position:center] [-webkit-mask-position:center] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat] [mask-size:100%_100%] [-webkit-mask-size:100%_100%]";

function MaskedDecoration({ className, image, maskClass, color, flipped = false }: MaskedDecorationProps) {
  const fill = color === "lime" ? "bg-[#d4fb20]" : "bg-[#f5f5f6]";

  return (
    <div aria-hidden="true" className={`absolute ${className} ${flipped ? "-scale-x-100" : ""}`}>
      <Image alt="" className="absolute inset-0 h-full w-full object-cover" fill sizes="400px" src={image} />
      <span
        className={`absolute inset-0 mix-blend-hard-light ${fill} ${maskSizing} ${maskClass}`}
      />
    </div>
  );
}

function CreatorCtaDecorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-[488px] w-[1440px] -translate-x-1/2 max-[1100px]:left-0 max-[1100px]:h-full max-[1100px]:w-full max-[1100px]:translate-x-0">
      <Image alt="" className="absolute left-[-2px] top-[-2px] max-w-none" height={1026} src="/figma/creator-cta/cta-grid-background.svg" width={1442} />
      <MaskedDecoration className="left-[1080px] top-0 h-[188px] w-[188px] max-[1100px]:left-auto max-[1100px]:right-[-48px] max-[1100px]:top-[-50px] max-[1100px]:h-[148px] max-[1100px]:w-[148px] max-[640px]:right-[-85px] max-[640px]:top-[-85px] max-[640px]:h-[150px] max-[640px]:w-[150px]" color="lime" image="/figma/creator-cta/cta-cone-lime-top.png" maskClass="[mask-image:url('/figma/creator-cta/cta-mask-lime-cone-top.png')] [-webkit-mask-image:url('/figma/creator-cta/cta-mask-lime-cone-top.png')]" />
      <MaskedDecoration className="left-[1110px] top-[289px] h-[330px] w-[330px] max-[1100px]:left-auto max-[1100px]:right-[-110px] max-[1100px]:top-[calc(100%-150px)] max-[1100px]:h-[175px] max-[1100px]:w-[175px] max-[640px]:right-[-125px] max-[640px]:top-[calc(100%-142px)] max-[640px]:h-[160px] max-[640px]:w-[160px]" color="lime" image="/figma/professional-growth/growth-marker-top.png" maskClass="[mask-image:url('/figma/creator-cta/cta-mask-right-lime-spring.png')] [-webkit-mask-image:url('/figma/creator-cta/cta-mask-right-lime-spring.png')]" />
      <MaskedDecoration className="left-[-118px] top-[-162px] h-[385px] w-[385px] max-[1100px]:left-[-136px] max-[1100px]:top-[-132px] max-[1100px]:h-[230px] max-[1100px]:w-[230px] max-[640px]:left-[-150px] max-[640px]:top-[-145px] max-[640px]:h-[230px] max-[640px]:w-[230px]" color="lime" image="/figma/professional-growth/growth-marker-bottom.png" maskClass="[mask-image:url('/figma/creator-cta/cta-mask-top-lime-spring.png')] [-webkit-mask-image:url('/figma/creator-cta/cta-mask-top-lime-spring.png')]" />
      <MaskedDecoration className="left-[178px] top-[5px] h-[175px] w-[175px] max-[1100px]:left-[-28px] max-[1100px]:top-[-42px] max-[1100px]:h-[112px] max-[1100px]:w-[112px] max-[640px]:left-[-44px] max-[640px]:top-[-50px] max-[640px]:h-[104px] max-[640px]:w-[104px]" color="white" flipped image="/figma/professional-growth/growth-marker-bottom.png" maskClass="[mask-image:url('/figma/creator-cta/cta-mask-top-white-spring.png')] [-webkit-mask-image:url('/figma/creator-cta/cta-mask-top-white-spring.png')]" />
      <MaskedDecoration className="left-[-48px] top-[225px] h-[188px] w-[188px] max-[1100px]:left-[-94px] max-[1100px]:top-[calc(100%-112px)] max-[1100px]:h-[132px] max-[1100px]:w-[132px] max-[640px]:left-[-102px] max-[640px]:top-[calc(100%-104px)] max-[640px]:h-[122px] max-[640px]:w-[122px]" color="white" image="/figma/creator-cta/cta-cone-white-bottom.png" maskClass="[mask-image:url('/figma/creator-cta/cta-mask-white-cone-bottom.png')] [-webkit-mask-image:url('/figma/creator-cta/cta-mask-white-cone-bottom.png')]" />
      <MaskedDecoration className="left-[20px] top-[299px] h-[342px] w-[342px] max-[1100px]:left-[-116px] max-[1100px]:top-[calc(100%-166px)] max-[1100px]:h-[190px] max-[1100px]:w-[190px] max-[640px]:left-[-126px] max-[640px]:top-[calc(100%-158px)] max-[640px]:h-[182px] max-[640px]:w-[182px]" color="lime" image="/figma/creator-cta/cta-cone-lime-bottom.png" maskClass="[mask-image:url('/figma/creator-cta/cta-mask-lime-cone-bottom.png')] [-webkit-mask-image:url('/figma/creator-cta/cta-mask-lime-cone-bottom.png')]" />
      <MaskedDecoration className="left-[1226px] top-[6px] h-[370px] w-[370px] max-[1100px]:left-auto max-[1100px]:right-[-108px] max-[1100px]:top-[-72px] max-[1100px]:h-[185px] max-[1100px]:w-[185px] max-[640px]:right-[-142px] max-[640px]:top-[-82px] max-[640px]:h-[194px] max-[640px]:w-[194px]" color="white" image="/figma/creator-cta/cta-cone-white-right.png" maskClass="[mask-image:url('/figma/creator-cta/cta-mask-white-cone-right.png')] [-webkit-mask-image:url('/figma/creator-cta/cta-mask-white-cone-right.png')]" />
    </div>
  );
}

export function CreatorCtaSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  return (
    <section aria-labelledby="creator-cta-heading" className="relative flex min-h-[488px] w-full items-center justify-center overflow-hidden bg-[#003be2] py-[72px] min-[1024px]:h-[488px] min-[1024px]:min-h-0 min-[1024px]:py-0">
      <CreatorCtaDecorations />
      <div className="relative z-10 mx-auto flex w-[calc(100%-48px)] max-w-[964px] flex-col items-center gap-10 text-center" ref={revealRef}>
        <h2 className="font-poppins w-full max-w-[710px] text-[clamp(32px,3.06vw,44px)] font-semibold leading-[1.2] tracking-[-0.44px] text-[#f5f5f6] xl:text-[44px]" id="creator-cta-heading">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="w-full text-[18px] leading-[1.6] text-[#f5f5f6]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <button
          className="rounded-[24px] bg-[#d4fb20] px-6 py-3 text-[18px] font-medium leading-[1.2] text-[#242528] motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98]"
          type="button"
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
}
