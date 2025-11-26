"use client";

import { Minus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { BsArrowRight, BsPlus } from "react-icons/bs";
import { motion } from "framer-motion";

export default function WaitlistFAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const faqs = [
    {
      question: "What is Phammar?",
      answer:
        "Phammar is a platform that connects pharmacies with suppliers and customers for seamless operations and visibility.",
    },
    {
      question: "How to sign up?",
      answer:
        "Simply visit our website, click on 'Join Waitlist', and follow the registration steps to get started.",
    },
    {
      question: "Is there a fee?",
      answer:
        "Joining Phammar is free! You only pay transaction fees when you start selling.",
    },
    {
      question: "How can I sell?",
      answer:
        "Once verified, you can list your products and start receiving orders directly from customers.",
    },
    {
      question: "What support is available?",
      answer:
        "We offer 24/7 customer support and onboarding guidance for all users.",
    },
  ];

  return (
    <div className="bg-[#f8fbff] p-[24px] max-md:bg-white">
      <div className="relative  bg-[#F0F9FB] rounded-[40px] space-y-[58px] overflow-hidden">
        {/* <Image
          src="/images/waitlist-group-2.png"
          alt="decorative"
          width={236}
          height={323}
          className="absolute bottom-[40px] left-[40px] object-contain z-2  translate-y-[-250px] translate-x-[60px] opacity-20 max-md:hidden "
        /> */}

        <div className="bg-[#F2F4F7] max-md:bg-white rounded-[40px] py-[64px] max-md:p-0 flex flex-col gap-[64px] max-md:gap-[40px]">
          <div className="space-y-[18px]">
            <motion.div
              className="bg-white py-[12px] px-[16px] border border-[#EBEEF2] flex items-center gap-[8px] rounded-full w-fit mx-auto cursor-pointer select-none"
              // No hover scale/shadow on the container → stays perfectly still
            >
              <Image
                src="/icons/message-question.svg"
                height={18}
                width={18}
                alt="question"
              />

              <p className="font-[600] text-[14px] text-[#47586E]">
                GOT QUESTIONS, WE HAVE ANSWERS
              </p>

              {/* This inner wrapper isolates the hover animation */}
              <motion.div
                className="flex items-center gap-[10px]"
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 420, damping: 14 }}
              >
                {/* JOIN WAITLIST — scales + color boost */}
                <motion.p
                  className="font-[600] text-[14px] text-[#179AB3] origin-left whitespace-nowrap max-md:hidden"
                  whileHover={{ color: "#11a8c5" }}
                >
                  <a href="#waitlist" className="block">
                    JOIN WAITLIST
                  </a>
                </motion.p>

                {/* Arrow — moves right independently */}
                <motion.div
                  whileHover={{ x: 9 }}
                  transition={{ type: "spring", stiffness: 500, damping: 12 }}
                  className="flex-shrink-0 max-md:hidden"
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

            <p className="font-[700] max-md:font-[600] max-md:text-[24px] text-[40px] text-[#1D242D] text-center mx-auto">
              Frequently Asked Questions
            </p>
          </div>

          <div className="w-[60%] mx-auto mt-[20px] max-md:w-[100%]">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="w-full bg-white rounded-[24px] mt-[20px] overflow-hidden"
              >
                <div
                  className="w-full py-[20px] px-[24px] flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="font-[600] text-[16px] text-[#000000] max-md:text-[14px]">
                    {item.question}
                  </p>
                  {openIndexes.includes(index) ? (
                    <Minus className="w-[24px] h-[24px] text-[#000000]" />
                  ) : (
                    <BsPlus className="w-[24px] h-[24px] text-[#000000]" />
                  )}
                </div>

                {openIndexes.includes(index) && (
                  <div className="bg-white p-[24px]">
                    <p className="font-[500] text-[16px] text-[#546881] max-md:text-[14px]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-[30px] flex flex-col justify-center items-center gap-y-[24px] max-md:w-[100%]">
            <p className="font-[600] max-md:text-[24px] text-[32px] text-[#1D242D] text-center ">
              Still have questions?
            </p>
            <p className="font-[400] text-[18px] text-[#546881] text-center max-md:font-[400] max-md:text-[18px]">
              We&apos;re here to help you!
            </p>
            <button className="w-[120px] h-[54px] bg-white rounded-full font-[600] text-[14px] text-[#1D242D] max-md:w-[100%]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
