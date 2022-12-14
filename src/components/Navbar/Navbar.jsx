import React from "react";
import lightThemeLogo from "../../images/lightThemeLogo.png";
import darkThemeLogo from "../../images/darkThemeLogo.png";
import { useState } from "react";

const NavBar = ({  theme }) => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="nav-bg w-full lg:px-[7rem] md:py-9 py-4   md:px-8 sm:px-12 px-6">
      <div className="mx-auto  justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a>
              <img
                src={theme === "light" ? lightThemeLogo : darkThemeLogo}
                alt=""
                // style={{ transition: "0.6s" }}
                className="logo lg:w-[47%] sm:w-[100px] w-[70px]"
              />
            </a>
            <div className="flex">
              <div>
                <button
                  className="md:hidden p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 ${
                        theme === "light" ? "text-darkblue-100" : "text-white"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 ${
                        theme === "light" ? "text-darkblue-100" : "text-white"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`justify-self-center grid grid-cols-2 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-5 md:flex lg:space-x-[4.5rem] md:space-x-[2rem] md:space-y-0">
              <li className="navLink md:text-base text-sm transition-all">
                <a
                  href=""
                  aria-disabled
                  className="hover:text-gray-300 hover:no-underline"
                >
                  Home
                </a>
              </li>
              <li className="navLink md:text-base text-sm  transition-all">
                <a
                  href=""
                  aria-disabled
                  className="hover:text-gray-300 hover:no-underline"
                >
                  About App
                </a>
              </li>
              <li className="navLink md:text-base text-sm  transition-all">
                <a
                  href=""
                  aria-disabled
                  className="hover:text-gray-300 hover:no-underline"
                >
                  Testimonials
                </a>
              </li>
              <li className="navLink md:text-base text-sm  transition-all">
                <a
                  href=""
                  aria-disabled
                  className="hover:text-gray-300 hover:no-underline"
                >
                  FAQs
                </a>
              </li>
              <div>
                <a
                  href="https://forms.gle/vkcUiyyeVZc3awmm7"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-darkblue-100 hover:no-underline text-white md:text-base text-sm md:px-4 xs:px-[10px] py-2 rounded-md"
                >
                  Join Waitlist
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
