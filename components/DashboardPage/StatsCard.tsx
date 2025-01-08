import React from "react";

const StatsCard = () => {
  return (
    <div className="snapshot-card flex flex-col gap-4 h-full w-full">
      <h3 className="text-26-semibold line-clamp-1">Stats</h3>
      <ul>
        <li>
          <p className="text-16-medium line-clamp-1">Total Snapshots: {2}</p>
        </li>
        <li>
          <p className="text-16-medium line-clamp-1">Favorite Snapshots: {1}</p>
        </li>
      </ul>
    </div>
  );
};

export default StatsCard;
