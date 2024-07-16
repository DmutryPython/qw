import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Импортируем Axios
import './Start.css';
import videokart from "../../images/videokarta.png";

const tg = window.Telegram.WebApp;

const Start = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [isRotating, setIsRotating] = useState(false); // Добавление состояния анимации

  const handleImageClick = () => {
      setIsRotating(!isRotating); // Переключение состояния анимации
  };

  const fetchData = async () => {
    try {
      setLoading(true); // Устанавливаем состояние загрузки в true перед запросом

      const response = await axios.post('https://usable-obliging-parrot.ngrok-free.app/buy', tg, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setData(response.data[1]); 
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

  const handleClick = () => {
    navigate('/major', { state: { data } });
  };

  
  return (
    <div>
      <img
        className={`videokart ${isRotating ? 'rotating' : ''}`}
        src={videokart}
        alt="Example"
        onClick={handleImageClick}
      />
      
      {loading ? ( 
        <p>Загрузка данных...</p>
      ) : (
        <div>
          <p>{data} рублей у тебя спизженно</p>
        </div>
      )}
    </div>
  );
};

export default Start;



