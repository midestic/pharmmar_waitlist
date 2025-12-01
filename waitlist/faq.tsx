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
      question: "What exactly is PharmMar?",
      answer:
        "PharmMar is a marketplace that connects licensed pharmaceutical distributors with pharmacies, clinics, and hospital pharmacies. You can find trusted products, verified sellers, and fast delivery — all in one place.",
    },
    {
      question: "Who is PharmMar for?",
      answer:
        "PharmMar is designed for pharmacy owners, hospital pharmacies, clinics, wholesalers, and licensed distributors who want a safe, simple, and reliable way to buy or sell pharmaceutical products.",
    },
    {
      question: "Why should I join the waitlist?",
      answer:
        "Joining the waitlist gives you early access, priority onboarding, and special launch perks — including discounts, verified suppliers, and access to high-demand products before everyone else.",
    },
    {
      question: "When will PharmMar officially launch?",
      answer:
        "We’re in the final testing and onboarding phase. People on the waitlist will be invited to join before we open to the public.",
    },
    {
      question: "Is PharmMar registered and compliant?",
      answer:
        "Yes. We only work with licensed distributors and verified pharmacies. Every seller is checked through CAC, PCN, NAFDAC, and ID verification before they can list products.",
    },
    {
      question: "Is it safe to buy medicines on the platform?",
      answer:
        "Yes, it is. Every seller must pass strict KYC and regulatory checks. Products are vetted, batches can be traced, and you only buy from verified, reputable distributors.",
    },
    {
      question: "How does the platform work?",
      answer:
        "Just search for the medicines you need, compare prices from verified distributors, place your order, and choose delivery or pickup. It’s simple, fast, and transparent.",
    },
    {
      question: "What does it cost to use PharmMar?",
      answer:
        "Joining the waitlist is free. Buyers can use the platform at no cost. Distributors only pay a small fee when they make a sale — no hidden charges.",
    },
    {
      question: "What happens after I join the waitlist?",
      answer:
        "You’ll get a confirmation email and occasional updates. When your spot is ready, we’ll send you a private link so you can create your account.",
    },
    {
      question: "Will my information be safe?",
      answer:
        "Yes. We follow strict data protection rules. Your information is never shared or sold — it’s used only to keep you updated and help you onboard smoothly.",
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
                className="flex items-center gap-[10px] max-md:hidden"
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
                  className="font-[600] text-[14px] text-[#179AB3] origin-left whitespace-nowrap "
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
            <button className="h-[54px] bg-white rounded-full font-[600] text-[14px] text-[#1D242D] max-md:w-[100%] px-[20px]">
              Contact Support for more Information{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
