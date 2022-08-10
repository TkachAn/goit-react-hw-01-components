import PropTypes from 'prop-types';
import css from './FriendItem.module.css';
export const FriendItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <span className={isOnline ? css.status : css.status_}>{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width={'48'} />
      <p className="name">{name}</p>
    </>
  );
};
FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
