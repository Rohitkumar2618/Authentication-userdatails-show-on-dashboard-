import React from "react";
import { useSelector } from "react-redux";
import JourneySteps from "./JourneySteps";

const Dashboard = () => {
  const user = useSelector((state) => state.user.user); // Select the user data from Redux state

  return (
    <>
      <div className="w-full min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center">
            <div className="bg-white border-2 border-teal-300 p-6 rounded-lg shadow-lg w-full max-w-2xl">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-teal-600">
                Hey {user?.name}!
              </h1>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                Your portfolio of today:
              </p>
              <div className="flex items-center mb-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mr-2 text-gray-800">
                  ₹ 0
                </h2>
                {/* <span className="px-2 py-1 rounded-md bg-green-500 text-xs md:text-sm text-white">
                  +13%
                </span> */}
              </div>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                People are getting 10% profits! What are you waiting for?
                <br />
                <span className="block mt-3 text-xl md:text-2xl lg:text-3xl text-gray-800 font-bold">
                  Invest Now!
                </span>
              </p>
              <div className="border-t-2 border-teal-300 pt-4">
                <p className="text-sm md:text-base text-gray-700 font-semibold mb-2">
                  Overall investment:
                </p>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
                  ₹ 0
                </h1>
              </div>
            </div>
            <div className="mt-8 w-full max-w-2xl">
              <JourneySteps />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
