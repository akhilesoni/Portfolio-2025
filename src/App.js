import Draggable from 'react-draggable';
import './App.css';
import Taskbar from './component/Taskbar';
import { useRef } from 'react';

function App() {

  const nodeRef = useRef(null);

  return (
    <div className="App">
      <div className="window">
        <Draggable nodeRef={nodeRef} cancel=".no-drag" bounds="parent">
          <div
            ref={nodeRef} // ✅ Moved ref to the outermost draggable div
            style={{
              position: "absolute", // ✅ Allows free movement inside parent
              width: 500,
              height: 300,
              backgroundColor: "gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "grab",
              borderRadius: 5,
            }}
          >
          
            <iframe height={500} width={300} src="https://clientviews.netlify.app/" title="Browser" referrerpolicy="no-referrer" sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"></iframe> 
          </div>
          
        </Draggable>
        <Taskbar/>
      </div>
    </div>
  );
}

export default App;
