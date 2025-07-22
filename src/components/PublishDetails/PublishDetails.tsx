"use client";

import { useState } from "react";
import { IPublishPackage } from "@/types/types";
import Image from "next/image";
function PublishDetails({
  publishDetails,
}: {
  publishDetails: IPublishPackage[];
}) {
  const [activeChoice, setActiveChoice] = useState<IPublishPackage>(
    publishDetails[0]
  );

  return (
    <div className="z-[250] gap-4 justify-center p-2 items-center relative flex flex-col">
      <div className=" justify-center flex sm:flex-row flex-col items-center gap-4 ">
        {publishDetails.map((publishType) => {
          return (
            <button
              className={`${
                activeChoice.title === publishType.title
                  ? "bg-gray-800 text-white underline"
                  : ""
              }  border-1 px-4 py-3 rounded-3xl cursor-pointer hover:underline w-fit`}
              onClick={() => setActiveChoice(publishType)}
              key={publishType.title}
            >
              {" "}
              {publishType.title}{" "}
            </button>
          );
        })}
      </div>
      {/* xl:max-w-[64vw] lg:max-w-[75vw] */}
      <div className="lg:max-w-full flex justify-center w-full sm:p-4 sm:px-12 p-4 ">
        <div className="  flex justify-center lg:flex-row flex-col md:gap-6 gap-2  ">
          <div className="w-full flex justify-center">
            <div className=" relative w-full md:w-[600] min-w-[300] md:min-w-[500] md:h-[600] h-[300]  justify-items-center place-items-center">
              <Image src={activeChoice.picture} fill sizes="100%" alt="" />
            </div>
          </div>
          <div>
            <p className="whitespace-pre-line">{activeChoice.detail} </p>
            <div className="mt-4 w-fit px-4 py-2 bg-red-500 rounded-xl text-white hover:cursor-pointer transform transition duration-200 hover:bg-red-600 ">
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZZQKpFlRqpxhRCVZWFpBPxtJxVrVRFbNSXxwdgQXSPpqBZmxTHLsggCggSdXSSRXZQZkL"
                target="_blank"
              >
                Dosya Gönder{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PublishDetails;
