import PropTypes from 'prop-types';
import friends from '../friends.json';
// import { Online } from './FriendItem.styled';
export const FriendItem = () => {
  return (
    <>
      {friends.map(item => (
        <li key={item.id}>
          <span className="status">{item.isOnline}</span>
          <img
            className="avatar"
            src={item.avatar}
            alt={item.name}
            width={'48'}
          />
          <p className="name">{item.name}</p>
        </li>
      ))}
    </>
  );
};
friends.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
