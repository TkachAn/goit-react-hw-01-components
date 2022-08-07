// import PropTypes from 'prop-types';
import css from './StatElement.module.css';
export const StatElement = ({ label, percentage }) => {
  return (
    <>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%.</span>
    </>
  );
};
// StatElement.propTypes = {
//   data: PropTypes.shape({
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired,
//   }),
// };
