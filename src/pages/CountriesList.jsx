import React from "react";
  // import { useEffect } from "react";
  // import { useState } from "react";
import { NavLink } from "react-router-dom";

const CountriesList = ({ data }) => {
  return (
    <div>
      <ul className="z-0 mt-16 w-[95%] mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  grid-cols-1 place-items-center h-screen">
        {data &&
          data.data.map((data) => {
            return (
              <li
                key={data._id}
                className="cursor-pointer w-[260px] mb-20 h-[336px] bg-[#ffffff] dark:bg-[#2B3844] dark:text-white rounded-lg shadow-md"
              >
                <NavLink to={`/country/${data.name.slug}`}>
                  <img
                    className="w-[270px] h-[160px] rounded-lg object-cover  shadow-2xl"
                    src={data.flags.png}
                    alt=""
                  />
                  <div className="p-4">
                    <h1 className=" ml-auto text-[18px] font-bold my-4   ">
                      {data.name.common}
                    </h1>
                    <h2 className="ml-auto">{`Population: ${data.population}`}</h2>
                    <h2 className="ml-auto">{`Region: ${data.region}`}</h2>
                    <h2 className="ml-auto">{`Capital: ${data.capital}`}</h2>
                  </div>
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CountriesList;
