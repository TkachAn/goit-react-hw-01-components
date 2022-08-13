import PropTypes from 'prop-types';
// import { StatElement } from '../StatElement/StatElement';
import css from './Statistics.module.css';
export function Statistics({ stats, title }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(item => {
          return (
            <li key={item.id} className={css.element}>
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}%.</span>
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
};
