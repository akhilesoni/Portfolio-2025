import './App.css';
import Taskbar from './component/Taskbar';

function App() {
  return (
    <div className="App">
      <div className='window'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/lJsIcIjR9ok?si=TkmY3_vyverHCPSl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <Taskbar/>
      </div>
    </div>
  );
}

export default App;
