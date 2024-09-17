"use client";

import React, { useState } from "react";
import axios from "axios";
import { SEARCH_URL } from "../../../constants";

const Page = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(event.target.value);
  };

  const searchTextChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("selectedFilter", selectedFilter);

    try {
      const res = await axios.get(SEARCH_URL, {
        params: {
          search_text: searchText,
          search_type: selectedFilter,
        },
      });
      console.log(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mr-6">
      <h1 className="text-xl text-center font-bold bg-gray-700 text-white py-2 rounded-lg">
        Search Your Texts
      </h1>

      <div className="flex gap-80 justify-center items-start">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 items-end max-w-2xl mt-12"
        >
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-[760px]">
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg h-32 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search your text ..."
              required
              value={searchText}
              onChange={(e: any) => searchTextChange(e)}
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-1.5 w-fit rounded-md font-semibold hover:text-black hover:bg-slate-200 hover:border hover:border-gray-600 duration-200 text-lg"
          >
            Search
          </button>
        </form>

        <select
          className="mt-12 bg-white border border-gray-300 text-black text-lg h-12 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedFilter}
          onChange={handleFilterChange}
        >
          <option value="">Select Option</option>
          <option value="Match">Match</option>
          <option value="Fuzzy">Fuzzy</option>
        </select>
      </div>
    </div>
  );
};

export default Page;
