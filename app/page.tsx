"use client";

import { motion } from "framer-motion";
import HeroSection from "@/waitlist/hero-section";
import HowItWorks from "@/waitlist/how-it-works";
import WhyChoose from "@/waitlist/why-choose";
import WaitlistFAQ from "@/waitlist/faq";
import Join from "@/waitlist/join";
import { sectionVariants } from "@/app/utils/variants";

export default function Home() {
  return (
    <div className="overflow-x-hidden scrollbar-hide pt-[100px]">
      {[HeroSection, HowItWorks, WhyChoose, WaitlistFAQ, Join].map(
        (Section, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Section />
          </motion.div>
        )
      )}
    </div>
  );
}
