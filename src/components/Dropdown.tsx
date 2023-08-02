"use client";

import { useState, useEffect, useRef } from "react";
import { BiChevronUp } from "react-icons/bi";

type Props = {
  options: Option[];
  children: React.ReactNode;
  style?: "default" | "dark";
  chevron?: boolean;
  weight?: "font-bold";
  size?: "text-sm";
  onSelect: (id: string) => void;
};

const Dropdown = ({
  options,
  children,
  style,
  chevron,
  weight,
  size,
  onSelect,
}: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(options[0]);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsActive(false);
    onSelect(option.id);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    if (isActive) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isActive]);

  return (
    <div className="relative">
      <div
        onClick={handleToggle}
        className={`relative z-10 cursor-pointer ${
          style === "dark" ? "text-white" : "text-gray-700"
        }`}
      >
        {children}
        <span className={`${weight ? weight : ""} ${size ? size : ""}`}>
          {selected.label}
        </span>
        {chevron && (
          <span>
            <BiChevronUp
              className={`inline-block ml-1 text-xl transition duration-150 ${
                isActive ? "transform rotate-180" : ""
              }`}
            />
          </span>
        )}
      </div>

      <div
        ref={dropdownRef}
        className={`bg-white rounded transition-all duration-300 absolute w-full ${
          isActive ? "" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul>
          {options.map((option) => (
            <li
              key={option.id}
              onClick={() => handleSelect(option)}
              className={`py-2 px-4 ${
                option.id === selected.id ? "text-purple-500" : ""
              } cursor-pointer`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
