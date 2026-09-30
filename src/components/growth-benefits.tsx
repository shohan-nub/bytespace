import Image from "next/image";

const benefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export function GrowthBenefits() {
  return (
    <ul className="flex flex-col gap-4">
      {benefits.map((benefit) => (
        <li className="flex items-center gap-2 text-[18px] font-medium leading-[1.2] text-[#242528]" key={benefit}>
          <Image alt="" className="h-6 w-6 shrink-0" height={24} src="/figma/professional-growth/growth-check.svg" width={24} />
          {benefit}
        </li>
      ))}
    </ul>
  );
}
