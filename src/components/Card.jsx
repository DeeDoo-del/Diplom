import '../index.css';

export default function Card({ onBookClick, restaurantName = "BBQ House" }) {
    return (
        <div className='main-card'>
            <div className='card'>
                <div className='rating-and-bookmark'>
                    <div className='rating'>
                        4.5
                    </div>
                    <div className='bookmark'>
                        <svg className='mark' width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.52002 2.15998C0.52002 1.05541 1.41545 0.159973 2.52002 0.159973H13.48C14.5846 0.159973 15.48 1.0554 15.48 2.15997V15.737C15.48 17.2764 13.8139 18.2386 12.4805 17.4694L8.99952 15.4609C8.38097 15.104 7.61907 15.1041 7.00052 15.4609L3.51952 17.4694C2.18619 18.2386 0.52002 17.2764 0.52002 15.737V2.15998Z" fill="#FF2400" />
                        </svg>
                    </div>
                </div>
                <div className='card-image'></div>
                <div className='tags'>
                    <div className='tag-text'>
                        <p><span style={{ color: 'green' }}>#</span>Мясо</p>
                    </div>
                    <div className='tag-text'>
                        <p><span style={{ color: 'green' }}>#</span>Барбекю</p>
                    </div>
                </div>
                <div className='Name-and-time'>
                    <div className='Name'>
                        {restaurantName}
                    </div>
                    <div className='time'>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="7" cy="7.00003" r="6" stroke="#00A86B" strokeWidth="2" />
                            <path d="M6.98535 3.26193L6.98535 7.65479L9 9.75071" stroke="#00A86B" strokeWidth="2" />
                        </svg> Until 23:00
                    </div>
                </div>
                <div className='main-tags'>
                    <div>
                        <p>Bar <span style={{ color: 'grey' }}>•</span> $$$$ <span style={{ color: 'grey' }}>•</span> Novogireevo <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#FFCC00" /></svg></p>
                    </div>
                </div>
                
                {/* Кнопка бронирования - добавлена в самый конец, но внутри .card */}
                {onBookClick && (
                    <button 
                        className="book-btn" 
                        onClick={(e) => {
                            e.stopPropagation();
                            onBookClick(restaurantName);
                        }}
                    >
                        Забронировать
                    </button>
                )}
            </div>
        </div>
    );
}