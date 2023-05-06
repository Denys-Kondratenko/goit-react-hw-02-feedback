export const FeedbackButtons = ({ onClick }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <div>
        <ul>
          <li>
            <button type="button" data-action="good" onClick={onClick}>
              Good
            </button>
          </li>
          <li>
            <button type="button" data-action="neutral" onClick={onClick}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" data-action="bad" onClick={onClick}>
              Bad
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
