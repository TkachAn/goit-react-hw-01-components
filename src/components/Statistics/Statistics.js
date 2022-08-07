import PropTypes from 'prop-types';
import { StatElement } from '../StatElement/StatElement';
import css from './Statistics.module.css';
export function Statistics({ stats }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.statList}>
        {stats.map(stat => {
          return (
            <li key={stat.id} className={css.element}>
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

Statistics.propTypes = {
	data:PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
	})
};
