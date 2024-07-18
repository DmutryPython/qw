import { useEffect } from 'react';
import './App.css';
import buttonpost from './components/button';
import { Route, Routes} from 'react-router-dom';
import Start from './components/Start/Start';
import Major from './components/major/major';
import Header from './components/Header/Header';


function App() {
  
  
  
  return (
    <div className="App">
      123
      <Header />
      <Routes>
        <Route index element={<Start />}/>
        <Route path={'major'} element={<Major />}/>  
      </Routes>
    </div>
  );
}

export default App;
