import React, { useEffect } from 'react';

export default function Modal({ children, onClose }) {
  useEffect(() => {
    window.addEventListener('keyup', handleKeyDown);
    return () => {
      window.removeEventListener('keyup', handleKeyDown);
  }
    });


  const handleKeyDown = (event) => {
    if (event.code === 'Escape') {
            onClose();
        }
    };

    const handleBackdrop = (event) => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

    return (
        <div className="overlay" onClick={handleBackdrop}>
            <div className="modal">{children}</div>
            <style jsx>
                {`
                    .overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100vw;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: rgba(0, 0, 0, 0.8);
                        z-index: 1200;
                    }

                    .modal {
                        max-width: calc(100vw - 48px);
                        max-height: calc(100vh - 24px);
                    }
                `}
            </style>
        </div>
    );
}
