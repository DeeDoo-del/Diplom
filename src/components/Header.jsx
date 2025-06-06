import { Link } from 'react-router-dom';
import '../index.css'

export default function Header() {
    return (
        <header>
            <svg width="250" height="50" viewBox="0 0 281 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Ваш SVG логотип */}
            </svg>
            <div className='head-serch'>
                <input className="serch" type="search" name="head-serch" placeholder="Поиск ресторанов" />
            </div>
            <div className='head-links'>
                <Link to="/profile">Авторизоваться</Link>
                <a href="#about">О нас</a>
            </div>
        </header>
    );
}