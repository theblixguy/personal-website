import { useState, useEffect } from 'react';

const imageModules = import.meta.glob('./img/background_photo_*.jpg', { eager: true });
const images = Object.values(imageModules).map((m) => m.default);

const BackgroundSlideshow = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
              opacity: index === currentImageIndex ? 1 : 0,
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
