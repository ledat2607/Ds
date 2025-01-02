"use client";
import Image from "next/image";
import React from "react";

type Props = {
  setLanguage: React.Dispatch<React.SetStateAction<"en" | "vi">>;
};

const ButtonLanguage = ({ setLanguage }: Props) => {
  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLanguage = prev === "vi" ? "en" : "vi";
      localStorage.setItem("language", newLanguage);
      return newLanguage;
    });
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="px-1 py-1 border rounded-md hover:bg-gray-200 hover:text-black hover:border-blue-500 dark:hover:bg-gray-700 transition"
    >
      {localStorage.getItem("language") === "vi" ? (
        <div className="flex items-center justify-center gap-3">
          VN <Image alt="" src={"../vn.svg"} width={24} height={24} />
        </div>
      ) : (
        <div className="flex items-center justify-center gap-3">
          EN <Image alt="" src={"../us.svg"} width={24} height={24} />
        </div>
      )}
    </button>
  );
};

export default ButtonLanguage;
