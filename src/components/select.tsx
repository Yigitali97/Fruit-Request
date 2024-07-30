import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import styles from "./select.module.css";

interface SelectProps {
  options: string[];
  placeholder?: string;
  selectedFruit: string;
  setSelectedFruit: (fruit: string) => void;
}

const Select = ({
  options,
  placeholder,
  selectedFruit,
  setSelectedFruit,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedFruit(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        dropdownRef.current &&
        (dropdownRef.current as HTMLElement).contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className={styles.select} onClick={toggleDropdown}>
        <span className={styles.label}>
          {selectedFruit || placeholder || "Choose an option"}
        </span>
        <span className={styles.icon}>
          <Image
            src="/chevron-down.svg"
            alt="chevron-down"
            width={14}
            height={14}
            priority
          />
        </span>
      </div>
      <div
        className={`
          ${styles.options_container}
          ${isOpen ? "opacity-100 max-h-60" : "opacity-0 max-h-0"}
        `}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={styles.option}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
