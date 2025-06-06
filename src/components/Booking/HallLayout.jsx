const HallLayout = ({ tables, onTableSelect, selectedGuests }) => {
    const getTableStatus = (table) => {
        if (table.status !== 'free') return table.status;
        return table.capacity >= selectedGuests ? 'free' : 'unavailable';
    };

    return (
        <div className="hall-layout">
            {tables.map(table => {
                const status = getTableStatus(table);
                return (
                    <div
                        key={table.id}
                        className={`table ${status}`}
                        onClick={() => status === 'free' && onTableSelect(table)}
                        title={`Столик №${table.id} (${table.capacity} персон)`}
                    >
                        <span className="table-number">{table.id}</span>
                        <span className="table-capacity">{table.capacity}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default HallLayout;