import { StatItem, StatTitle } from './Statistics.styled';

export const Statistics = ({
  values,
  options,
  total,
  positivePercentage,
  totalTitle,
  percentageTitle,
}) => {
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
        <StatTitle>{totalTitle}:</StatTitle>
        <span> {total}</span>
      </StatItem>
      <StatItem>
        <StatTitle>{percentageTitle}:</StatTitle>
        <span> {positivePercentage}%</span>
      </StatItem>
    </ul>
  );
};
