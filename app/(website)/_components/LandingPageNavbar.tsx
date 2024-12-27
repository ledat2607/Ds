"use client";
import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type Props = {};

const LandingPageNavbar = (props: Props) => {
  const [language, setLanguage] = useState<"en" | "vi">("vi");

  // Load ngôn ngữ từ localStorage khi component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "en" | "vi";
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLanguage = prev === "vi" ? "en" : "vi";
      localStorage.setItem("language", newLanguage); // Lưu vào localStorage
      return newLanguage;
    });
  };

  return (
    <div className="flex w-full justify-between items-center p-4 border-b">
      <div className="text-3xl font-semibold flex items-center gap-x-3">
        <Menu className="w-6 h-6 cursor-pointer" />
        <Image src={"/opal-logo.svg"} width={32} height={32} alt="Opal Logo" />
        Opal
      </div>

      <div className="hidden gap-x-10 items-center lg:flex">
        <Link
          href={"/"}
          className="bg-[#7320DD] px-2 py-2 rounded-2xl text-md font-semibold hover:bg-[#7320DD]/30"
        >
          {language === "vi" ? "Trang chủ" : "Home"}
        </Link>
        <Link href={"/about"}>
          {language === "vi" ? "Giới thiệu" : "About"}
        </Link>
        <Link href={"/contact"}>
          {language === "vi" ? "Liên hệ" : "Contact"}
        </Link>
      </div>
      <div className="flex items-center gap-x-4">
        <Link href={"/auth/sign-in"}>
          <Button className="text-base flex gap-x-2 bg-white text-black hover:text-white hover:bg-gray-800">
            <User fill="#000" />
            {language === "vi" ? (
              <p className="hidden md:block">Đănng nhập</p>
            ) : (
              <p className="hidden md:block">Login</p>
            )}
          </Button>
        </Link>
        <button
          onClick={toggleLanguage}
          className="px-2 py-2 border rounded-md hover:bg-gray-200 hover:text-black hover:border-blue-500 dark:hover:bg-gray-700 transition"
        >
          {language === "vi" ? (
            <div className="flex items-center justify-center gap-3">
              VN <Image alt="" src={"/vn.svg"} width={24} height={24} />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3">
              EN <Image alt="" src={"/us.svg"} width={24} height={24} />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default LandingPageNavbar;
