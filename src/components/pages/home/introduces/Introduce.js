import React, { useState, useEffect } from "react";
import "./introduce.css";

const Introduce = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch( 'http://localhost:8000/api/admin/client/get',
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const serviceData = await response.json();
        //console.log(serviceData);
        const { data } = serviceData;
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-20 mb-[100px]">
      <p className="md:mt-5 font-bold my-10 text-navyblue text-center text-3xl">
              ABOUT MOSTAFIJUR RAHAMAN
            </p>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex justify-center flex-wrap md:flex-wrap md:px-0"
        >
          <div className="lg:w-[600px] flex justify-center items-center h-screen">
            <div className="">
              <img
                src={`http://localhost:8000/` + item.imageUrl}
                alt="Owner Of this firm"
                className="rounded-full w-23 h-23 object-cover bg-gray-200"
              />

              <p className="mt-10 font-semibold text-navyblue text-2xl text-center">
                {item.username}
              </p>
              <h3 className="mt-4 text-center text-xl">FOUNDER & CEO</h3>
              <p className="mt-4 text-center text-xl">{item.instituteName}</p>
            </div>
          </div>

          <div className="md:mt-5">
            <p className="hcolor text-justify mt-2">{item.about}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Introduce;
