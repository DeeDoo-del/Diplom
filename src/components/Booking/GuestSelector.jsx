const GuestSelector = ({ guests, setGuests }) => {
    return (
        <div className="form-group">
            <label>Количество гостей:</label>
            <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="guest-select"
            >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>
                        {num} {num === 1 ? 'гость' : num < 5 ? 'гостя' : 'гостей'}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default GuestSelector;