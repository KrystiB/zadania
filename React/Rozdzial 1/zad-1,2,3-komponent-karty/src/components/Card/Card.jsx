import './Card.css';
import PropTypes from 'prop-types';
const Card = ({ background, children }) => {
    return (
        <div className="card" style={{ backgroundImage: `url(${background})` }}>
            {children}
        </div>
    );
};
Card.propTypes = {
    children: PropTypes.node,
    background: PropTypes.string,
};
export default Card;
