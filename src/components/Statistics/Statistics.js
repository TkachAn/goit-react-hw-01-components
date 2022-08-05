import { StatList } from '../StatList/StatList';
export const Statistics = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        <StatList />
      </ul>
    </section>
  );
};
