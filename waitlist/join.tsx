import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DistributorForm from "./distributor-form";
import PharmacyForm from "./pharmacy-form";
import Image from "next/image";

export default function Join() {
  return (
    <div
      id="waitlist"
      className="relative bg-[#f8fbff] px-[24px] pb-[20px] overflow-hidden"
    >
      <div className="rounded-[40px] bg-[#E8F7F9] py-[64px] relative z-10 max-md:py-[24px]">
        <div className="flex flex-col gap-[32px] w-[60%] max-md:w-full mx-auto max-md:items-center">
          <div className="space-y-[12px] text-center">
            <p className="text-center mx-auto">
              {/* 
              <span className="font-dmsans font-semibold text-[48px] leading-[100%] tracking-[0] text-[#1D242D] max-md:text-[32px]">
                Join the Future
              </span> */}

              <span className="font-dmserif italic font-[600] text-[52px] leading-[100%] tracking-[0] text-[#15899F] max-md:text-[36px]">
                Join the Future
              </span>

              <span className="font-dmsans font-semibold text-[48px] leading-[100%] tracking-[0] text-[#1D242D] max-md:text-[32px]">
                of <br className="max-md:hidden" /> Pharmaceutical Distribution
              </span>
            </p>

            <p className="font-[400] text-[18px] text-[#546881] text-center max-md:text-[16px]">
              Be among the first to experience Nigeria's most advanced{" "}
              <br className="max-md:hidden" />
              pharmaceutical marketplace
            </p>
          </div>

          <Tabs defaultValue="distributor" className="w-full space-y-[32px] ">
            <TabsList className="border flex justify-center p-[4px] h-[48px] mx-auto bg-white rounded-full">
              <TabsTrigger
                className="data-[state=active]:bg-[#1BAAC7] data-[state=active]:rounded-full data-[state=active]:px-[16px] data-[state=active]:py-[8px] data-[state=active]:font-[500] data-[state=active]:text-[16px] data-[state=active]:text-white font-[500] text-[16px] text-[#546881]"
                value="distributor"
              >
                I’m a Distributor
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-[#1BAAC7] data-[state=active]:rounded-full data-[state=active]:px-[16px] data-[state=active]:py-[8px] data-[state=active]:font-[500] data-[state=active]:text-[16px] data-[state=active]:text-white font-[500] text-[16px] text-[#546881]"
                value="pharmacy"
              >
                I’m a Pharmacy
              </TabsTrigger>
            </TabsList>

            <div className="max-md:px-[24px]">
              <TabsContent value="distributor">
                <DistributorForm />
              </TabsContent>
              <TabsContent value="pharmacy">
                <PharmacyForm />
              </TabsContent>{" "}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
