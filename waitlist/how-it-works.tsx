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
            className="bg-white py-[12px] px-[16px] border border-[#EBEEF2] flex items-center gap-[8px] rounded-full w-fit mx-auto cursor-pointer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
          >
            <Image src="/icons/share.svg" height={18} width={18} alt="share" />

            <p className="font-[600] text-[14px] text-[#47586E]">
              HOW IT WORKS
            </p>

            <p className="font-[600] text-[14px] text-[#179AB3]">
              <a href="#waitlist">JOIN WAITLIST</a>
            </p>

            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Image
                src="/icons/waitlist-arrow-right.svg"
                height={18}
                width={18}
                alt="arrow"
              />
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

        <div className="flex gap-[40px] justify-center max-md:flex-col max-md:items-center">
          {howData.map((items, i) => (
            <div
              key={i}
              className="min-w-[357.33px] flex flex-col gap-[24px] rounded-[24px] bg-cover bg-center bg-no-repeat"
            >
              <div
                className="bg-[#F5F7F9] h-[240px] rounded-[24px] flex justify-center items-center"
                style={{
                  backgroundImage: `url(${items.bgImage})`,
                }}
              >
                {items.title === "Sign Up" && (
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

                {items.title === "Browse Inventory" && (
                  <motion.div
                    className="flex gap-[7.73px]"
                    initial="visible"
                    animate="visible"
                  >
                    {[items.img1, items.img2].map(
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
                              height={index === 0 ? 32 : 30.94}
                              width={index === 0 ? 81.38 : 224.95}
                              alt="shop-add"
                            />
                          </motion.div>
                        )
                    )}
                  </motion.div>
                )}

                {items.title === "Order & Track" && (
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
