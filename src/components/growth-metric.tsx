export type GrowthMetricItem = {
  value: string;
  label: string;
};

export function GrowthMetric({ value, label }: GrowthMetricItem) {
  return (
    <div className="flex min-w-0 flex-col items-start">
      <p className="font-poppins text-[36px] font-medium leading-[44px] tracking-[-0.36px] text-[#003be2]">{value}</p>
      <p className="text-[18px] leading-[1.6] text-[#4b4c53]">{label}</p>
    </div>
  );
}
