import React from "react";
import './Ref.css';

const Ref = () => {
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
    

    return (
        <div>
            {data}            
        </div>
    );
};

export default Ref;