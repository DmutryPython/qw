import { useEffect } from 'react';
import './App.css';
import buttonpost from './components/button';
import { Route, Routes} from 'react-router-dom';
import Start from './components/Start/Start';
import Major from './components/major/major';

console.log('код запущен');
const tg = window.Telegram.WebApp;


const data = '123'


function App() {
  
  
  const onClose = () => {
    tg.close()
  }
  

  const handleButtonClick = async () => {
    await buttonpost();
  }
  
  return (
    <div className="App">
      <button onClick={handleButtonClick}>не нажимай еблан</button>
      <button onClick={onClose}>иди нахуй</button>
      <Routes>
        <Route index element={<Start />}/>
        <Route path={'major'} element={<Major />}/>
      </Routes>
    </div>
  );
}

export default App;
