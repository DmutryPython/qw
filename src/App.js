import { useEffect } from 'react';
import './App.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { Route, Routes} from 'react-router-dom';
import Start from './components/Start/Start';
import Major from './components/major/major';
import Header from './components/Header/Header';
import Ref from './components/Ref/Ref';


function App() {
  
  
  
  return (
    <TonConnectUIProvider manifestUrl="https://kripto123.netlify.app/public/tonconnect-manifest.json">
      <div className="App">
        123
        <Header />
        <Routes>
          <Route index element={<Start />}/>
          <Route path={'major'} element={<Major />}/>
          <Route path={'ref'} element={<Ref />}/>
        </Routes>
      </div>
    </TonConnectUIProvider>
  );
}

export default App;
