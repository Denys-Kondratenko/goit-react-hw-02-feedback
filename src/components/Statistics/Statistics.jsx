import { StatItem } from './Statistics.styled';

export const Statistics = ({
  feedback: { good, neutral, bad, total, positivePercentage, visible },
}) => {
  return (
    <ul>
      <StatItem>
        <p>Good:</p>
        <span> {good}</span>
      </StatItem>
      <StatItem>
        <p>Neutral:</p>
        <span> {neutral}</span>
      </StatItem>
      <StatItem>
        <p>Bad:</p>
        <span> {bad}</span>
      </StatItem>
      <StatItem>
        <p>Total:</p>
        <span> {total}</span>
      </StatItem>
      <StatItem>
        <p>Positive feedback:</p>
        <span> {positivePercentage}%</span>
      </StatItem>
    </ul>
  );
};
