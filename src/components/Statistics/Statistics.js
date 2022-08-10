import PropTypes from 'prop-types';
import { StatElement } from '../StatElement/StatElement';
import css from './Statistics.module.css';
export function Statistics({ stats, title }) {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
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
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
  stat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
