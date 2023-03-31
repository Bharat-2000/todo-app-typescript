import React from 'react';
import './App.css';
import InputFeild from './components/InputFeild';

let name: string;
name = 'bharat';

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Todo - Task</span>
      <InputFeild />
    </div>
  );
}

export default App;
