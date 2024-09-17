import React from "react";
import FileUploader from "@/components/FileUploader";

const page = () => {
  return (
    <div className="mr-6">
      <h1 className="text-xl text-center font-bold bg-gray-700 text-white py-2 rounded-lg">Upload File</h1>

      <FileUploader />
    </div>
  );
};

export default page;
