import { Button } from "@/components/ui/button";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed w-full z-500">
      <div
        className="relative max-md:px-[20px] px-[124px] flex justify-between items-center bg-cover bg-center bg-no-repeat overflow-hidden h-[100px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8, 60, 71, 0.85), rgba(8, 60, 71, 0.85)), url('/images/navbar-bg.jpg')",
        }}
      >
        <Image
          src="/images/waitlist-navbar-left-right.png"
          alt="decor-left"
          width={133}
          height={200}
          className="absolute left-0 top-0 h-full w-auto object-contain z-20 rotate-70 ml-[8px] max-md:ml-0 max-md:translate-x-[-30px] max-md:translate-y-[-10px] translate-y-[-30px]"
        />

        <Image
          src="/images/waitlist-navbar-left-right.png"
          alt="decor-right"
          width={133}
          height={600}
          className="absolute right-0 top-0 h-full w-auto object-contain z-20  rotate-270 max-md:translate-x-[40px] max-md:translate-y-[25px]"
        />

        <div className="relative z-30 flex justify-between items-center w-full">
          <Image
            src="/images/PhammerLogo.png"
            width={143}
            height={42}
            alt="pharmmarLogo"
          />

          <a href="#waitlist">
            <Button
              children="JOIN WAITLIST"
              variant="waitlistBtn"
              size="waitlistBtn"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
