//import PropTypes, { array } from 'prop-types';
import { StatList } from '../StatList/StatList';
//import data from './data.json';
export function Statistics({ stats }) {
  //console.log('stats', stats);
  //console.log('stats.id', stats.id);
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {stats.map(stat => {
          return (
            <li key={stat.id}>
              <StatList
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

// array.propTypes = {
//   label: PropTypes.string.isRequired,
//   percentage: PropTypes.number.isRequired,
// };
