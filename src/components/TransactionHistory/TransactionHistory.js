import { Tbody } from '../Table/table';

export const History = () => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <Tbody />
    </table>
  );
};
