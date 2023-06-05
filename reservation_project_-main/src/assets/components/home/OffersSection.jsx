import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import offerImg1 from "../../images/hotel60.jpeg";
import offerImg2 from "../../images/hotel8.jpeg";
import { Link } from "react-router-dom";

const OffersSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div class="special-offers py-16 my-24 bg-black bg-opacity-90">
      <h2 class="font-sans text-4xl font-bold text-center text-white mb-8">
        Special Offers
      </h2>
      <div
        data-aos="fade-right"
        class="flex items-center justify-center max-w-5xl mx-auto"
      >
        <div class="w-1/4">
          <img src={offerImg1} alt="Hotel 1" class="rounded-lg" />
        </div>
        <div class="w-1/2 px-8">
          <h3 class="text-xl font-bold mb-4 text-white">
            Luxury Resort Package
          </h3>
          <p class="text-white mb-4">
            Experience the ultimate luxury at our beachfront resort. Enjoy
            stunning views, world-class amenities, and personalized service.
          </p>
          <a
            href="#"
            className="inline-block px-7 py-3 border-2 border-[#5aa1c2] text-white font-medium text-sm leading-snug uppercase  rounded-lg hover:bg-[#5aa1c2] focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Book Now
          </a>
        </div>
      </div>
      <div
        data-aos="fade-left"
        class="flex items-center justify-center max-w-5xl mx-auto mt-10"
      >
        <div class="w-1/2 px-8">
          <h3 class="text-xl font-bold mb-4 text-white">City Getaway Deal</h3>
          <p class="text-white mb-4">
            Discover the vibrant city life with our exclusive city getaway deal.
            Stay at our centrally located hotel and explore popular attractions.
          </p>
          <a
            href="#"
            className="inline-block px-7 py-3 border-2 border-[#5aa1c2]  text-white font-medium text-sm leading-snug uppercase  rounded-lg hover:bg-[#5aa1c2] focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            Book Now
          </a>
        </div>
        <div class="w-1/4">
          <img src={offerImg2} alt="Hotel 2" class="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default OffersSection;
