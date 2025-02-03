import React, { useState, useEffect } from 'react';

const BackgroundSlideshow = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = Array.from({ length: 7 }, (_, i) => 
    `img/background_photo_${i + 1}.jpg`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="background-images">
        {images.map((src, index) => (
          <div
            key={src}
            className="background-image"
            style={{
              backgroundImage: `url(${src})`,
              opacity: index === currentImageIndex ? 1 : 0
            }}
          />
        ))}
        <div className="dot-overlay" />
      </div>
      {children}
    </>
  );
};

export default BackgroundSlideshow;