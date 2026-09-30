import Image from "next/image";

export type Category = {
  name: string;
  icon: string;
};

export function CategoryCard({ category }: { category: Category }) {
  return (
    <article className="group flex aspect-square w-full max-w-[167px] flex-col items-center justify-center gap-3 rounded-[24px] border border-[#ced0d3] bg-white motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:hover:-translate-y-0.5">
      <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[40px] bg-[#d4fb20]">
        <Image alt="" className="h-9 w-9 motion-safe:transition-transform motion-safe:duration-200 motion-safe:ease-out motion-safe:group-hover:scale-[1.025]" height={36} src={category.icon} width={36} />
      </span>
      <h3 className="text-center text-[20px] font-medium leading-6 text-[#242528]">{category.name}</h3>
    </article>
  );
}
