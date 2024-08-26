import React from 'react'
import { createContext,useState } from 'react'

export const QuizContext=createContext()

function QuizProvider({children}) {
    const[startQuiz,setStartQuiz]=useState(false)
    const[score,setScore]=useState(0)
    const[currentQuestion,setCurrentQuestion]=useState(0)
   

    const resetQuiz=()=>{
        setStartQuiz(false)
        setScore(0)
        setCurrentQuestion(0)

    }

  return (
    <QuizContext.Provider value={{startQuiz,setStartQuiz,score,setScore,currentQuestion,setCurrentQuestion,resetQuiz}}>
        {children}
    </QuizContext.Provider>
  )
}

export default QuizProvider