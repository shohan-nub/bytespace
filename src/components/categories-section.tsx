import { CategoryCard, type Category } from "@/components/category-card";

const categories: Category[] = [
  { name: "Design", icon: "/figma/categories/category-design.svg" },
  { name: "Development", icon: "/figma/categories/category-development.svg" },
  { name: "IT & Software", icon: "/figma/categories/category-it-software.svg" },
  { name: "Business", icon: "/figma/categories/category-business.svg" },
  { name: "Marketing", icon: "/figma/categories/category-marketing.svg" },
  { name: "Photography", icon: "/figma/categories/category-photography.svg" },
];

export function CategoriesSection() {
  return (
    <section aria-labelledby="categories-heading" className="motion-safe:animate-fade-up mt-8 w-full pb-10">
      <div className="mx-auto flex w-[min(917px,calc(100%-48px))] flex-col items-center gap-4 text-center">
        <h2 className="font-poppins w-full max-w-[792px] text-[clamp(30px,2.5vw,36px)] font-semibold leading-[1.2] tracking-[-0.36px] text-[#040819]" id="categories-heading">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="w-full text-[18px] leading-[1.6] text-[#82868e]">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>
      </div>
      <div className="mx-auto mt-[68px] grid w-[calc(100%-40px)] max-w-[1202px] grid-cols-2 justify-items-center gap-5 sm:w-[calc(100%-64px)] sm:grid-cols-3 sm:gap-6 xl:grid-cols-6 xl:gap-10">
        {categories.map((category) => <CategoryCard category={category} key={category.name} />)}
      </div>
    </section>
  );
}
