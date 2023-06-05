import React, { useState } from "react";
import hotelImg from "../images/hotel-placeholder.png";
import paymentImg from "../images/hotel4.webp";
import axios from "axios";
import Swal from "sweetalert2";

const Payment = () => {
  const [card_name, setCardName] = useState("");
  const [card_number, setCardNumber] = useState("");
  const [expiration_date, setExpirationDate] = useState("");
  const [security_code, setSecurityCode] = useState("");

  const handleNameChange = (e) => {
    setCardName(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpirationDateChange = (e) => {
    setExpirationDate(e.target.value);
  };
  const handleSecurityCodeChange = (e) => {
    setSecurityCode(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(card_name, card_number, expiration_date, security_code);

    axios
      .post("http://localhost:5500/payment", {
        card_name: card_name,
        card_number: card_number,
        expiration_date: expiration_date,
        security_code: security_code,
      })
      .then(function (response) {})
      .catch(function (error) {});
    console.log(card_name, card_number, expiration_date, security_code);

    Swal.fire({
      title: "Booking Confirmation",
      text: "Payment submitted and room booked successfully!",
      icon: "success",
      confirmButtonText: "OK",
    });
  }

  return (
    <>
      <div class="min-h-screen p-6 bg-gray-100 flex mt-5">
        <div class="container max-w-screen-lg mx-auto w-full mt-5 ">
          <div>
            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 mt-5">
              <div class="grid gap-40 gap-y-2 text-sm lg:grid-cols-2">
                <form onSubmit={handleSubmit}>
                  <div class="min-w-screen min-h-screen  flex items-center justify-center px-5 pb-10 pt-16">
                    <div
                      class="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
                      style={{ maxWidth: "600px" }}
                    >
                      <div class="w-full pt-1 pb-5">
                        <div class="bg-[#5aa1c2] text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                          <i class="mdi mdi-credit-card-outline text-3xl"></i>
                        </div>
                      </div>
                      <div class="mb-10">
                        <h1 class="text-center font-bold text-xl uppercase">
                          Secure payment info
                        </h1>
                      </div>

                      <div class="mb-3">
                        <label class="font-bold text-sm mb-2 ml-1">
                          Name on card
                        </label>
                        <div>
                          <input
                            class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#5aa1c2] transition-colors"
                            placeholder="John Smith"
                            type="text"
                            value={card_name}
                            onChange={handleNameChange}
                          />
                        </div>
                      </div>
                      <div class="mb-3">
                        <label class="font-bold text-sm mb-2 ml-1">
                          Card number
                        </label>
                        <div>
                          <input
                            class="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#5aa1c2] transition-colors"
                            placeholder="0000 0000 0000 0000"
                            type="text"
                            value={card_number}
                            onChange={handleCardNumberChange}
                          />
                        </div>
                      </div>
                      <div class="mb-3 -mx-2 flex items-end">
                        <div class="px-2 w-1/2">
                          <label class="font-bold text-sm mb-2 ml-1">
                            Expiration date
                          </label>
                          <div>
                            <select
                              value={expiration_date}
                              onChange={handleExpirationDateChange}
                              class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#5aa1c2] transition-colors cursor-pointer"
                            >
                              <option value="01">01 - January</option>
                              <option value="02">02 - February</option>
                              <option value="03">03 - March</option>
                              <option value="04">04 - April</option>
                              <option value="05">05 - May</option>
                              <option value="06">06 - June</option>
                              <option value="07">07 - July</option>
                              <option value="08">08 - August</option>
                              <option value="09">09 - September</option>
                              <option value="10">10 - October</option>
                              <option value="11">11 - November</option>
                              <option value="12">12 - December</option>
                            </select>
                          </div>
                        </div>
                        <div class="px-2 w-1/2">
                          <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#5aa1c2] transition-colors cursor-pointer">
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                          </select>
                        </div>
                      </div>
                      <div class="mb-10">
                        <label class="font-bold text-sm mb-2 ml-1">
                          Security code
                        </label>
                        <div>
                          <input
                            class="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-[#5aa1c2] transition-colors"
                            placeholder="000"
                            type="text"
                            value={security_code}
                            onChange={handleSecurityCodeChange}
                          />
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          class="block w-full max-w-xs mx-auto bg-[#5aa1c2] hover:bg-[#5191af] focus:bg-[#5092b1] text-white rounded-lg px-3 py-3 font-semibold"
                        >
                          PAY NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                <div
                  class="grid gap-40 gap-y-2 text-sm  rounded shadow-xl text-white"
                  style={{
                    backgroundImage: `url(${paymentImg})`,
                    backgroundPosition: "50%",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className=" bg-opacity-80 bg-black p-5">
                    <div class="md:col-span-5 p-5">
                      <h1>Order Summary</h1>
                    </div>

                    <div class="md:col-span-3 w-full">
                      <img src={hotelImg} alt="hotel placeholder image"></img>
                    </div>

                    <div class="md:col-span-5">
                      <table className="border-separate border-transparent p-4">
                        <tr>
                          <td>room type : </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>No. of nights: </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Guests : </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Dates :</td>
                          <td></td>
                        </tr>
                      </table>
                    </div>

                    <div class="md:col-span-3 p-3 ">
                      <hr />
                    </div>

                    <div class="md:col-span-5">
                      <table className="border-separate border-transparent p-4">
                        <tr>
                          <td>Subtotal : </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td>Tax: </td>
                          <td></td>
                        </tr>
                      </table>
                    </div>
                    <div class="md:col-span-3 p-3">
                      <hr />
                    </div>

                    <div class="md:col-span-5 text-right">
                      <table className="border-separate border-transparent p-4">
                        <tr>
                          <td>Total : </td>
                          <td></td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;