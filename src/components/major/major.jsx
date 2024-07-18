import React from "react";
import axios from "axios";
import './major.css';


const tg = window.Telegram.WebApp;


const Major = () => {

    const id = tg.initDataUnsafe.user.id
    
    
    const handleSubmit = async (userId, number) => {
        try {
            const response = await axios.post('https://preferably-engaging-grubworm.ngrok-free.app/data', { userId, number });
            console.log('Data sent successfully:', response.data);
        } catch (error) {
            console.error('There was an error!', error);
            // Обработка ошибки, если нужно
        }
    };

    return (
        <div>
            <div className="button-container">
                <button onClick={() => handleSubmit(1, id)}>1</button>
                <button onClick={() => handleSubmit(2, id)}>2</button>
                <button onClick={() => handleSubmit(3, id)}>3</button>
                <button onClick={() => handleSubmit(4, id)}>4</button>
            </div>
        </div>
    );
};

export default Major;

