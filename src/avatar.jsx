import React, { useState } from 'react';

const Avatar = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [emoji, setEmoji] = useState('😊');

  const avatarModule = import.meta.glob('./img/avatar.png', { eager: true });
  const avatarSrc = Object.values(avatarModule)[0].default;
  
  const emojies = [
    '😊', '😄', '😃', '🙂', '😉', 
    '😋', '😎', '🥳', '😌', '😁'
  ];

  const handleInteraction = () => {
    const randomIndex = Math.floor(Math.random() * emojies.length);
    setEmoji(emojies[randomIndex]);
    setIsFlipped(true);
    setTimeout(() => { setIsFlipped(false); }, 800);
  };

  return (
    <div 
      className="avatar-container" 
      onClick={handleInteraction}
      onMouseEnter={handleInteraction}
    >
      <div className={`avatar-flipper ${isFlipped ? 'flipped' : ''}`}>
        <div className="avatar-front">
          <img 
            src={avatarSrc}
            alt="Suyash Srijan"
            className="avatar"
          />
        </div>
        <div className="avatar-back">
          <div className="emoji">{emoji}</div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;