"use client";
import React, { useState } from "react";
import { CircleProgress } from "../ui/progress";

const SnapScribeCreditsCard = () => {
  const [creditsUsed, setCreditsUsed] = useState(2);
  return (
    <div className="dashboard-card flex flex-col gap-4">
      <div className="flex justify-between">
        <h3 className="text-26-semibold line-clamp-1">SnapScribe Credits</h3>
        <div className="flex gap-1">
          <div className="snapshot-card_date">Free Plan</div>
          <div className="snapshot-card_date !bg-secondary">Upgrade</div>
        </div>
      </div>
      <div className="flex gap-8 justify-start items-center">
        <div>
          <CircleProgress value={creditsUsed} />
        </div>
        <div className="flex flex-col">
          <p className="text-16-medium line-clamp-1">
            Transformation Credits Used
          </p>
          <p className="snapshot-card_descfont-normal text-[16px] line-clamp-2 text-black-100 break-all">
            Resets in 28 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default SnapScribeCreditsCard;
