import React, { useState, useEffect } from 'react';

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { image: 'images/real-madrid (1).png' },
    { image: 'images/real-madrid (2).png' },
    { image: 'images/real-madrid (3).png' },
    { image: 'images/real-madrid (4).png' },
    { image: 'images/real-madrid (4).png' },
    { image: 'images/real-madrid (1).png' },
    { image: 'images/real-madrid (3).png' },
    { image: 'images/real-madrid (2).png' },
    { image: 'images/real-madrid (3).png' },
    { image: 'images/real-madrid (4).png' },
    { image: 'images/real-madrid (4).png' },
    { image: 'images/real-madrid (1).png' },
  ];

  const repeatedSlides = [...slides, ...slides];

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearTimeout(intervalId);
  }, [currentIndex, slides.len]);

  

  return (
    <div className='relative w-full h-auto flex justify-center items-center'>
      <div className='overflow-hidden flex justify-center items-center'>
        <div
          className='flex transition-transform duration-1000 ease-in-out transform'
          style={{
            transform: `translateX(-${currentIndex * (100)}%)`,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            width: `${repeatedSlides.length * (100)}%`,
          }}
        >
          {repeatedSlides.map((slide, index) => (
            <div key={index} className='flex-shrink-0 relative'>
              <img
                src={slide.image}
                alt={`Slide ${currentIndex + 1}`}
                className='object-cover object-center px-1.5'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
