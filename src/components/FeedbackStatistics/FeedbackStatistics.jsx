export const FeedbackStatistics = ({
  feedback: { good, neutral, bad, total, positivePercentage },
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>
          <p>Good:</p>
          <span> {good}</span>
        </li>
        <li>
          <p>Neutral:</p>
          <span> {neutral}</span>
        </li>
        <li>
          <p>Bad:</p>
          <span> {bad}</span>
        </li>
        <li>
          <p>Total:</p>
          <span> {total}</span>
        </li>
        <li>
          <p>Positive feedback:</p>
          <span> {positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
};
