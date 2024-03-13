import './Medals.css';

// eslint-disable-next-line react/prop-types
export const Medals = ({ bronze, silver, gold }) => {
    return (
        <div className="medals">
            <h1 className="medals__title">Rewards</h1>
            <div className="medals__item">
                <div className="item" style={{ display: bronze > 0 ? 'flex' : 'none' }}>
                    <span className="item__quantity">{bronze}</span>
                    <span>Bronze</span>
                </div>
                <div className="item" style={{ display: silver > 0 ? 'flex' : 'none' }}>
                    <span className="item__quantity">{silver}</span>
                    <span>Silver</span>
                </div>
                <div className="item" style={{ display: gold > 0 ? 'flex' : 'none' }}>
                    <span className="item__quantity">{gold}</span>
                    <span>Gold</span>
                </div>
            </div>
        </div>
    );
};
