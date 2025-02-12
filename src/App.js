import Draggable from 'react-draggable';
import './App.css';
import Taskbar from './component/Taskbar';
import { useRef } from 'react';

function App() {


  return (
    <div className="App">
      <div className="window">
     
        <Taskbar/>
      </div>
    </div>
  );
}

export default App;
