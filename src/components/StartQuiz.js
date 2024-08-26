import React, { useContext } from "react";
import logo from '../assets/icons8-quizlet-50.png'
import { QuizContext } from "../context/QuizContext";


function StartQuiz() {
  const{setStartQuiz}=useContext(QuizContext)
  const handlequiz=()=>{
    setStartQuiz(true)
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="w-96 p-2">
        <div className="flex flex-col justify-center items-center rounded-md border border-gray-300 px-6 py-6 bg-white shadow-md">
            <img src={logo} alt="Quiz logo"  className="w-12 h-12 mb-4"  />
          <div className="text-3xl font-sans font-bold text-center mb-4">
            Start the Quiz
          </div>
          <div className="text-center mb-2 font-semibold">Good Luck!</div>
          <p className="text-center mb-4 font-semibold">Time Second: 10sec</p>
          <button onClick={handlequiz} className="px-5 py-2 mt-3 bg-black text-white font-semibold rounded-md hover:bg-gray-600">
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartQuiz;
