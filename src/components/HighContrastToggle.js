import React from 'react';
import { useHighContrast } from './HighContrastContext';
import './HighContrastToggle.css'; // 导入新的样式文件

const HighContrastToggle = () => {
    const { isHighContrast, toggleHighContrast } = useHighContrast();

    return (
        <button
            onClick={toggleHighContrast}
            className={`high-contrast-toggle-button ${isHighContrast ? 'high-contrast' : ''}`}
        >
            {isHighContrast ? 'Normal Mode' : 'High Contrast Mode'}
        </button>
    );
};

export default HighContrastToggle;