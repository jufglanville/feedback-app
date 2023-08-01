"use client";

import { useState, useEffect, useRef } from "react";

interface Option {
  value: string;
  label: string;
}

type Props = {
  options: Option[];
  children: React.ReactNode;
  style?: 'default' | 'dark';
  chevron?: boolean;
};


const Dropdown = ({ options, children, style, chevron }: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(options[0]);
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsActive(false);
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
      <div onClick={handleToggle} className={`relative z-10 cursor-pointer ${style === 'dark' ? 'text-white' : 'text-gray-700'}`} >
        {children}
        {selected.label}
      </div>
      <div
        ref={dropdownRef}
        className={`bg-white rounded transition-all duration-300 absolute ${
          isActive ? "" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`py-2 px-4 ${
                option.value === selected.value ? "text-purple-500" : ""
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
