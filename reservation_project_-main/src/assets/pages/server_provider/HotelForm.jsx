import React from "react";
import HotelFormOnly from "./HotelFormOnly";
import RoomFormOnly from "./RoomFormOnly";
const HotelForm = () => {
  return (
    <div>
      <HotelFormOnly />
      <RoomFormOnly />
      <div className="flex justify-center m-4">
        {" "}
        <button
          type="submit"
          class="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-[#5c97b3] rounded-md hover:bg-[#5188a1] focus:outline-none focus:bg-gray-600"
        >
          Add My Hotel
        </button>
      </div>
    </div>
  );
};

export default HotelForm;
