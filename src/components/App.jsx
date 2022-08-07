import { Profile } from './Profile/Profile';
import user from './user.json';
import data from './data.json';
import { FriendList } from './FriendList/FriendList';
import { Statistics } from './Statistics/Statistics';
import { History } from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList />

      <History />
    </div>
  );
};
