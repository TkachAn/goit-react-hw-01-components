import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { Statistics } from './Statistics/Statistics';
import { History } from './TransactionHistory/TransactionHistory';
export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList />
      <History />
    </div>
  );
};
