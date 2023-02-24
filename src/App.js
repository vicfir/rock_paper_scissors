import { useState } from 'react';
import './App.css';
import { Choice } from "./components/choice";
import { Score } from "./components/score";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className="App">
        <Score score={score}/>
        <Choice/>
    </div>
  );
}

export default App;
