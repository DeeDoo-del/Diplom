import React, { useState, useRef, useEffect } from 'react';

const RestaurantSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const cardWidth = useRef(0);

    const cards = [
        { id: 1, title: 'Restaurant 1' },
        { id: 2, title: 'Restaurant 2' },
        { id: 3, title: 'Restaurant 3' },
        { id: 4, title: 'Restaurant 4' },
        { id: 5, title: 'Restaurant 5' },
    ];

    useEffect(() => {
        const firstCard = sliderRef.current.querySelector('.restaurant-card');
        if (firstCard) {
            cardWidth.current = firstCard.offsetWidth + 16; // +16px отступ
        }
    }, []);

    const handleNext = () => {
        if (currentIndex < cards.length - 4) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <div
            className="restaurant-slider"
            style={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                height: '300px'
            }}
        >
            <button
                className="scroll-btn prev"
                onClick={handlePrev}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '16px',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    fontSize: '24px',
                    cursor: 'pointer',
                    color: '#333'
                }}
            >
                -
            </button>

            <div
                className="slider-container"
                style={{
                    display: 'flex',
                    transform: `translateX(-${currentIndex * cardWidth.current}px)`,
                    transition: 'transform 0.5s ease-in-out'
                }}
            >
                <div
                    className="slider-track"
                    style={{
                        display: 'flex',
                        gap: '16px'
                    }}
                    ref={sliderRef}
                >
                    {cards.map(card => (
                        <div
                            key={card.id}
                            className="restaurant-card"
                            style={{
                                flex: '0 0 calc(25% - 16px)',
                                minWidth: '280px',
                                padding: '20px',
                                border: '1px solid #eee',
                                borderRadius: '8px',
                                backgroundColor: '#fff',
                                boxSizing: 'border-box'
                            }}
                        >
                            <h3>{card.title}</h3>
                            {/* Добавьте содержимое карточки */}
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="scroll-btn next"
                onClick={handleNext}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '16px',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    fontSize: '24px',
                    cursor: 'pointer',
                    color: '#333'
                }}
            >
                +
            </button>
        </div>
    );
};

export default RestaurantSlider;