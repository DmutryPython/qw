import React, { useEffect, useState } from "react";
import axios from "axios"; // Импортируем Axios
import './Ref.css';
import { CopyToClipboard } from "react-copy-to-clipboard";

const tg = window.Telegram.WebApp;

const Ref = () => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
      try {
        const response = await axios.post('https://preferably-engaging-grubworm.ngrok-free.app/ref', tg, {
          headers: {
            'Content-Type': 'application/json',
          },
        }); 
        setData(response.data[1]); 
      } catch (error) {
        console.error('Ошибка:', error);
      } 
      };  

    useEffect(() => {
      fetchData();  
    }, []);

  
  return (
    <div>
        {data}
        <CopyToClipboard text={data}>
            <button>Copy link</button>
        </CopyToClipboard>
    </div>
  );
};

export default Ref;