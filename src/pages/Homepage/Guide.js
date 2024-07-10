import React from 'react';
import './Modal.css';

const Modal = ({ section, onClose, sections }) => {
  const currentIndex = sections.findIndex((s) => s.id === section.id);
  const prevSection = sections[currentIndex - 1];
  const nextSection = sections[currentIndex + 1];

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{section.title}</h2>
        <p>{section.content}</p>
        <div className="modal-navigation">
          {prevSection && <button onClick={() => handleSectionClick(prevSection)}>Back</button>}
          {nextSection && <button onClick={() => handleSectionClick(nextSection)}>Next</button>}
        </div>
      </div>
    </div>
  );
};

export default Modal;