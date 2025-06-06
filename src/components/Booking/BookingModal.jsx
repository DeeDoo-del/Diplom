import { useState } from 'react';
import HallLayout from './HallLayout';
import GuestSelector from './GuestSelector';
import DateTimePicker from './DateTimePicker';
import BookingForm from './BookingForm';
import "../../index.css";

const BookingModal = ({ restaurant, onClose }) => {
    const [step, setStep] = useState('select');
    const [guests, setGuests] = useState(2);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('19:00');
    const [selectedTable, setSelectedTable] = useState(null);

    const generateTables = () => {
        const tables = [];
        for (let i = 1; i <= (restaurant.tables || 10); i++) {
            const capacity = i % 3 === 0 ? 4 : i % 2 === 0 ? 2 : 6;
            const status = Math.random() > 0.7 ? 
                (Math.random() > 0.5 ? 'booked' : 'occupied') : 'free';
            tables.push({ id: i, capacity, status });
        }
        return tables;
    };

    const [tables] = useState(generateTables());

    const handleTableSelect = (table) => {
        setSelectedTable(table);
        setStep('form');
    };

    const handleBookingSubmit = (customerData) => {
        // В реальном приложении здесь будет сохранение бронирования
        console.log('Бронирование создано:', {
            restaurant,
            date,
            time,
            guests,
            table: selectedTable,
            customerData
        });
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="booking-modal">
                <button className="close-btn" onClick={onClose}>×</button>
                <h2>Бронирование в {restaurant.name}</h2>
                
                {step === 'select' && (
                    <>
                        <DateTimePicker date={date} setDate={setDate} time={time} setTime={setTime} />
                        <GuestSelector guests={guests} setGuests={setGuests} />
                        
                        <div className="tables-info">
                            <div className="legend">
                                <span className="free">Свободно</span>
                                <span className="booked">Забронировано</span>
                                <span className="occupied">Занято</span>
                            </div>
                            <p>Доступные столики для {guests} гостей</p>
                        </div>
                        
                        <HallLayout 
                            tables={tables} 
                            onTableSelect={handleTableSelect}
                            selectedGuests={guests}
                        />
                    </>
                )}
                
                {step === 'form' && (
                    <BookingForm 
                        selectedTable={selectedTable}
                        onBookingSubmit={handleBookingSubmit}
                        onBack={() => setStep('select')}
                    />
                )}
            </div>
        </div>
    );
};

export default BookingModal;