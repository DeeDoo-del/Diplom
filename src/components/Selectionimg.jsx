import PropTypes from 'prop-types';

export default function Selectionimg({ imageUrl, text, width, margin }) {
    return (
        <div>
            <img src={imageUrl} alt="Подборка" style={{ 
                height: '100%', 
                width: width, 
                margin: margin,
                borderRadius: '20px',
                objectFit: 'cover'
            }} />
            <div style={{
                position: 'relative',
                width: '114px',
                left: '85px',
                bottom: '40px',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold',
            }}>
                {text}
            </div>
        </div>
    );
}

Selectionimg.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.string,
    margin: PropTypes.string
};

Selectionimg.defaultProps = {
    width: '100%',
    margin: '0'
};