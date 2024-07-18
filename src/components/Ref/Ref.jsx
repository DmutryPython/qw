import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Импортируем Axios
import './Ref.css';

const Ref = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    
    const fetchData = async () => {
        try {
          setLoading(true); // Устанавливаем состояние загрузки в true перед запросом
    
          const response = await axios.post('https://preferably-engaging-grubworm.ngrok-free.app/ref', tg, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          setData(response.data); 
        } catch (error) {
          console.error('Ошибка:', error);
        } finally {
          setLoading(false); 
        }
      };
    

    useEffect(() => {
        fetchData(); 
    
    
        const interval = setInterval(() => {
          fetchData();
        }, 10000); 
    
        return () => {
          clearInterval(interval);
        };
      }, []);



    return (
        <div>
            ref
            {data}            
        </div>
    );
};

export default Ref;