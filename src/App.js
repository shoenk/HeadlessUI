import './App.css';
import useToggle from './hooks/useToggle';
import Toggle from './components/Toggle';
import './App.scss'; 

function App() {
  const { on, toggle } = useToggle();

  return (
    <div className="app-container">
      <div className='app-box'>
        <h2>Headless Toggle </h2>
        <Toggle on={on} toggle={toggle} />
        <p>현재 상태: {on ? 'ON' : 'OFF'}</p>
      </div>
    </div>
  );
}

export default App;
