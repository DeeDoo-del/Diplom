import { useState } from 'react';

const BookingForm = ({ selectedTable, onBookingSubmit, onBack }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onBookingSubmit({ name, phone });
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <h3>Выбран столик №{selectedTable.id} на {selectedTable.capacity} персон</h3>
            
            <div className="form-group">
                <label>Ваше имя:</label>
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            
            <div className="form-group">
                <label>Телефон:</label>
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    placeholder="+7 (XXX) XXX-XX-XX"
                />
            </div>
            
            <div className="form-actions">
                <button type="button" onClick={onBack}>Назад</button>
                <button type="submit">Подтвердить бронь</button>
            </div>
        </form>
    );
};

export default BookingForm;