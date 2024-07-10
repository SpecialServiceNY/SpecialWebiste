import React from 'react';
import Balloon1 from './Balloon1'; // 假设你将不同的 Balloon 组件分别定义在这里
import Balloon2 from './Balloon2';
import Balloon3 from './Balloon3';
import './Encourage.css'; // 样式文件

const Encourage = () => {
  return (
    <div className="encourage-page">
      <h1>点击气泡来展示鼓励内容</h1>
      <div className="balloon-container">
        <Balloon1 />
        <Balloon2 />
        <Balloon3 />
        {/* 添加更多的气泡组件 */}
      </div>
    </div>
  );
};

export default Encourage;