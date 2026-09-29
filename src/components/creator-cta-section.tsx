import Image from "next/image";

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
    <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-[488px] w-[1440px] -translate-x-1/2">
      <Image alt="" className="absolute left-[-2px] top-[-2px] max-w-none" height={1026} src="/figma/creator-cta/cta-grid-background.svg" width={1442} />
      <MaskedDecoration className="left-[962px] top-[-162px] h-[188px] w-[188px]" color="lime" image="/figma/creator-cta/cta-cone-lime-top.png" maskClass="[mask-image:url('/figma/creator-cta/cta-mask-lime-cone-top.png')] [-webkit-mask-image:url('/figma/creator-cta/cta-mask-lime-cone-top.png')]" />
      <MaskedDecoration className="left-[992px] top-[127px] h-[330px] w-[330px]" color="lime" image="/figma/professional-growth/growth-marker-top.png" maskClass="[mask-image:url('/figma/creator-cta/cta-mask-right-lime-spring.png')] [-webkit-mask-image:url('/figma/creator-cta/cta-mask-right-lime-spring.png')]" />
      <MaskedDecoration className="left-[-236px] top-[-324px] h-[385px] w-[385px]" color="lime" image="/figma/professional-growth/growth-marker-bottom.png" maskClass="[mask-image:url('/figma/creator-cta/cta-mask-top-lime-spring.png')] [-webkit-mask-image:url('/figma/creator-cta/cta-mask-top-lime-spring.png')]" />
      <MaskedDecoration className="left-[235px] top-[-157px] h-[175px] w-[175px]" color="white" flipped image="/figma/professional-growth/growth-marker-bottom.png" maskClass="[mask-image:url('/figma/creator-cta/cta-mask-top-white-spring.png')] [-webkit-mask-image:url('/figma/creator-cta/cta-mask-top-white-spring.png')]" />
      <MaskedDecoration className="left-[-166px] top-[63px] h-[188px] w-[188px]" color="white" image="/figma/creator-cta/cta-cone-white-bottom.png" maskClass="[mask-image:url('/figma/creator-cta/cta-mask-white-cone-bottom.png')] [-webkit-mask-image:url('/figma/creator-cta/cta-mask-white-cone-bottom.png')]" />
      <MaskedDecoration className="left-[-98px] top-[137px] h-[342px] w-[342px]" color="lime" image="/figma/creator-cta/cta-cone-lime-bottom.png" maskClass="[mask-image:url('/figma/creator-cta/cta-mask-lime-cone-bottom.png')] [-webkit-mask-image:url('/figma/creator-cta/cta-mask-lime-cone-bottom.png')]" />
      <MaskedDecoration className="left-[1108px] top-[-156px] h-[370px] w-[370px]" color="white" image="/figma/creator-cta/cta-cone-white-right.png" maskClass="[mask-image:url('/figma/creator-cta/cta-mask-white-cone-right.png')] [-webkit-mask-image:url('/figma/creator-cta/cta-mask-white-cone-right.png')]" />
    </div>
  );
}

export function CreatorCtaSection() {
  return (
    <section aria-labelledby="creator-cta-heading" className="motion-safe:animate-fade-up relative flex min-h-[488px] w-full items-center justify-center overflow-hidden bg-[#003be2] py-[72px] min-[1024px]:h-[488px] min-[1024px]:min-h-0 min-[1024px]:py-0">
      <CreatorCtaDecorations />
      <div className="relative z-10 mx-auto flex w-[calc(100%-48px)] max-w-[964px] flex-col items-center gap-10 text-center">
        <h2 className="font-poppins w-full max-w-[710px] text-[clamp(32px,3.06vw,44px)] font-semibold leading-[1.2] tracking-[-0.44px] text-[#f5f5f6]" id="creator-cta-heading">
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
