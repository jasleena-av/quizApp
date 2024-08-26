// import React, { useContext, useEffect, useState } from 'react'
// import { QuizContext } from '../context/QuizContext'

// const Question = ({data,nextQuestion}) => {
//     const{score,setScore,currentQuestion,setCurrentQuestion,resetQuiz} =useContext(QuizContext)
//     const[selectOption,setSelectOption]=useState()
//     const[timer,setTimer]=useState(15)
//     const[result,setResult]=useState(false)

    


//     useEffect(()=>{
//         const timeLeft=setInterval(()=>{
//             setTimer((prevtime)=>prevtime-1)
//         },1000)
//         if(timeLeft===0){
//             clearInterval(timer)
//             setResult(true)
//         }
//         if(selectOption===data.correct){
//             setScore(score+5)
//         }
//         return ()=>clearInterval(timeLeft)
        

        
//     },[timer,selectOption, score, data.correct,nextQuestion, setScore])

//     const handleoption=(option)=>{
//         setSelectOption(option)
//         if(option===data.correct){
//             setResult(true)
           
//         }
//         setTimeout(()=>{
//           nextQuestion()
//           resetQuiz()
//         },3000)

//     }
    
//     const handlenext=()=>{
//         clearInterval(timer)
//         setCurrentQuestion(currentQuestion+1)
//         setTimer(15)

//     }


//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500 p-4">
//   <div className="w-full max-w-md p-2">
//     <div className="flex flex-col justify-center items-center rounded-md border border-gray-300 px-6 py-6 bg-white shadow-md">
//       <header className="flex items-center w-full mb-4 justify-between">
//         <div className='w-20 border rounded-md px-2 text-white bg-gradient-to-r from-sky-500 to-indigo-500'>score: {score}</div>
//         <div className='text-3xl font-sans font-bold'>Quiz App</div>
//         {/* <span className='text-xl font-sans font-semibold'>Time left:</span> */}
//         {/* timer */}
//         <div className="w-10  rounded-md flex bg-black justify-center text-xl text-rose-900 items-center">{timer}</div>
//       </header>

//       <section className="text-center font-medium mb-2 w-full">
//         <div className='question-container mb-4'>
//           <div className='question-title mb-4 text-lg font-semibold'>
//             {data.question}
//           </div>
//           <div className='options grid grid-cols-2 gap-4 '>
//             {
//                 data.options.map((option,index)=>(
                
//                   <button
//                   onClick={() => handleoption(option)}
//                   className={`border-2 w-full rounded-md hover:bg-sky-300 ${
//                     result && option === selectOption
//                       ? selectOption === data.correct
//                         ? 'bg-green-500 text-white'
//                         : 'bg-red-500 text-white'
//                       : ''
//                   }`}
//                   key={index}
//                   disabled={result} // Disable buttons after selecting an option
//                 >
//                   {option}
//                 </button>
                  
                  
//                 ))

//             }

          
//             {/*  */}
//           </div>
//         </div>

//         <button onClick={handlenext} className="px-5 py-2 mt-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold rounded-md hover:bg-gray-600">
//           Next
//         </button>
        
//       </section>
//       <span className='font-sans 
//        text-gray-500 text-xs -mb-3'>{currentQuestion+1} of 4 question</span>

//     </div>
//   </div>
// </div>

//   )
// }

// export default Question

// import React, { useContext, useEffect, useState } from 'react';
// import { QuizContext } from '../context/QuizContext';

// const Question = ({ data, nextQuestion }) => {
//   const { score, setScore, currentQuestion, setCurrentQuestion } = useContext(QuizContext);
//   const [selectOption, setSelectOption] = useState(null);
//   const [timer, setTimer] = useState(15);
//   const [result, setResult] = useState(false);

//   useEffect(() => {
//     const timeLeft = setInterval(() => {
//       setTimer((prevTime) => {
//         if (prevTime <= 1) {
//           clearInterval(timeLeft);
//           setResult(true);
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timeLeft);
//   }, []);

//   useEffect(() => {
//     if (result && selectOption === data.correct) {
//       setScore(score+1);
//     }
//   }, [result, selectOption, data.correct, score, setScore]);

//   const handleOption = (option) => {
//     setSelectOption(option);
//     setResult(true);

//     setTimeout(() => {
//       nextQuestion();
//       setTimer(15);
//       setSelectOption(null);
//       setResult(false);
//     }, 3000);
//   };

//   const handleNext = () => {
//     nextQuestion();
//     setTimer(15);
//     setSelectOption(null);
//     setResult(false);
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500 p-4">
//       <div className="w-full max-w-md p-2">
//         <div className="flex flex-col justify-center items-center rounded-md border border-gray-300 px-6 py-6 bg-white shadow-md">
//           <header className="flex items-center w-full mb-4 justify-between">
//             <div className="w-20 border rounded-md px-2 text-white bg-gradient-to-r from-sky-500 to-indigo-500">
//               Score: {score}
//             </div>
//             <div className="text-3xl font-sans font-bold">Quiz App</div>
//             <div className="w-10 rounded-md flex bg-black justify-center text-xl text-white items-center">
//               {timer}
//             </div>
//           </header>

//           <section className="text-center font-medium mb-2 w-full">
//             <div className="question-container mb-4">
//               <div className="question-title mb-4 text-lg font-semibold">
//                 {data.question}
//               </div>
//               <div className="options grid grid-cols-2 gap-4">
//                 {data.options.map((option, index) => (
//                   <button
//                     onClick={() => handleOption(option)}
//                     className={`border-2 w-full rounded-md hover:bg-sky-300 ${
//                       result && option === selectOption
//                         ? selectOption === data.correct
//                           ? 'bg-green-500 text-white'
//                           : 'bg-red-500 text-white'
//                         : ''
//                     }`}
//                     key={index}
//                     disabled={result}
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <button
//               onClick={handleNext}
//               className="px-5 py-2 mt-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold rounded-md hover:bg-gray-600"
//             >
//               Next
//             </button>
//           </section>

//           <span className="font-sans text-gray-500 text-xs -mb-3">
//             {currentQuestion + 1} of 4 questions
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Question;

import React, { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../context/QuizContext';

const Question = ({ data, nextQuestion }) => {
  const { score, setScore, currentQuestion, setCurrentQuestion } = useContext(QuizContext);
  const [selectOption, setSelectOption] = useState(null);
  const [timer, setTimer] = useState(10);
  const [result, setResult] = useState(false);

  useEffect(() => {
    const timeLeft = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime <= 1
        ) {
          clearInterval(timeLeft);
          setResult(true);
         
           // Move to the next question after the timer reaches 0
           setTimeout(() => {
            nextQuestion();
            setTimer(10);
            setSelectOption(null);
            setResult(false);
          }, 3000);

          
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timeLeft);
  }, [currentQuestion, nextQuestion]);

  const handleOption = (option) => {
    setSelectOption(option);
    setResult(true);

    if (option === data.correct) {
      // Increment the score by 5 points
      setScore((prevScore) => prevScore + 5);
    }

    setTimeout(() => {
      nextQuestion();
      setTimer(10);
      setSelectOption(null);
      setResult(false);
    }, 3000);
  };

  const handleNext = () => {
    nextQuestion();
    setTimer(10);
    setSelectOption(null);
    setResult(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500 p-4">
      <div className="w-full max-w-md p-2">
        <div className="flex flex-col justify-center items-center rounded-md border border-gray-300 px-6 py-6 bg-white shadow-md">
          <header className="flex items-center w-full mb-4 justify-between">
            <div className="w-20 border rounded-md px-2 text-white bg-gradient-to-r from-sky-500 to-indigo-500">
              Score: {score}
            </div>
            <div className="text-3xl font-sans font-bold">Quiz App</div>
            <div className="w-10 rounded-md flex bg-black justify-center text-xl text-white items-center">
              {timer}
            </div>
          </header>

          <section className="text-center font-medium mb-2 w-full">
            <div className="question-container mb-4">
              <div className="question-title mb-4 text-lg font-semibold">
                {data.question}
              </div>
              <div className="options grid grid-cols-2 gap-4">
                {data.options.map((option, index) => (
                  <button
                    onClick={() => handleOption(option)}
                    className={`border-2 w-full rounded-md  ${
                      result && option === selectOption
                        ? selectOption === data.correct
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : ''
                    }`}
                    key={index}
                    disabled={result}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="px-5 py-2 mt-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold rounded-md hover:bg-gray-600"
            >
              Next
            </button>
          </section>

          <span className="font-sans text-gray-500 text-xs -mb-3">
            {currentQuestion + 1} of 4 questions
          </span>
        </div>
      </div>
    </div>
  );
};

export default Question;

