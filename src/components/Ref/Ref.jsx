import React, {useEffect} from "react";
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