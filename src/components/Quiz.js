import React, { useContext } from 'react';
import Question from './Question';
import { QuizContext } from '../context/QuizContext';
import StartQuiz from './StartQuiz';
import ScoreQuiz from './ScoreQuiz';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    correct: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
    correct: 'Mars',
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ['Mark Twain', 'Charles Dickens', 'William Shakespeare', 'Jane Austen'],
    correct: 'William Shakespeare',
  },
  {
    question: 'What is the smallest prime Number?',
    options: ['0', '1', '2', '3'],
    correct: '2',
  },
];

const Quiz = () => {
  const { currentQuestion, setCurrentQuestion, startQuiz } = useContext(QuizContext);

  // const nextQuestionhandle = () => {
  //   if (currentQuestion < questions.length - 1) {
  //     setCurrentQuestion(currentQuestion + 1);
  //   }
  // };

  const nextQuestionhandle = () => {
    // Move to the next question if it's not the last one
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // If it's the last question, do nothing to allow the ScoreQuiz component to render
      setCurrentQuestion(questions.length); // Just to ensure we don't loop the quiz
    }
  };

  // Check if the quiz has not started yet
  if (!startQuiz) {
    return <StartQuiz />;
  }

  // Check if all questions have been answered
  if (currentQuestion >= questions.length) {
    return <ScoreQuiz />;
  }

  return (
    <div>
      <Question data={questions[currentQuestion]} nextQuestion={nextQuestionhandle} />
    </div>
  );
};

export default Quiz;
