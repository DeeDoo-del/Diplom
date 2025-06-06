import '../index.css';
import PropTypes from 'prop-types';

export default function Button({ content, onClick }) {
    return (
        <button className="all-btn" onClick={onClick}>
            {content}
        </button>
    );
}

Button.propTypes = {
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func
};