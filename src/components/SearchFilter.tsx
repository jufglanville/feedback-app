import { Pill } from "@/components/Pill";

export const SearchFilter = () => {
  return (
    <div className="flex bg-white gap-3 p-5 rounded-md flex-wrap">
      <Pill>All</Pill>
      <Pill>UI</Pill>
      <Pill>UX</Pill>
      <Pill>Enhancement</Pill>
      <Pill>Feature</Pill>
      <Pill>Bug</Pill>
    </div>
  );
};
