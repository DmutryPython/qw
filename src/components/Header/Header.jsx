import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const tg = window.Telegram.WebApp;



const pages = [
    { path: '/', name: 'Главная' },
    { path: '/ref', name: 'Рефералы' },
    { path: '/major', name: 'Покупки' },
    
  ];


const Header = () => {
    
    const onClose = () => {
        tg.close()
      }
    
    return (
        <div>
            <button onClick={onClose}>Закрыть</button>
            <h2>Меню</h2>
            <Nav className="flex-column">
                {pages.map((page) => (
                    <Nav.Link as={Link} to={page.path} key={page.path}>
                        {page.name}
                    </Nav.Link>
                ))}
            </Nav>
        </div>
    );
};

export default Header;