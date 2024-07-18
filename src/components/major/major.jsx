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
            
        </div>
    );
};

export default Major;
