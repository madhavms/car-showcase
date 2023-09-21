"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  containerStyles,
  handleClick,
}) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
