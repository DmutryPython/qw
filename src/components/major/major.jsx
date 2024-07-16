import React, { useState } from "react";
import './major.css';
import { useLocation } from 'react-router-dom';
import videokart from "../../images/videokarta.png";

const Major = () => {
    const location = useLocation();
    const { data } = location.state || {};
    const [isRotating, setIsRotating] = useState(false); // Добавление состояния анимации

    const handleImageClick = () => {
        setIsRotating(!isRotating); // Переключение состояния анимации
    };

    

    return (
        <div>
            <img
                className={`videokart ${isRotating ? 'rotating' : ''}`}
                src={videokart}
                alt="Example"
                onClick={handleImageClick}
            />
            <p>Текущее количество валюты: {currency !== null ? currency : 'Загрузка...'}</p>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data received</p>} раз тебя ебали в жопу
        </div>
    );
};

export default Major;
