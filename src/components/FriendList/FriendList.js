import { FriendItem } from '../FriendItem/FriendItem';

export function FriendList({ friend }) {
  return (
    <ul className="friend-list">
      {friend.map(item => {
        return (
          <li key={item.id} className="item">
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
