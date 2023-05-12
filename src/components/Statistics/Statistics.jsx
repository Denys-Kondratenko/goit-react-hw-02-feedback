import PropTypes from 'prop-types';

import { StatItem, StatTitle } from './Statistics.styled';

export const Statistics = ({ values, options, children }) => {
  return (
    <ul>
      {options.map((item, i) => {
        return (
          <StatItem key={i}>
            <StatTitle>{item}:</StatTitle>
            <span> {values[item]}</span>
          </StatItem>
        );
      })}
      {children}
    </ul>
  );
};

Statistics.propTypes = {
  values: PropTypes.object,
  options: PropTypes.arrayOf(PropTypes.string),
};
