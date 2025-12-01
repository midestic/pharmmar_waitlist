import { motion } from "framer-motion";

import Image from "next/image";
import { howData } from "./data";
import WhyChoose from "./why-choose";

export default function HowItWorks() {
  return (
    <div className="p-[24px] bg-[#F8FBFF] max-md:bg-white">
      <div className="bg-white rounded-[40px] py-[70px] px-[120px] max-md:px-0 flex flex-col gap-[70px]">
        <div className="space-y-[18px]">
          <motion.div
            className="bg-white py-[12px] px-[16px] border border-[#EBEEF2] flex items-center gap-[8px] rounded-full w-fit mx-auto cursor-pointer select-none"
            // No hover effect on the container → no scaling/shadow
          >
            <Image src="/icons/share.svg" height={18} width={18} alt="share" />

            <p className="font-[600] text-[14px] text-[#47586E]">
              HOW IT WORKS
            </p>

            <motion.div
              className="flex items-center gap-[10px]"
              whileHover="wiggle"
              variants={{
                wiggle: {
                  y: [0, -6, 6, -6, 6, 0],
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  },
                },
              }}
            >
              <motion.p
                className="font-[600] text-[14px] text-[#179AB3] origin-left whitespace-nowrap"
                whileHover={{ color: "#11a8c5" }}
              >
                <a href="#waitlist" className="block">
                  JOIN WAITLIST
                </a>
              </motion.p>

              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 600, damping: 15 }}
                className="flex-shrink-0"
              >
                <Image
                  src="/icons/waitlist-arrow-right.svg"
                  height={18}
                  width={18}
                  alt="arrow"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <p className="text-center mx-auto">
            <span className="font-dmsans font-medium text-[40px] leading-[105%] tracking-[-0.05em] text-[#1D242D] max-md:text-[24px]">
              How Thousands Of <br className="max-md:hidden" />{" "}
            </span>
            <span className="font-dmserif italic font-[600] text-[48px] leading-[105%] tracking-[-0.05em] text-[#15899F] max-md:text-[28px]">
              Pharmacies
            </span>{" "}
            <span className=" ml-2 font-dmsans font-medium text-[40px] leading-[105%] tracking-[-0.05em] text-[#1D242D] max-md:text-[24px]">
              {" "}
              Use Phammar
            </span>
          </p>

          <p className="font-[500] text-[18px] max-md:text-[16px] text-[#546881] text-center">
            Start in minutes and simplify your pharmaceutical sourcing, from
            account <br className="max-md:hidden" />
            setup to smooth delivery, with ease and efficiency at every step
          </p>
        </div>

        <div className="flex gap-[40px] justify-center max-md:flex-col max-md:items-center flex-wrap">
          {howData.map((items, i) => (
            <div
              key={i}
              className="max-w-[357.33px] max-md:max-w-full h-auto flex flex-col gap-[24px] rounded-[24px] bg-cover bg-center bg-no-repeat"
            >
              <div
                className="bg-[#F5F7F9] w-full h-[240px] rounded-[24px] flex justify-center items-center"
                style={{
                  backgroundImage: `url(${items.bgImage})`,
                }}
              >
                {items.title === "Sign up to unlock exclusive benefits!" && (
                  <motion.div
                    className="flex gap-[29px]"
                    initial="visible"
                    animate="visible"
                  >
                    {[items.img1, items.img2, items.img3].map(
                      (img, index) =>
                        img && (
                          <motion.div
                            key={index}
                            className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center"
                            animate={{
                              y: [0, -8, 0],
                              opacity: [1, 0.9, 1],
                            }}
                            transition={{
                              duration: 3 + index * 0.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <Image
                              src={img}
                              height={28}
                              width={28}
                              alt="shop-add"
                            />
                          </motion.div>
                        )
                    )}
                  </motion.div>
                )}

                {items.title ===
                  "Search for what you need and compare prices to find the best deal." && (
                  <motion.div
                    className="flex gap-[7.73px]"
                    initial="visible"
                    animate="visible"
                  >
                    {[items.img1].map(
                      (img, index) =>
                        img && (
                          <motion.div
                            key={index}
                            animate={{
                              y: [0, -10, 0],
                              scale: [1, 1.02, 1],
                            }}
                            transition={{
                              duration: 3.5 + index * 0.7,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <Image
                              src={img}
                              height={32.23}
                              width={314.07}
                              alt="shop-add"
                            />
                          </motion.div>
                        )
                    )}
                  </motion.div>
                )}

                {items.title ===
                  "Effortlessly Order and Track Your Purchases!" && (
                  <motion.div
                    className="flex gap-[7.73px]"
                    initial="visible"
                    animate="visible"
                  >
                    <motion.div
                      className="bg-[#FCFDFD] py-[16.79px] px-[20.98px] flex justify-center items-center rounded-[13.11px]"
                      animate={{
                        y: [0, -8, 0],
                        opacity: [1, 0.95, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src={items.img1}
                        height={154.29}
                        width={229.76}
                        alt="shop-add"
                      />
                    </motion.div>
                  </motion.div>
                )}
              </div>

              <p className="font-[600] text-[24px] text-[#1D242D]">
                {items.title}
              </p>

              <p className="font-[400] text-[16px] text-[#546881]">
                {items.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
