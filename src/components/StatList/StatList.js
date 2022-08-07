import PropTypes from 'prop-types';
import data from '../data.json';
export const StatList = () => {
  return (
    <>
      {data.map(item => (
        <li key={item.id}>
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}%.</span>
        </li>
      ))}
    </>
  );
};

data.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};
