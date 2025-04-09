import './App.css';
import useToggle from './hooks/useToggle';
import Toggle from './components/Toggle';
import './App.scss'; 

function App() {
  const { on, toggle } = useToggle();

  return (
    <div className="app-container">
      <h2>Headless Toggle </h2>
      <Toggle on={on} toggle={toggle} />
      <p>현재 상태: {on ? '활성화됨' : '비활성화됨'}</p>
    </div>
  );
}

export default App;
