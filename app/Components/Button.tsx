import React from "react";
import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  icon?: string;
  variant: string;
  title: string;
  full?: boolean;
};

function Button({ title, icon, variant, type }: ButtonProps) {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
}

export default Button;
