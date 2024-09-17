"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    if (pathname.includes("upload-documents")) {
      setActiveMenu("upload-documents");
    } else if (pathname.includes("search-documents")) {
      setActiveMenu("search-documents");
    } else {
      return;
    }
  }, [pathname]);

  console.log("pathname", pathname);

  return (
    <div>
      {/* Sidebar off-canvas */}
      <div
        id="hs-offcanvas-example"
        className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
        role="dialog"
        aria-label="Sidebar"
      >
        <div className="px-6">
          <a
            className="flex-none font-semibold text-2xl text-black focus:outline-none focus:opacity-80"
            href="/"
            aria-label="Brand"
          >
            Brand
          </a>
        </div>

        {/* Sidebar navigation */}
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <li className="hs-accordion">
              <Link
                href="/upload-documents"
                className={`hs-accordion-toggle w-full font-semibold flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg ${activeMenu === "upload-documents" ? "bg-gray-200" : "bg-white"}`}
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Upload Documents
              </Link>
            </li>

            <li className="hs-accordion">
              <Link
                href="/search-documents"
                className={`hs-accordion-toggle w-full font-semibold flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg ${activeMenu === "search-documents" ? "bg-gray-200" : "bg-white"}`}
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Search Documents
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
