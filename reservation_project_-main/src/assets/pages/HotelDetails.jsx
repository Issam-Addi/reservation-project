import React from "react";
import{useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaBed, FaHome } from "react-icons/fa"
import { BiMoney } from "react-icons/bi"
import { BsPeopleFill } from "react-icons/bs"

import axios from "axios"
function HotelDetails() {
  const [roomList, setRoom] = useState([])
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5500/rooms/${id}`)
      .then((response) => {
        setRoom(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);
  return (
    <div >


      <h1 className="text-7xl font-bold font-serif md:text-6xl xl:text-7xl tracking-tight mt-28 ml-56 text-[#89a7b5]">
        Book your Room right now <br />
      </h1>
      <div class="min-h-screen  flex justify-center items-center py-20">
        <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-2 gap-24 space-y-4 mt-16 md:space-y-0">
          {
            roomList.map((room) => (
              <>

                <div class="max-w-4xl bg-white px-6 pt-6 pb-2 rounded-xl shadow-xl shadow-blue-200 transform hover:scale-105 transition duration-500">
                  <h1 class="mb-3 text-xl font-bold text-[#89a7b5] uppercase">{room.room_type}</h1>
                  <div class="relative w-full rounded-xl">
                    <div class="w-full rounded-xl">
                      {/* <Carousel/> */}
                      <img class="w-full rounded-xl" src="https://i.pinimg.com/564x/c0/66/b7/c066b7db0be21f8684874c592ebbadd0.jpg" alt="Colors" />
                    </div>
                    <p class="absolute top-0 bg-yellow-200 text-gray-800 font-semibold py-4 px-3 rounded-br-lg rounded-tl-lg">{room.price} JOD per night</p>
                  </div>
                  <div class="my-4">
                    <div class="flex space-x-1 items-center">
                      {/* <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span> */}
                      <BiMoney class="h-6 w-6 text-[#89a7b5] mb-1.5" />
                      <p>{room.price} jod per night</p>
                    </div>
                    <div class="flex space-x-1 items-center">
                      <span>
                        <FaBed class="h-6 w-6 text-[#89a7b5] mb-1.5" />
                        {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg> */}
                      </span>
                      <p>Number of beds: {room.number_of_beds} beds</p>
                    </div>
                    <div class="flex space-x-1 items-center">
                      <span>
                        <BsPeopleFill class="h-6 w-6 text-[#89a7b5] mb-1.5" />
                      </span>
                      <p>Max_Guest: {room.number_of_guests}</p>
                    </div>
                    <div class="flex space-x-1 items-center">
                      <span>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg> */}
                        <FaHome class="h-6 w-6 text-[#89a7b5] mb-1.5" />
                      </span>
                      <p>Floor Area: {room.floor_area}m<sup>2</sup> </p>
                    </div>
                    <h5 class="mt-4 text-gray-800 text-lg font-bold cursor-pointer">Feauture: {room.descriptions}</h5>
                    <button class="mt-4 text-xl w-full text-white bg-[#89a7b5] py-2 rounded-xl shadow-lg">Book Now</button>
                  </div>
                </div>
              </>
            ))

          }

        </div>
      </div>
    </div>
  );
}

export default HotelDetails;