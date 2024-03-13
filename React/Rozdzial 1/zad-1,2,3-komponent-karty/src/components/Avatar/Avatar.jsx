import './Avatar.css';

/* eslint-disable react/prop-types */
export const Avatar = ({ name, surname, avatar }) => {
    return (
        <div className="avatar">
            <div className="avatar__details details">
                <h1 className='details__title'>
                    {name} {surname}
                </h1>
            </div>
            <div className="avatar__photo photo">
                <img className='photo__img' src={avatar} />
            </div>
        </div>
    );
};
