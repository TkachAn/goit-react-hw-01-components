import PropTypes from 'prop-types';

import css from './FriendItem.module.css';
export const FriendItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      {isOnline ? (
        <span className={css.status}>{isOnline}</span>
      ) : (
        <span className={css.status_}>{isOnline}</span>
      )}

      <img className="avatar" src={avatar} alt={name} width={'48'} />
      <p className="name">{name}</p>
    </>
  );
};
FriendItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
