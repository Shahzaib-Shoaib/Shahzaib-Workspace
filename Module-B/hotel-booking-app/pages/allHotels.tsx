import React from "react";
import { useState, useEffect } from "react";
import HotelList from "../components/HotelList";

function allHotels() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedHotels, setLoadedHotels] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://hotel-app-abf61-default-rtdb.firebaseio.com/hotels.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const hotels: any = [];

        for (const key in data) {
          const hotel = {
            id: key,
            ...data[key],
          };
          hotels.push(hotel);
        }
        console.log(data);

        setIsLoading(false);
        setLoadedHotels(hotels);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
      <div className="bg-white ">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Hotels</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
            <HotelList hotels={loadedHotels} />
          </div>
        </div>
      </div>
  );
}

export default allHotels;
