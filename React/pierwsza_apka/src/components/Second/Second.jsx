import './Second.css';
import { PropTypes } from 'prop-types';

const Second = ({ tekst }) => {
    return <div className="red">{tekst}</div>;
};
Second.propTypes = {
    tekst: PropTypes.string.isRequired,
}
export default Second;
