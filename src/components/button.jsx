import React from 'react';


const tg = window.Telegram.WebApp;


const buttonpost = async () => {
  try {
    const response = await fetch('https://usable-obliging-parrot.ngrok-free.app/buy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tg),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Ошибка при отправке POST-запроса:', error);
  }
};

export default buttonpost;

