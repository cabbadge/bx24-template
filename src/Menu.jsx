import React from 'react';
import './App.css'; // Убедитесь, что ваши стили сохранены в этом файле

const Menu = () => {
  // Предполагаем, что навигация будет осуществляться через onClick события или React Router
  // Здесь используются "#" в href для демонстрации. Замените их на соответствующие пути.
  return (
    <nav className="menu">
      <ul className="menu-list" style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex" }}>
        <li className="menu-item active"><a href="#register">Регистрация документа</a></li>
        <li className="menu-item"><a href="#incoming">Входящие</a></li>
        <li className="menu-item"><a href="#outgoing">Исходящие</a></li>
        <li className="menu-item"><a href="#orders">Приказы</a></li>
        <li className="menu-item"><a href="#settings">Настройки</a></li>
      </ul>

    </nav>
  );
};

export default Menu;

          