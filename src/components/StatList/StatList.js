//import { Item } from 'components/StatItem/StatItem';
//import { StatInfo } from './StatList.styled';
import data from '../data.json';
export const StatList = () => {
  return (
    <>
      {data.map(item => (
        <li key={item.id}>
          <span className="label">{item.label}</span>:{' . . . . . '}
          <span className="percentage">{item.percentage}</span>%.
        </li>
      ))}
    </>
  );
};
