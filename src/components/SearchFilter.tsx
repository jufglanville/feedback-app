"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Pill } from "@/components/Pill";

interface Props {
  categories: Option[];
}

export const SearchFilter = ({ categories }: Props) => {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const filterArr = filter?.split(",") || ["all"];
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(filterArr);

  const handleSelection = (id: string) => {
    let newSelectedCategories = selectedCategories;
    newSelectedCategories = newSelectedCategories.filter((item) => item !== "all");

    if (id === "all") {
      newSelectedCategories = ["all"];
    } else if (newSelectedCategories.includes(id)) {
      newSelectedCategories = newSelectedCategories.filter((item) => item !== id);
    } else if (!newSelectedCategories.includes(id)) {
      newSelectedCategories = [...newSelectedCategories, id];
    }

    setSelectedCategories(newSelectedCategories);
    console.log(newSelectedCategories);
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
      <h2>{filter}</h2>
    </div>
  );
};
