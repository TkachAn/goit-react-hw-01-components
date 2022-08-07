import { Tr } from '../Table/table';
import css from './TransactionHistory.module.css';
export function History({ trans }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {trans.map(item => {
          return (
            <tr key={item.id}>
              <Tr
                id={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
