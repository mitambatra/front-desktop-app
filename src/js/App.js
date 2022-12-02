import React from 'react';
import { useState } from 'react';
import './index.css';
const App = () => {
    const [state, setState] = useState('');

    return (
        <div>
            <input onChange={(e) => setState(e.target.value)}/>
            <h1>{state}</h1>
        </div>
    );
}

export default App;
