import React, { useState } from 'react';
import Header from "./Header";
import Filter from "./Filter";
import Card from "./Card";
import Button from "./Button";
import Selectionimg from "./Selectionimg";
import BookingModal from './Booking/BookingModal';
import '../index.css';

const HomePage = () => {
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    const handleBookClick = (restaurantName) => {
        setSelectedRestaurant({
            name: restaurantName,
            id: Date.now(),
            tables: 12 // Примерное количество столов
        });
        setShowBookingModal(true);
    };


    return (
        <div>
            <Header />
            <div className="Imglb">
                <div className="image-text-container">
                    <div className="Kar-big">
                        <img src="./src/assets/MaingridFotos/Огне.jpg" alt="Осень" />
                        <div className="text-overlay">Осенняя осень</div>
                    </div>
                    <div>
                        <img src="./src/assets/MaingridFotos/суш.jpg" alt="Осень" />
                        <div className="text-overlay">Осенняя осень</div>
                    </div>
                    <div>
                        <img src="./src/assets/MaingridFotos/ТМбар.jpg" alt="Осень" />
                        <div className="text-overlay">Осенняя осень</div>
                    </div>
                    <div className='snowman'>
                        <img src="./src/assets/MaingridFotos/Пон.jpg" alt="Осень" />
                        <div className="text-overlay">Осенняя осень</div>
                    </div>
                    <div>
                        <img src="./src/assets/MaingridFotos/Молекулярная.jpg" alt="Осень" />
                        <div className="text-overlay">Осенняя осень</div>
                    </div>
                    <div>
                        <img src="./src/assets/MaingridFotos/Огне.jpg" alt="Осень" />
                        <div className="text-overlay">Осенняя осень</div>
                    </div>
                </div>
            </div>
            <Filter />
            <div className="heading">
                <h2 className="title">Сезонные предложения</h2>
                <Button content='Все' />
            </div>
            {/*  <div class="restaurant-slider">
                <div class="slider-container">
                    <div class="slider-track">
                        <Card className="restaurant-card" onBookClick={handleBookClick} restaurantName="BBQ House" imageUrl="./src/assets/MaingridFotos/суш.jpg" />
                        <Card className="restaurant-card" onBookClick={handleBookClick} restaurantName="Итальянский ресторан" imageUrl="./src/assets/MaingridFotos/суш.jpg" />
                        <Card className="restaurant-card" onBookClick={handleBookClick} restaurantName="Японский ресторан" imageUrl="./src/assets/MaingridFotos/суш.jpg" />
                        <Card className="restaurant-card" onBookClick={handleBookClick} restaurantName="Японский ресторан" imageUrl="./src/assets/MaingridFotos/суш.jpg" />
                    </div>
                </div>
                <button class="scroll-btn prev">
                    <svg className="slide-btn" width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 15L7.29289 8.70711C7.68342 8.31658 7.68342 7.68342 7.29289 7.29289L1 0.999999" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
                <button class="scroll-btn next">
                    <svg className="slide-btn" width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1L1.70711 7.29289C1.31658 7.68342 1.31658 8.31658 1.70711 8.70711L8 15" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </div> */}
            <div className="compilation">
                <h2 className="weekend-selection">Подборки выходного дня</h2>
                <div className="selection-imgs">
                    <Selectionimg imageUrl='бар.jpg' text="Гойда" width="430px" margin="0" />
                    <Selectionimg imageUrl="вино.jpg" text="Гойда" width="460px" margin="0px 19px 0px 19px" />
                    <Selectionimg imageUrl="руф.jpg" text="Гойда" width="660px" margin="0" />
                </div>
            </div>

            {showBookingModal && (
                <BookingModal
                    restaurant={selectedRestaurant}
                    onClose={() => setShowBookingModal(false)}
                />
            )}
        </div>
    );

};

export default HomePage;