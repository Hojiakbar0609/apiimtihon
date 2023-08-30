import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { UseFetch } from "../hooks/UseFetch";

const SingleCountry = () => {
  const { slug } = useParams();
  const url = "https://countries-api-v7sn.onrender.com/countries/slug/" + slug;
  const { data, pending } = UseFetch(url);
  console.log(data);
  return (
    <div className="mt-7 w-[90%] mx-auto dark:bg-[#2B3844] dark:text-white p-7 rounded">
      <NavLink className='bg-white py-2 px-6 rounded-md shadow-xl dark:bg-[#2B3844] dark:text-white' to={"/"}>
          Back
      </NavLink>
  

      {data && (
        <div className="flex justify-evenly items-center"> 
          <div>
            <img  className="" src={data.flags.png} alt="" />
          </div>

            
          <div className="flex">
            <div>
              <h1 className="text-[32px] font-extrabold">{data.name.common}</h1>
            <div className="flex gap-24 mb-16">
              <div className="">
              
                <p><span className="font-bold">Native name: </span> {`${data.name.nativeName}`}</p>
                <p><span className="font-bold">Population: </span>{ `${data.population}`}</p>
                
                <p><span className="font-bold">Region: </span>{ `${data.region}`}</p>
                
                <p><span className="font-bold">Sub Region: </span>{ `${data.subregion}`}</p>
                
                <p><span className="font-bold">Capital: </span>{ `${data.capital}`}</p>
              </div>
            <div className=""> 
              <p><span className="font-bold">Currencies: </span>{ `${data.currencies}`}</p>
              <p><span className="font-bold">Languages: </span>{ `${data.languages}`}</p>
            </div>
            </div>
              
            <div className="flex">
            
              {/* borders  */}
              <p className="">Border countries: </p>
              {data.borders.map((item) => {
                return (
                  <div className="">
                    <NavLink className='bg-[#202C36]' to={`/country/${item.slug}`}>
                      <p className="bg-white rounded flex ml-5 gap-5 py-[5px] px-7 shadow-xl font-[14px] dark:bg-[#2B3844] dark:text-white">{item.slug}</p>
                      
                    </NavLink>
                        
                  </div>
                )
              })}
           </div>
          </div>
        </div>
        </div>
      )}
    </div>  
  );
};

export default SingleCountry;
