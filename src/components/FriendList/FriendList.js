import PropTypes from 'prop-types';
import { FriendItem } from '../FriendItem/FriendItem';
import css from './FriendList.module.css';
export function FriendList({ friend }) {
  return (
    <ul className={css.friendList}>
      {friend.map(item => {
        const { id, isOnline, avatar, name } = item;
        return (
          <li key={id} className={css.item}>
            <FriendItem isOnline={isOnline} avatar={avatar} name={name} />
          </li>
        );
      })}
    </ul>
  );
}
FriendList.propTypes = {
  friend: PropTypes.array.isRequired,
};
