import { useState } from 'react';
import './App.scss';
import { Choice } from "./components/choice";
import { Score } from "./components/score";
import { Rules } from "./components/rules";

function App() {
  const [score, setScore] = useState(0);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
        <Score score={score}/>
        <Choice/>
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
