import React from "react";
import CreateForm from "../CreatePage/CreateForm";

const QuickUploadCard = () => {
  return (
    <div className="dashboard-card flex flex-col gap-4">
      <h3 className="text-26-semibold line-clamp-1">Quick Upload</h3>
      <div>
        <CreateForm />
      </div>
    </div>
  );
};

export default QuickUploadCard;
