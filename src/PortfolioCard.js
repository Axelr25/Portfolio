import React, { useState } from 'react';

// Modal Component
const Modal = ({ isOpen, handleClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }} onClick={handleClose}>
      <div style={{
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative'
      }} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

// QuizPortfolioCard Component
const QuizPortfolioCard = ({ title, subtitle, imageUrl, defaultImageUrl }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <>
      <div className="portfolio-card"
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
           style={{ backgroundImage: `url(${isHovered ? imageUrl : defaultImageUrl})` }}>
        <div className="card-content">
          <p className="card-subtitle">{subtitle}</p>
          <h3 className="h3 card-title">{title}</h3>
          <button className="btn-link" onClick={toggleModal}>
            <span>View Project</span>
            <ion-icon name="arrow-forward"></ion-icon>
          </button>
        </div>
      </div>
      <Modal isOpen={modalOpen} handleClose={toggleModal}>
        <img src={imageUrl} alt={title} style={{ maxWidth: '90vw', maxHeight: '80vh' }} />
      </Modal>
    </>
  );
};

export default QuizPortfolioCard;
