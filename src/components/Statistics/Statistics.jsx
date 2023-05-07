import { StatItem, StatTitle } from './Statistics.styled';

export const Statistics = ({ values, options, total, positivePercentage }) => {
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
      <StatItem>
        <StatTitle>total:</StatTitle>
        <span> {total}</span>
      </StatItem>
      <StatItem>
        <StatTitle>positive feedback:</StatTitle>
        <span> {positivePercentage}</span>
      </StatItem>
    </ul>
  );
};
