import { cusine } from "/src/server/data.js";

export default function Filter({ onCuisineChange }) {
    return (
        <div className='filter'>
            <select onChange={(e) => onCuisineChange && onCuisineChange(e.target.value)}>
                <option value="all">Все кухни</option>
                {cusine.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        </div>
    );
}