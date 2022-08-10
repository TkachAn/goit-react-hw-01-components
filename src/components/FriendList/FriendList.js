import PropTypes from 'prop-types';
import { FriendItem } from '../FriendItem/FriendItem';
import css from './FriendList.module.css';
export function FriendList({ friend }) {
  return (
    <ul className={css.friendList}>
      {friend.map(item => {
        return (
          <li key={item.id} className={css.item}>
            <FriendItem
              isOnline={item.isOnline}
              avatar={item.avatar}
              name={item.name}
            />
          </li>
        );
      })}
    </ul>
  );
}
FriendList.propTypes = {
  friend: PropTypes.array.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
