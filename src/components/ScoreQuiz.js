import React, { useContext } from 'react'
import logo from '../assets/icons8-party-popper-48.png'
import { QuizContext } from '../context/QuizContext'

const ScoreQuiz = () => {
  const{score,resetQuiz}=useContext(QuizContext)

  const handlePlayAgain = () => {
    resetQuiz()
    
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500">
    <div className="w-96 p-2">
      <div className="flex flex-col justify-center items-center rounded-md border border-gray-300 px-6 py-6 bg-white shadow-md">
      <img src={logo} alt="Quiz logo"  className="w-12 h-12 mb-4"  />
        <div className="text-3xl font-sans font-bold text-center mb-4">
         Final Score
        </div>
        <div className="text-center font-medium mb-2">Your score {score} out of 5</div>
        <p className="text-center mb-4"></p>
        <button onClick={handlePlayAgain} className="px-5 py-2 mt-3 bg-black text-white font-semibold rounded-md hover:bg-gray-600">
          Play Again
        </button>
      </div>
    </div>
  </div>
  )
}

export default ScoreQuiz