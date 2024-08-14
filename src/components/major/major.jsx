import React from "react";
import axios from "axios";
import { TonConnectButton } from '@tonconnect/ui-react';
import './major.css';
import { useTonConnectUI } from '@tonconnect/ui-react';


const tg = window.Telegram.WebApp;


const transaction = {
    messages: [
        {
            address: "UQAAbq-giIlmuy2F_-lQ6jlePOdaLlwyIgY1TdX5Q7x4T0rC", // destination address
            amount: "10000000" //Toncoin in nanotons
        }
    ]

}

const Major = () => {
    const [tonConnectUI, setOptions] = useTonConnectUI();


    const id = tg.initDataUnsafe.user.id
    
    
    const handleSubmit = async (userId, number) => {
        try {
            const response = await axios.post('https://preferably-engaging-grubworm.ngrok-free.app/data', { number, userId});
            console.log('Data sent successfully:', response.data);
        } catch (error) {
            console.error('There was an error!', error);
            // Обработка ошибки, если нужно
        }
    };

    return (
        <div>
            <TonConnectButton />
            <button onClick={() => tonConnectUI.sendTransaction(transaction)}>
                Send transaction
            </button>
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

