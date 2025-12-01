import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/waitlist/navbar";
import Footer from "@/waitlist/footer";
import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pharmar",
  description: "Pharmaceuticals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={dmSans.className}>
        <div className="max-w-[1920px] mx-auto overflow-x-hidden">
          <Navbar />
          <div className="max-w-[1920px] mx-auto  ">
            <div className=" right-0 flex justify-end fixed  z-100">
              <div className="flex flex-col items-center gap-[90.67px] mt-[30vh] max-md:hidden">
                <p className="font-[600] text-[14px] text-[#B8E5EE] rotate-90">
                  CHECKOUT OUR SOCIALS{" "}
                </p>

                <div className="space-y-[10px]">
                  <div className="bg-[#0C4D5A] w-[40px] h-[40px] rounded-full flex justify-center items-center">
                    <Image
                      src={"/images/waitlist-facebook.png"}
                      height={19.88}
                      width={20}
                      alt="facebook icon"
                    />
                  </div>

                  <div className="bg-[#0C4D5A] w-[40px] h-[40px] rounded-full flex justify-center items-center">
                    <Image
                      src={"/images/waitlist-x.png"}
                      height={19.88}
                      width={20}
                      alt="x icon"
                    />
                  </div>

                  <div className="bg-[#0C4D5A] w-[40px] h-[40px] rounded-full flex justify-center items-center">
                    <Image
                      src={"/images/waitlist-inst.png"}
                      height={19.88}
                      width={20}
                      alt="instagram icon"
                    />
                  </div>

                  <div className="bg-[#0C4D5A] w-[40px] h-[40px] rounded-full flex justify-center items-center">
                    <Image
                      src={"/images/waitlist-link.png"}
                      height={19.88}
                      width={20}
                      alt="linkedin icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            {children}
          </div>

          <div className="p-[24px] max-md:p-[0px]">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
