import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import Header from './Header';
import '../index.css';

const ProfilePage = () => {
    const [bookings, setBookings] = useState([
        {
            id: 'BK-123456',
            restaurant: { name: 'BBQ House' },
            date: '15.05.2023',
            time: '19:00',
            guests: 4,
            table: { id: 5, capacity: 4 }
        },
        {
            id: 'BK-654321',
            restaurant: { name: 'Итальянский ресторан' },
            date: '20.05.2023',
            time: '20:30',
            guests: 2,
            table: { id: 3, capacity: 2 }
        }
    ]);

    return (
        <div className='profile-main'>
            <Header />
            <div className='background-main'></div>
            <div className='head-profile'>
                <div className='foto-profile'>
                    <img className='foto' alt="Profile" />
                    <p className='name-profile'>Гойдочка</p>
                </div>
                <div className='reserv-profile'>
                    <img className='reserv-foto' alt="Reservation" />
                </div>
            </div>

            <div className="bookings-section">
                <h2 className="title">Мои бронирования</h2>
                {bookings.map(booking => (
                    <div key={booking.id} className="booking-card">
                        <h3>{booking.restaurant.name}</h3>
                        <p><strong>Номер брони:</strong> {booking.id}</p>
                        <p><strong>Дата:</strong> {booking.date} в {booking.time}</p>
                        <p><strong>Столик:</strong> №{booking.table.id} (на {booking.guests} чел.)</p>
                    </div>
                ))}
            </div>

            <div className="cardTitle-profile">
                <h2 className="title">Избранное</h2>
                <Button content='Все' />
            </div>
            <div className='favorite-profile'>
                <Card restaurantName="BBQ House" />
                <Card restaurantName="Итальянский ресторан" />
                <Card restaurantName="Японский ресторан" />
                <Card restaurantName="Грузинский ресторан" />
            </div>
        </div>
    );
};

export default ProfilePage;