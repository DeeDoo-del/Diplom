import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateTimePicker = ({ date, setDate, time, setTime }) => {
    const availableTimes = [
        '12:00', '13:00', '14:00', '15:00', '16:00', 
        '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
    ];

    return (
        <div className="datetime-selector">
            <div className="form-group">
                <label>Дата:</label>
                <DatePicker
                    selected={date}
                    onChange={setDate}
                    minDate={new Date()}
                    dateFormat="dd.MM.yyyy"
                    className="date-input"
                />
            </div>
            <div className="form-group">
                <label>Время:</label>
                <select 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)}
                    className="time-select"
                >
                    {availableTimes.map(t => (
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default DateTimePicker;