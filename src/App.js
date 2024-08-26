
import './App.css';

import Quiz from './components/Quiz';

import QuizProvider from './context/QuizContext';


function App() {
  return (
    <QuizProvider className="App">
     
      <Quiz/>

    </QuizProvider>
  );
}

export default App;
