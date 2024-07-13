import React from 'react';
import './Experience.css'; // 引入游戏首页的样式文件

const Experience = () => {
    return (
        <div className="game-homepage">
            <div className="game-card">
                <h2>Visual Odyssey: Find Your Accommodation</h2>
                <p>An interactive game to learn about assistive technologies for visually impaired.</p>
                <a href="game.html" className="start-button">Start Game</a>
            </div>
        </div>
    );
};

export default Experience;