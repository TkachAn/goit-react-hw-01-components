// import PropTypes, { Stats } from 'prop-types';
import { StatElement } from '../StatElement/StatElement';
export function Statistics({ stats }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {stats.map(stat => {
          return (
            <li key={stat.id}>
              <StatElement
                id={stat.id}
                label={stat.label}
                percentage={stat.percentage}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// Stats.propTypes = {
//   id: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
// };
