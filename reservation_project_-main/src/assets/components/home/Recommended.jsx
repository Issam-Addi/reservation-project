import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hotel1 from "../../images/hotelBg.jpeg";
import hotel2 from "../../images/hotel2.webp";
import hotel3 from "../../images/hotel3.jpeg";

const Recommended = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex justify-center">
          <h1 className="font-sans text-4xl font-bold">Homes guests love</h1>
        </div>
        <div class="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24">
          <div
            data-aos="fade-up-right"
            class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 m-5 inline-block"
          >
            <div class="max-w-2xl mx-auto">
              <div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 ">
                <a href="#">
                  <img class="rounded-t-lg" src={hotel1} alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    class="text-black bg-blue hover:bg-blue focus:ring-4 focus:ring-blue font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Book now
                    <svg
                      class="-mr-1 ml-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            class="bg-white shadow-md  rounded-lg max-w-sm dark:bg-gray-800 m-5 inline-block"
          >
            <div class="max-w-2xl mx-auto">
              <div class="bg-white shadow-md  rounded-lg max-w-sm dark:bg-gray-800 ">
                <a href="#">
                  <img class="rounded-t-lg" src={hotel2} alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    class="text-black bg-blue hover:bg-blue focus:ring-4 focus:ring-blue font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Book now
                    <svg
                      class="-mr-1 ml-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up-left"
            class="bg-white shadow-md  rounded-lg max-w-sm dark:bg-gray-800 m-5 inline-block"
          >
            <div class="max-w-2xl mx-auto">
              <div class="bg-white shadow-md  rounded-lg max-w-sm dark:bg-gray-800 ">
                <a href="#">
                  <img class="rounded-t-lg" src={hotel3} alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    class="text-black bg-blue hover:bg-blue focus:ring-4 focus:ring-blue font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Book now
                    <svg
                      class="-mr-1 ml-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommended;
