import React, { useState } from 'react';
import './Balloon2.css'; // 样式文件

const Balloon = ({ number, content }) => {
  const [popped, setPopped] = useState(false);

  const handleClick = () => {
    setPopped(true); // 设置状态为破裂状态
    // 播放爆炸声音或其他效果
  };

  return (
    <div className="balloon-wrapper">
      {!popped ? (
        <div className="balloon" onClick={handleClick}>
          <i className="fas fa-circle-notch"></i> {/* 使用 Font Awesome 图标 */}
          <span className="balloon-number">{number}</span> {/* 气泡编号 */}
        </div>
      ) : (
        <div className="popped-balloon">
          <i className="fas fa-circle-notch fa-spin"></i> {/* 破裂后的效果图标 */}
          <div className="dialog-box">
            <BalloonContent content={content} />
          </div>
        </div>
      )}
    </div>
  );
};

const BalloonContent = ({ content }) => {
  return (
    <>
      <h3>误解话语的内容</h3>
      <p>{content}</p>
      {/* 可以添加一个输入框或按钮，鼓励用户参与 */}
    </>
  );
};

export default Balloon;