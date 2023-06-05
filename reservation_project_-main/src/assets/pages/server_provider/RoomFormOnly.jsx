import axios from "axios";
import React, { useEffect, useState, useReducer } from "react";

const RoomFormOnly = () => {
  const [roomType, setRoomType] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  // const [roomImage, setRoomImage] = useState("");
  const [price, setPrice] = useState("");
  const [roomData, setRoomData] = useState([]);
  const [reducer, forceUpdate] = useReducer((x) => x + 1, 0);
  ///////////////////////////////////////////////////////////////////////////////////////
  let [base64code, setbase64code] = useState();
  // const onChange = e => {
  //   const files = e.target.files;
  //   const file = files[0];
  //   getBase64(file);
  //   console.log(base64code);
  // };
  // const onLoad = fileString => {

  //   setbase64code(fileString);
  // };
  // const getBase64 = file => {
  //   let reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     onLoad(reader.result);
  //   };
  // };
  const onChange = (event) => {
    const files = event.target.files;
    const reader = new FileReader();
  
    reader.onloadend = () => {
      const base64Strings = Array.from(files).map((file) => reader.result);
      // Send the base64Strings to the backend for storage
      setbase64code(base64Strings);
    };
  
    Array.from(files).forEach((file) => reader.readAsDataURL(file));
  };
  ///////////////////////////////////////////////////////////////////////////////////////
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleRoomTypeChange = (e) => {
    setRoomType(e.target.value);
  };
  const handleRoomNumberChange = (e) => {
    setRoomNumber(e.target.value);
  };
  // const handleRoomImageChange = (e) => {
  //   setRoomImage(e.target.value);
  // };

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset()
    forceUpdate();
    axios
      .post("http://localhost:5500/rooms", {
        roomType: roomType,
        roomNumber: roomNumber,
        roomImage: base64code,
        price: price,
      })
      .then(function (response) { })
      .catch(function (error) { });
  }

  useEffect(() => {
    axios.get("http://localhost:5500/rooms").then((res) => {
      setRoomData(res.data);
      console.log(roomData);
    });
  }, [reducer]);

  const deleteRoom = async (id) => {
    try {
      await axios.delete(`http://localhost:5500/rooms/${id}`);
      console.log("Room deleted successfully");
      setRoomData(roomData.filter((room) => room.room_id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  const editRoom = async (id) => {
    try {
      axios.put(`http://localhost:5500/rooms/${roomData.id}`, {
        roomType: editedRoomType,
        roomNumber: editedRoomNumber,
        roomImage: base64code,
        price: editedPrice,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md border-2  shadow-md  mt-20">
        <h2 class="text-lg font-bold text-black capitalize dark:text-black">
          Room details
        </h2>

        <htmlForm onSubmit={(e) => handleSubmit(e)}>
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-black dark:text-gray-200" htmlFor="roomType">
                Room type
              </label>
              <select
                name="roomType"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
                value={roomType}
                onChange={handleRoomTypeChange}
              >
                <option value="single">Single</option>
                <option value="double">Double</option>
              </select>
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
                type="number"
                id="price"
                value={price}
                onChange={handlePriceChange}
                step="0.01"
                min="0"
              />
            </div>

            <div>
              <label
                class="text-black dark:text-gray-200"
                htmlFor="numberOfRooms"
              >
                Number of Room
              </label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
                type="number"
                id="numberOfRooms"
                min={1}
                value={roomNumber}
                onChange={handleRoomNumberChange}
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200" htmlFor="maxGuest">
                Max guest
              </label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
                type="number"
                id="maxGuest"
                min={1}
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200" htmlFor="Beds">
                Beds
              </label>
              <input
                id="Beds"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
                type="number"
                min={1}
              />
            </div>
            <div className="mt-3">
              <label class="text-black dark:text-gray-200" htmlFor="floorArea">
                floor area
              </label>
              <input
                id="floorArea"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
                type="number"
                min={1}
              />
            </div>

            <div>
              <label
                class="text-black dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Description
              </label>
              <textarea
                id="textarea"
                type="textarea"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
              ></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-black">Image</label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-black"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span class="">Upload a file</span>
                      {base64code && (
                        base64code.map((ele)=>{
                          <img
                          src={`data:image;base64${ele}`}
                          width={"100px"}
                        />
                        })
                       
                      )}
                      <input
                        onChange={onChange}
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                        accept="image/*"
                        multiple
                      />
                    </label>
                    {/* <p class="pl-1 text-black">or drag and drop</p> */}
                  </div>
                  <p class="text-xs text-black">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              class="px-6 py-2 leading-5 text-black transition-colors duration-200 transhtmlForm bg-[#5c97b3] rounded-md hover:bg-[#5188a1] focus:outline-none focus:bg-gray-600"
            >
              Add
            </button>
          </div>
        </htmlForm>
      </section>
      <div className="card-container max-w-4xl p-6 mx-auto mt-20">
        {roomData.map((room) => (
          <div
            className="card bg-white p-4 rounded-md border-2 my-2"
            key={room.room_id}
          >
            <h2 className="text-xl font-bold mb-2">
              Room Type: {room.room_type}
            </h2>
            <p className="text-gray-700 mb-2">
              Number of Room: {room.number_of_room}
            </p>

            <p className="text-gray-700">Price: {room.price}</p>
            <img
              src={room.room_img}
              alt="Room"
              className="w-full mb-4 rounded-lg"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => deleteRoom(room.room_id)}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md mr-2"
              >
                Delete
              </button>
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RoomFormOnly;
