import React from 'react';

type Props = {
    isDarkMode: boolean;
    toggleTheme: () => void;
};

const Header: React.FC<Props> = ({ isDarkMode, toggleTheme }) => {
    return (
        <header className="header">
        <div className="container">
            <h1 className="header-logo">Yuto Asari's Portfolio</h1>
            <nav className="nav">
            <ul>
                <li><a href="#about">自己紹介</a></li>
                <li><a href="#works">開発記録</a></li>
                <li><a href="#research">研究</a></li>
                <li><a href="#skills">開発スキル</a></li>
                <li><a href="#experience">経験</a></li>
            </ul>
            </nav>
            <button className="theme-toggle-btn" onClick={toggleTheme}>
            {isDarkMode ? '☀️' : '🌙'}
            </button>
        </div>
        </header>
    );
};

export default Header;