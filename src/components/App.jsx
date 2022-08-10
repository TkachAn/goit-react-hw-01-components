import { Profile } from './Profile/Profile';
import user from '../jsonFile/user.json';
import data from '../jsonFile/data.json';
import friends from '../jsonFile/friends.json';
import transactions from '../jsonFile/transactions.json';
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
      <Statistics title="Upload stats" stats={data} />
      <FriendList friend={friends} />
      <History trans={transactions} />
    </div>
  );
};
