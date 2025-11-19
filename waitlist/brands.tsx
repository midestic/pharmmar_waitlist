"use client";
import Image from "next/image";

const brands = [
  "/icons/waitlist-emzor.svg",
  "/images/waitlist-fidson.png",
  "/images/waitlist-neimeth.png",
  "/images/waitlist-roche.png",
  "/images/waitlist-swipha.png",
  "/images/sygen-wait.png",
  "/images/waitlist-teva.png",
  "/images/waitlist-abbvie.png",
  "/images/waitlist-boer.png",
];

export default function Brands() {
  return (
    <div className="py-[21px]">
      <p className="text-center font-[400] text-[#546881] text-[16px] max-md:text-[14px]">
        Access top pharmaceutical brands through verified distributors on
        Pharmmar.
      </p>

      <div className="relative overflow-hidden bg-[#F9FAFB] rounded-[25px] py-[50px] mt-4">
        <div className="flex items-center gap-[68px] animate-scroll">
          {/* Repeat logos twice for seamless looping */}
          {[...brands, ...brands].map((item, i) => (
            <Image
              key={i}
              src={item}
              alt="brand"
              width={114.95}
              height={52}
              className="max-md:w-[87px] max-md:h-[39px] object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
