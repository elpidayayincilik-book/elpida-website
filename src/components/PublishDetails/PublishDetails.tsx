"use client";

import { useState } from "react";
import FreePublish from "./FreePublish";
import SpecialPublish from "./SpecialPublish";
import AcademicPublish from "./AcademicPublish";

function PublishDetails() {
  type TPubslishType = "free" | "academic" | "special";

  const [activeChoice, setActiveChoice] = useState<TPubslishType>("free");

  const publishTypes = [
    { id: 1, type: "free", title: "Ücretsiz Yayım" },
    { id: 2, type: "academic", title: "Akademik Yayım" },
    { id: 3, type: "special", title: "Özel Yayım" },
  ];

  return (
    <div className="z-[250] " >
      <div className="flex sm:flex-row flex-col gap-4 justify-center p-6 items-center ">
        {publishTypes.map((publishType) => {
          return (
            <button
              className={`${
                activeChoice === publishType.type
                  ? "bg-gray-800 text-white underline"
                  : ""
              }  border-1 px-4 py-3 rounded-3xl cursor-pointer hover:underline w-fit`}
              onClick={() => setActiveChoice(publishType.type as TPubslishType)}
              key={publishType.title}
            >
              {" "}
              {publishType.title}{" "}
            </button>
          );
        })}
      </div>

      <div className="lg:max-w-full flex justify-center w-full sm:p-4 p-2 ">
        <div className="xl:max-w-[64vw] lg:max-w-[75vw] w-full">
          {activeChoice === "free" ? (
            <FreePublish />
          ) : activeChoice === "special" ? (
            <SpecialPublish />
          ) : activeChoice === "academic" ? (
            <AcademicPublish />
          ) : (
            <FreePublish />
          )}
        </div>
      </div>
      <a
        href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZZQKpFlRqpxhRCVZWFpBPxtJxVrVRFbNSXxwdgQXSPpqBZmxTHLsggCggSdXSSRXZQZkL"
        target="_blank"
      >
        Contact via Gmail
      </a>
    </div>
  );
}
export default PublishDetails;
