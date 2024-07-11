import React from 'react';
import { useHighContrast } from '../../../components/HighContrastContext';
import Balloon1 from './Balloon1'; 
import Balloon2 from './Balloon2';
import Balloon3 from './Balloon3';
import './Encourage.css'; 

const Encourage = () => {
  const { isHighContrast } = useHighContrast();
  return (
    <div className={isHighContrast ? 'high-contrast' : ''}>
    <div className="encourage-page">
      <h1>点击气泡来展示鼓励内容</h1>
      <div className="balloon-container">
        <Balloon1 />
        <Balloon2 />
        <Balloon3 />
        {/* 添加更多的气泡组件 */}
      </div>
      </div>
    </div>
  );
};

export default Encourage;