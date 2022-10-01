import React from "react";
import lightThemeHeroImg from "../images/lightThemeMockup.png";
import darkThemeHeroImg from "../images/darkThemeMockup.png";

const SectionOne = ({ toggleTheme, theme }) => {
  return (
    <>
      <main>
        <div className=" md:mt-[20px] mt-[25px] lg:pl-[7rem] lg:px-0 md:px-0 sm:px-12 md:pl-[2.5rem] px-6">
          <article className="flex items-center transition-all">
            <section className="flex-1">
              <h1 className="heading text-darkblue-100 font-bold lg:text-[3.2rem] md:text-[2.5rem] sm:text-[2.8rem] text-[1.8rem] lg:mb-5 md:mb-3 sm:mb-4 mb-5 select-none">
                Sell Your Cryptocurrency Fast and With Ease
              </h1>
              <p className="text lg:text-[1.3rem] md:text-[1rem] sm:text-[1.3rem] text-[1rem] text-grey-100 md:w-[90%] lg:mb-9 md:mb-3 sm:mb-4 mb-8">
                Trading has never been this seamless. Use TheZ Finance platform
                to sell your Bitcoin, Ethereum and Tether and get your payment
                within minutes.
              </p>
              <div className=" w-fit h-fit">
                <a
                  href="https://forms.gle/vkcUiyyeVZc3awmm7"
                  target="_blank"
                  rel="noreferrer"
                  className="self-center bg-darkblue-100 mb-4 hover:no-underline   text-white text-base mt-7  rounded-sm px-4 py-2 text-bold transition-all"
                >
                  Join Waitlist
                </a>
              </div>
            </section>

            {/* hero image */}
            <section className="md:block hidden lg:w-[32rem] md:w-[30rem]">
              <img
                src={theme === "light" ? lightThemeHeroImg : darkThemeHeroImg}
                alt=""
                className="w-[100%]"
              />
            </section>
          </article>
          <article className="flex items-end justify-between md:mt-0 mt-[8rem]">
            <section >
              <div className="flex items-center gap-2">
                <p className="text text-grey-100 md:text-[1.3rem]">
                  Follow us on{" "}
                </p>
                <p className="text h-[1.5px] w-6 bg-grey-100"></p>
              </div>
              <div className="flex md:gap-6 gap-4 mt-3">
                <a
                  href=""
                  className="iconBg lg:h-14 h-10 lg:w-14 w-10 hover:no-underline text-center flex items-center justify-center rounded-full"
                >
                  <i class="fab fa-facebook-f lg:text-3xl text-2xl "></i>
                </a>
                <a
                  href=""
                  className="iconBg  lg:h-14 h-10 lg:w-14 w-10 hover:no-underline text-center flex items-center justify-center rounded-full"
                >
                  <i class="fab fa-instagram  lg:text-3xl text-2xl"></i>
                </a>
                <a
                  href=""
                  className="iconBg  lg:h-14 h-10 lg:w-14 w-10 text-center hover:no-underline flex items-center justify-center rounded-full"
                >
                  <i class="fab fa-twitter lg:text-3xl text-2xl"></i>
                </a>
              </div>
            </section>
            <div className="theme-div md:pr-10">
              {" "}
              <button
                onClick={toggleTheme}
                className=" transition-all"
                style={{ transition: "0.6s" }}
              >
                {theme === "light" ? (
                 <div className=" bg-black h-[40px] w-[40px] md:h-[50px] md:w-[50px] flex items-center justify-center rounded-full">
                     <i className="fas fa-moon text-white  rounded-full lg:text-3xl text-xl"></i>
                 </div>
                ) : (
                  <div className="bg-white h-[40px] w-[40px] md:h-[50px] md:w-[50px] rounded-full flex items-center justify-center">
                    <i class="fas fa-sun text-black  rounded-full md:text-3xl text-xl"></i>
                  </div>
                )}
              </button>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default SectionOne;
