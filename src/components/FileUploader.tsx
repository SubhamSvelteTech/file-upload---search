"use client";

import React, { useState } from "react";
import axios from "axios";

import { FILE_UPLOAD_URL } from "../../constants";

const FileUploader = () => {
  const [fileNames, setFileNames] = useState([]);

  const handleFileChange = (event: any) => {
    const files: File[] = event.target.files;
    if (files?.length > 0) {
      const filteredFiles: any = Array.from(files).filter(
        (file) => !file.name.endsWith(".rar")
      );
      setFileNames(filteredFiles);
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = fileNames.filter((_, i) => i !== index);
    setFileNames(updatedFiles);
  };

  const preventFileExplorerOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    fileNames.forEach((file) => {
      formData.append("attachment_list", file);
    });

    try {
      const res = await axios.post(FILE_UPLOAD_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      console.log("formData", formData);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("fileNames", fileNames);

  return (
    <div className="mt-20">
      <label
        htmlFor="uploadFile1"
        className="bg-white text-gray-500 font-semibold text-base rounded max-w-2xl h-96 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-11 my-4 fill-gray-500"
          viewBox="0 0 32 32"
        >
          <path
            d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
            data-original="#000000"
          />
          <path
            d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
            data-original="#000000"
          />
        </svg>

        <input
          type="file"
          id="uploadFile1"
          className="hidden"
          onChange={handleFileChange}
          multiple
          accept=".png, .jpg, .svg, .webp, .gif"
        />
        <p className="text-xs font-medium text-gray-400 mt-2">
          PNG, JPG, SVG, WEBP, and GIF are Allowed.
        </p>
        {fileNames?.length > 0 && (
          <div className="bg-gray-100 p-4 mt-4 w-full h-[400px] overflow-y-scroll">
            {fileNames.map((file: any, index: number) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white shadow-md p-2 mb-2 rounded-md"
                onClick={preventFileExplorerOpen}
              >
                <p className="text-sm font-medium text-gray-700">
                  {file?.name}
                </p>
                <button
                  className="text-sm text-red-600 font-semibold hover:text-red-800"
                  onClick={() => handleRemoveFile(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </label>

      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="bg-black text-white px-6 py-1.5 w-fit rounded-md font-semibold hover:text-black hover:bg-slate-200 hover:border hover:border-gray-600 duration-200  text-lg"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FileUploader;
