import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { Statistics } from './Statistics/Statistics';
import { History } from './TransactionHistory/TransactionHistory';
console.log({ Statistics });
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
