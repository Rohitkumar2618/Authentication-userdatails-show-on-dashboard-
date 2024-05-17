import React, { useState } from "react";
import { GoChecklist } from "react-icons/go";
import { FaRegFileAlt } from "react-icons/fa";
import { BsFileBarGraph } from "react-icons/bs";
const JourneySteps = () => {
  // State to track which steps are selected
  const [selectedSteps, setSelectedSteps] = useState([false, false, false]);

  // Function to handle click on step
  const handleStepClick = (index) => {
    const updatedSelectedSteps = [...selectedSteps];
    updatedSelectedSteps[index] = !updatedSelectedSteps[index];
    setSelectedSteps(updatedSelectedSteps);
  };

  return (
    <div className="border border-red-800 rounded-lg mt-3  p-6">
      <h2 className="text-lg font-semibold mb-4">
        Follow these steps and start your journey.
      </h2>

      <div
        className={`p-4 rounded-lg flex items-center justify-between mb-4 cursor-pointer`}
        onClick={() => handleStepClick(0)}
      >
        <div className="flex items-start">
          <div className="mr-2">
            <GoChecklist />
          </div>
          <div>
            <h3 className="text-md font-semibold">Add money to the account</h3>
            <p className="text-sm text-gray-600">
              Quick feedback for all of your questions from the community
            </p>
          </div>
        </div>
        <button
          className={`w-6 h-6 border-2 rounded flex justify-center items-center ${
            selectedSteps[0]
              ? "bg-green-500 border-green-500"
              : "bg-white border-gray-400"
          }`}
        >
          <svg
            className={`w-4 h-4 ${
              selectedSteps[0] ? "text-white" : "text-gray-400"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`p-4 rounded-lg flex items-center justify-between mb-4 cursor-pointer `}
        onClick={() => handleStepClick(1)}
      >
        <div className="flex items-start">
          <div className="w-6 h-6  mr-2">
            <FaRegFileAlt />
          </div>
          <div>
            <h3 className="text-md font-semibold">Choose your Basket</h3>
            <p className="text-sm text-gray-600">
              Updates thoughts, new lessons or anything you’d like to share
            </p>
          </div>
        </div>
        <button
          className={`w-6 h-6 border-2 rounded flex justify-center items-center ${
            selectedSteps[1]
              ? "bg-green-500 border-green-500"
              : "bg-white border-gray-400"
          }`}
        >
          <svg
            className={`w-4 h-4 ${
              selectedSteps[1] ? "text-white" : "text-gray-400"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`p-4 rounded-lg flex items-center justify-between cursor-pointer`}
        onClick={() => handleStepClick(2)}
      >
        <div className="flex items-start">
          <div className="w-6 h-6mr-2">
            <BsFileBarGraph />
          </div>
          <div>
            <h3 className="text-md font-semibold">See your wealth grow!</h3>
            <p className="text-sm text-gray-600">
              Public insights of movement in stock, crypto, alternative assets
              market
            </p>
          </div>
        </div>
        <button
          className={`w-6 h-6 border-2 rounded flex justify-center items-center ${
            selectedSteps[2]
              ? "bg-green-500 border-green-500"
              : "bg-white border-gray-400"
          }`}
        >
          <svg
            className={`w-4 h-4 ${
              selectedSteps[2] ? "text-white" : "text-gray-400"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default JourneySteps;
