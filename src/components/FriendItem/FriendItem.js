import friends from '../friends.json';
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
            height={'48'}
          />
          <p className="name">{item.name}</p>
        </li>
      ))}
    </>
  );
};
