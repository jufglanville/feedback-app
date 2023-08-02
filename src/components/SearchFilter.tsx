"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Pill } from "@/components/Pill";

interface Props {
  categories: Option[];
}

export const SearchFilter = ({ categories }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filter = searchParams.get("categories");
  const selectedCategories = filter?.split(",") || ["all"];

  const handleSelection = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    let newSelectedCategories = selectedCategories;
    newSelectedCategories = newSelectedCategories.filter((item) => item !== "all");

    if (id === "all") {
      newSelectedCategories = ["all"];
    } else if (newSelectedCategories.includes(id)) {
      newSelectedCategories = newSelectedCategories.filter((item) => item !== id);
    } else if (!newSelectedCategories.includes(id)) {
      newSelectedCategories = [...newSelectedCategories, id];
    }

    params.set("categories", newSelectedCategories.join(","));
    router.push(`?${params.toString()}`)
  };

  return (
    <div className="flex bg-white gap-3 p-5 rounded-md flex-wrap">
      {categories.map((category) => {
        return (
          <Pill
            key={category.id}
            selected={selectedCategories.includes(category.id)}
            onClick={() => handleSelection(category.id)}
          >
            {category.label}
          </Pill>
        );
      })}
    </div>
  );
};