import React from "react";
import NavBar from "../components/Navbar/Navbar";
import image from "../images/Hero.png";
import facebook from "../images/Facebook.png";
import twitter from "../images/Twitter.png";
import instagram from "../images/Instagram.png";

const SectionOne = () => {
  return (
    <>
      <main>
        <NavBar />
        <div className="mt-[20px] lg:pl-[7rem] lg:px-0 md:px-0 sm:px-12 md:pl-[2.5rem] px-6">
          <article className="flex items-center lg:mb-[3rem] md:mb-[7rem] sm:mb-[6rem] mb-[3rem] transition-all">
            <section className="flex-1 ">
              <h1 className="text-darkblue-100 font-bold lg:text-[3.2rem] md:text-[2.5rem] sm:text-[2.8rem] text-[1.8rem] lg:mb-5 md:mb-3 sm:mb-4 mb-3 select-none">
                Sell Your Cryptocurrency Fast and With Ease
              </h1>
              <p className="lg:text-[1.3rem] md:text-[1rem] sm:text-[1.3rem] text-[1rem] text-grey-100 md:w-[90%] lg:mb-9 md:mb-3 sm:mb-4 mb-7">
                Trading has never been this seamless. Use TheZ Finance platform
                to sell your Bitcoin, Ethereum and Tether and get your payment
                within minutes.
              </p>
              <div className=" w-fit h-fit">
                <a
                  href="https://forms.gle/vkcUiyyeVZc3awmm7"
                  target="_blank"
                  rel="noreferrer"
                  className="self-center bg-darkblue-100 mb-4 hover:no-underline   text-white text-base mt-6  rounded-sm px-4 py-2 text-bold transition-all"
                >
                  Join Waitlist
                </a>
              </div>
              <section className="md:mt-[8rem] mt-[6rem]">
                <div className="flex items-center gap-2">
                  <p className="text-grey-100 md:text-[1.3rem]">
                    Follow us on{" "}
                  </p>
                  <p className="h-[1.5px] w-6 bg-grey-100"></p>
                </div>
                <div className="flex md:gap-6 gap-4 mt-3">
                  <a
                    href=""
                    className="bg-gray-200 lg:h-14 h-10 lg:w-14 w-10 hover:no-underline text-center flex items-center justify-center rounded-full"
                  >
                    <i class="fab fa-facebook-f text-gray-400 lg:text-3xl text-2xl "></i>
                  </a>
                  <a
                    href=""
                    className="bg-gray-200 lg:h-14 h-10 lg:w-14 w-10 hover:no-underline text-center flex items-center justify-center rounded-full"
                  >
                    <i class="fab fa-instagram text-gray-400 lg:text-3xl text-2xl"></i>
                  </a>
                  <a
                    href=""
                    className="bg-gray-200 lg:h-14 h-10 lg:w-14 w-10 text-center hover:no-underline flex items-center justify-center rounded-full"
                  >
                    <i class="fab fa-twitter text-gray-400 lg:text-3xl text-2xl"></i>
                  </a>
                </div>
              </section>
            </section>

            {/* hero image */}
            <section className="md:block hidden lg:w-[32rem] md:w-[30rem]">
              <img src={image} alt="" className="w-[100%]" />
            </section>
          </article>
        </div>
      </main>
    </>
  );
};

export default SectionOne;