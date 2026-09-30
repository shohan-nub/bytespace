const tabRows = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export function CourseTabs() {
  return (
    <nav aria-label="Course topics" className="mx-auto flex w-[calc(100%-32px)] max-w-[1086px] flex-col items-center gap-[21px]">
      {tabRows.map((row, rowIndex) => (
        <ul
          className={`flex w-full flex-wrap items-center justify-center gap-4 ${rowIndex === 0 ? "max-w-[1086px]" : rowIndex === 1 ? "max-w-[952px]" : "max-w-[622px]"}`}
          key={rowIndex}
        >
          {row.map((tab, index) => {
            const active = rowIndex === 0 && index === 0;
            return (
              <li key={tab}>
                <span
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex min-h-[43px] items-center justify-center rounded-[24px] px-4 py-3 text-center text-[16px] font-medium leading-[19px] transition-colors duration-200 motion-reduce:transition-none ${active ? "bg-[#d4fb20] text-[#242528]" : "bg-[#f5f5f6] text-[#4b4c53] hover:bg-[#e9eaec]"}`}
                >
                  {tab}
                </span>
              </li>
            );
          })}
          {rowIndex === 2 && (
            <li className="inline-flex min-h-[43px] items-center text-[16px] font-medium leading-[19px] text-[#003be2]">
              + More
            </li>
          )}
        </ul>
      ))}
    </nav>
  );
}
