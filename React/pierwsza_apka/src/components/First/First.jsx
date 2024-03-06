import { PropTypes } from 'prop-types';
const First = ({a,b}) => {
    return (
        <div>
            <p>{a + b}</p>
            <p>{a * b}</p>
        </div>
    );
};

First.propTypes = {
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired
};

export default First;
