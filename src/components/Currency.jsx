import axios from "axios";
import React, { useState } from "react";
import { FaMoneyBillTransfer } from "react-icons/fa6";
const Currency = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);
  const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
  const API_KEY = "fca_live_dNiKiYlcJPjDfqS5RH50rOPLAC9Aj3ORkDFwUlxU";

  const exchangeRate = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };

  return (
    <div className="flex items-center gap-4  flex-col bg-green-800 rounded-lg shadow-2xl shadow-gray-600 p-6 ">
      <h1 className="text-center text-white text-2xl italic font-bold">
        Döviz Kuru Uygulaması
      </h1>
      <div className="flex items-center justify-center gap-4 w-full h-full p-4 lg:flex-row flex-col ">
        <input
          type="number"
          value={amount}
          className="w-full text-xl rounded-lg outline-none border lg:hover:scale-105 transition duration-300 p-2 text-center font-bold"
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="rounded-lg shadow-sm p-2 outline-none lg:hover:scale-105 transition duration-300"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <div>
          <FaMoneyBillTransfer className="text-4xl font-bold text-center text-white" />
        </div>
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="rounded-lg shadow-sm p-2 outline-none lg:hover:scale-105 transition duration-300"
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <input
          type="number"
          className="w-full text-xl rounded-lg outline-none border lg:hover:scale-105 transition duration-300 p-2 text-center font-bold"
          value={result}
        />
      </div>
      <div className="flex items-center justify-center mb-4">
        <button
          onClick={exchangeRate}
          className="w-full p-4 rounded-lg bg-green-600 hover:bg-white transition duration-300 m-6"
        >
          Çevir
        </button>
      </div>
    </div>
  );
};

export default Currency;
