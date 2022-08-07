// import PropTypes from 'prop-types';

// import { Online } from './FriendItem.styled';
export const FriendItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      {isOnline ? (
        <span className="status green">{isOnline}</span>
      ) : (
        <span className="status red">{isOnline}</span>
      )}

      <img className="avatar" src={avatar} alt={name} width={'48'} />
      <p className="name">{name}</p>
    </>
  );
};
// friends.propTypes = {
//   id: PropTypes.number.isRequired,
//   avatar: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
//   name: PropTypes.string.isRequired,
// };
