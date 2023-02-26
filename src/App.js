import { useState } from 'react';
import './App.scss';
import { Choice } from "./components/choice";
import { Score } from "./components/score";
import { Rules } from "./components/rules";
import { Result } from "./components/result";

function App() {
  const [score, setScore] = useState(0);

  // const [selected, setSelected] = useState(false);

  // const [choice, setChoice] = useState(true);

  const [selectedChoice, setSelectedChoice] = useState({
    selected: false,
    choice: ""
  });

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
        <Score score={score}/>
        {selectedChoice.selected ? <Result setSelectedChoice={setSelectedChoice} selectedChoice={selectedChoice} score={score} setScore={setScore}/> : <Choice setSelectedChoice={setSelectedChoice}/>}
        <button
          className='text-white border rounded-lg px-8 py-2 tracking-widest absolute bottom-10 right-10' 
          type="button"
          onClick={() => setShowModal(true)}
        >
          RULES
        </button>
        {showModal ? <Rules modal={setShowModal}/> : null}
        
    </div>
  );
}

export default App;
