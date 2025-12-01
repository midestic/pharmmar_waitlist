import { Button } from "@/components/ui/button";
import Image from "next/image";
import Brands from "./brands";
import { motion, useMotionTemplate, useAnimate } from "framer-motion";
export default function HeroSection() {
  return (
    <div className="p-[24px] max-md:p-[16px] bg-white flex flex-col gap-[10px]">
      <div className="relative max-md:px-[0px] px-[120px]  pt-[70px] bg-[#F0F9FB] max-md:rounded-[24px] rounded-[40px] space-y-[58px] overflow-hidden">
        <Image
          src="/images/waitlist-Group.png"
          alt="decorative"
          width={577.86}
          height={343.63}
          className="absolute bottom-0 left-0 object-contain z-10 max-md:hidden"
        />
        <Image
          src="/images/waitlist-group-2.png"
          alt="decorative"
          width={261}
          height={277.07}
          className="absolute bottom-[40px] left-[40px] object-contain z-2  translate-y-[-250px] opacity-20 max-md:hidden"
        />

        <div className="flex flex-col gap-[32px] items-center max-md:px-[16px]">
          <motion.div
            className="bg-white py-[12px] px-[16px] border border-[#EBEEF2] flex items-center gap-[8px] rounded-full max-md:hidden cursor-pointer"
            // Removed whileHover from the container — no scaling/shadow here
          >
            <Image src="/icons/share.svg" height={18} width={18} alt="share" />

            <p className="font-[600] text-[14px] text-[#47586E]">
              JOIN THOUSANDS OF PHARMACIST AND DISTRIBUTORS
            </p>

            {/* This wrapper will handle the hover scale only for text + arrow */}
            <motion.div
              className="flex items-center gap-[8px]"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              {/* The text that scales */}
              {/* <motion.p
                className="font-[600] text-[14px] text-[#179AB3] origin-left"
                // Optional: add subtle color brighten on hover
                whileHover={{ color: "#11a8c5" }}
              >
                <a href="#waitlist">JOIN WAITLIST</a>
              </motion.p> */}

              {/* The arrow that moves right */}
              {/* <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                className="flex-shrink-0"
              >
                <Image
                  src="/icons/waitlist-arrow-right.svg"
                  height={18}
                  width={18}
                  alt="arrow"
                />
              </motion.div> */}
            </motion.div>
          </motion.div>{" "}
          <p className="text-center mx-auto">
            <span className="font-dmsans font-medium text-[48px] leading-[120%] tracking-[-0.06em] text-[#1D242D] max-md:text-[32px]">
              Empowering{" "}
            </span>
            <span className="font-dmserif italic font-[600] text-[56px] text-[#179AB3] leading-[120%] tracking-[-0.06em] text-[#1D242D] max-md:text-[36px]">
              Pharmaceutical <br className="max-md:hidden" /> Distribution
            </span>
            <span className="font-dmsans font-medium text-[48px] leading-[120%] tracking-[-0.06em] text-[#1D242D] max-md:text-[32px] ml-2">
              in Africa
            </span>
          </p>
          <p className="font-[400] text-[20px] text-[#546881] text-center mx-auto">
            Connect to licensed suppliers, access bulk medicine inventory, and{" "}
            <br className="max-md:hidden" />
            manage your distribution with ease.
          </p>
          <a href="#waitlist">
            <Button
              children="JOIN WAITLIST"
              variant="waitlistBtn"
              size="waitlistBtn"
            />
          </a>
        </div>

        <div className="max-md:w-screen w-full flex justify-center items-center relative ">
          <div className="w-[50%] min-md:min-w-[954px] relative max-md:w-full">
            <Image
              className="mx-auto max-md:w-full max-md:translate-x-[-20px] "
              src="/images/waitlist-carton.png"
              height={507}
              width={970}
              alt="waitlist carton"
            />

            <div className="absolute bottom-0  left-1/2 -translate-x-1/2 flex items-end justify-center gap-[10px]">
              <Image
                className="max-md:w-[40px] max-md:ml-[80px]  z-100 translate-y-[-170px] translate-x-[100px] max-md:translate-x-[0px] float-bounce"
                src="/images/waitlist-Hover.png"
                height={82}
                width={84}
                alt="hover left"
              />

              <Image
                className="mx-auto max-md:w-[120px]  translate-x-[40px] max-md:translate-x-[-20px] z-1 scale-[150%] max-md:scale-[350%] max-md:translate-x-0"
                src="/images/waitlist-lady.png"
                height={435}
                width={651}
                alt="lady"
              />

              <Image
                className="mx-auto max-md:w-[150px]  translate-x-[-100px] z-3 scale-[250%] max-md:scale-[400%] max-md:translate-x-[-10px]"
                src="/images/waitlist-guy.png"
                height={507}
                width={970}
                alt="guy"
              />

              <Image
                className="max-md:w-[40px] z-100 max-md:mr-[80px]  translate-x-[-150px] max-md:translate-x-[-30px] translate-y-[-100px] max-md:translate-y-[-200px]  float-bounce"
                src="/images/waitlist-Hover.png"
                height={30}
                width={84}
                alt="hover right"
              />
            </div>
          </div>
        </div>
      </div>

      <Brands />
    </div>
  );
}
