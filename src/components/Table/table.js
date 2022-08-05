import transactions from '../transactions.json';
export const Tbody = () => {
  return (
    <tbody>
      {transactions.map(item => (
        <tr key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  );
};
