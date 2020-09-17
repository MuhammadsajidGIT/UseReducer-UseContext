import React, {useState} from 'react';
import Parent from './parent';

import './App.css';
import Countercontext from './CounterContext';

function App() {
  
    let countState = useState(1)

    return (
    <Countercontext.Provider value={countState}>
    <div>
    
      <Parent />
    </div>
    </Countercontext.Provider>

  );
}

export default App;
