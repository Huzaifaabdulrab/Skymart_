import React from 'react'
import CountUp from "react-countup";

const Numbers = () => {
    const stats = [
        {
          title: "Retail stores opened all over the world",
          value: 120,
          suffix: "+",
        },
        {
          title: "Products sold till date through all platforms",
          value: 15,
          suffix: "M",
        },
        {
          title: "Registered users on all our platforms",
          value: 200,
          suffix: "K",
        },
        {
          title: "Brands linked & collaborated with our store",
          value: 350,
          suffix: "+",
        },
        {
          title: "Quick shipping platforms for fastest transfers",
          value: 60,
          suffix: "",
        },
      ];
  return (
    <div className="py-10 px-5 w-[90%] m-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">
          We Reached So Far
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl font-bold text-[#AD6237]">
              <CountUp
                start={0}
                end={stat.value}
                duration={2}
                separator=","
              />
              {stat.suffix}
            </div>
            <p className="mt-4 text-gray-600 text-lg">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Numbers
