"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { howData, whyData } from "./data";

type ItemType = {
  title: string;
  description: string;
  img1?: string | StaticImageData | null;
  img2?: string | StaticImageData | null;
  img3?: string | StaticImageData | null;
};

export default function WhyChoose() {
  return (
    <div className="px-[24px] pb-[10px] bg-[#F8FBFF] max-md:bg-white">
      <div className="bg-white rounded-[40px] py-[70px] px-[120px] max-md:p-0 flex flex-col gap-[70px]">
        {/* HEADER SECTION */}
        <div className="space-y-[18px]">
          <p className="text-center mx-auto">
            <span className="font-dmsans font-bold text-[40px] leading-[130%] tracking-[-0.05em] text-[#1D242D] max-md:text-[24px] max-md:font-medium">
              Why{" "}
            </span>
            <span className="font-dmserif italic font-[600] text-[48px] leading-[130%] tracking-[-0.05em] text-[#1AABC7] max-md:text-[28px]">
              Distributors
            </span>{" "}
            <span className="font-dmsans font-bold text-[40px] leading-[130%] tracking-[-0.05em] text-[#1D242D] max-md:text-[24px] max-md:font-medium">
              <br className="max-md:hidden" />
              Choose Phammar
            </span>
          </p>

          <p className="font-[500] max-md:font-[400] max-md:text-[16px] text-[18px] text-[#546881] text-center">
            Phammar helps distributors simplify operations, access verified
            products, <br className="max-md:hidden" /> and grow their business
            with confidence.
          </p>
        </div>

        <div className="flex gap-[40px] justify-center max-md:flex-col max-md:items-center flex-wrap">
          {whyData.map((items: ItemType, i) => (
            <div key={i} className="min-w-[357.33px] flex flex-col gap-[24px]">
              <div className="bg-[#F5F7F9] h-[240px] rounded-[24px] flex justify-center items-center">
                {/* Animation for: More customers, less marketing spend */}
                {items.title === "More customers, less marketing spend." && (
                  <motion.div
                    className="flex justify-center items-center"
                    initial="visible"
                    animate="visible"
                  >
                    {[items.img1, items.img2, items.img3].map((img, index) =>
                      img ? (
                        <motion.div
                          key={index}
                          className={
                            index === 0
                              ? ""
                              : index === 1
                              ? "translate-x-[-20px]"
                              : "translate-x-[-40px]"
                          }
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
                            height={77}
                            width={77}
                            alt="shop-add"
                          />
                        </motion.div>
                      ) : null
                    )}
                  </motion.div>
                )}

                {items.title ===
                  "Order management, invoicing, and payments tools" && (
                  <motion.div
                    className="flex gap-[7.73px]"
                    initial="visible"
                    animate="visible"
                  >
                    {[items.img1, items.img2, items.img1].map((img, index) =>
                      img ? (
                        <motion.div
                          key={index}
                          animate={{
                            y: [0, -10, 0],
                            scale: [1, 1.03, 1],
                          }}
                          transition={{
                            duration: 3.5 + index * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Image
                            src={img}
                            height={index === 1 ? 93.89 : 66.51}
                            width={index === 1 ? 93.89 : 66.51}
                            alt="shop-add"
                          />
                        </motion.div>
                      ) : null
                    )}
                  </motion.div>
                )}

                {items.title === "Know what’s selling, and sell more." && (
                  <motion.div
                    className="flex gap-[7.73px]"
                    initial="visible"
                    animate="visible"
                  >
                    {items.img1 && (
                      <motion.div
                        animate={{
                          y: [0, -12, 0],
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
                          height={175.53}
                          width={315.05}
                          alt="shop-add"
                        />
                      </motion.div>
                    )}
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
