"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { databases, ID } from "@/lib/appwrite";
import type { Models } from "appwrite";

const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.NEXT_PUBLIC_BUSINESS_COLLECTION_ID!;

interface DistributorDocument extends Models.Document {
  businessName: string;
  email: string;
  phoneNumber: string;
}

export default function BusinessForm() {
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await databases.createDocument<DistributorDocument>(
        DB_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          businessName, // ← changed
          email, // ← changed
          phoneNumber,
        }
      );

      setSubmitted(true);
      // Reset form
      setBusinessName("");
      setEmail("");
      setPhoneNumber("");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to join waitlist. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-20">
        <h2 className="font-dmserif italic font-[600] text-[56px] text-[#179AB3] leading-[120%] tracking-[-0.06em] text-[#1D242D] max-md:text-[36px]">
          Success! You're on the distributor waitlist
        </h2>
        <p className="text-gray-600">Launch notification coming in Q2 2026.</p>
      </div>
    );
  }

  return (
    <div className="space-y-[32px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[32px] w-full relative z-10"
      >
        {/* Business Name */}
        <div className="flex flex-col gap-[8px]">
          <label
            className="font-[400] text-[14px] text-[#3D4C5E]"
            htmlFor="businessName"
          >
            Business Name <span className="text-[#FF3B30]">*</span>
          </label>
          <Input
            id="businessName" // updated id for consistency
            placeholder="Enter your business name" // slightly friendlier placeholder
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
            className="bg-white rounded-[12px] border placeholder:text-[14px] placeholder:font-[400] placeholder:text-[#A3ADBB]"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-[8px]">
          <label
            className="font-[400] text-[14px] text-[#3D4C5E]"
            htmlFor="email"
          >
            Email <span className="text-[#FF3B30]">*</span>
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white rounded-[12px] border placeholder:text-[14px] placeholder:font-[400] placeholder:text-[#A3ADBB]"
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-[8px]">
          <label
            className="font-[400] text-[14px] text-[#3D4C5E]"
            htmlFor="phoneNumber"
          >
            Phone Number <span className="text-[#FF3B30]">*</span>
          </label>
          <Input
            id="phoneNumber"
            placeholder="+234 903 3414 253"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="bg-white rounded-[12px] border placeholder:text-[14px] placeholder:font-[400] placeholder:text-[#A3ADBB]"
          />
        </div>

        <div className="flex justify-center items-center">
          <Button
            type="submit"
            variant="waitlistBtn"
            size="waitlistBtn"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Join Distributor Waitlist"}
          </Button>
        </div>

        {error && <p className="text-red-500 text-center -mt-6">{error}</p>}
      </form>

      {/* Detail boxes - unchanged */}
      <div className="flex justify-center items-center gap-[32px] max-md:flex-col max-md:items-center">
        <DetailBox
          icon="/icons/waitlist-search-normal.svg"
          text="150+ Pre-registered"
        />
        <DetailBox icon="/icons/waitlist-clock.svg" text="Launching Q2 2026" />
        <DetailBox
          icon="/icons/waitlist-star.svg"
          text="Early Access Benefit"
        />
      </div>

      {/* Background map - unchanged */}
      <div className="absolute bottom-0 left-0 w-full -z-10">
        <Image
          src="/images/map-base.png"
          alt="background base map"
          width={1920}
          height={600}
          className="w-full object-cover select-none pointer-events-none"
          priority
        />
      </div>
    </div>
  );
}

// DetailBox component (unchanged)
type DetailType = { icon: string; text: string };
const DetailBox = ({ icon, text }: DetailType) => (
  <div className="flex gap-[10px] items-center">
    <Image src={icon} height={18} width={18} alt="detail icon" />
    <p className="font-[500] text-[14px] text-[#546881]">{text}</p>
  </div>
);
