import { ButtonList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ButtonList>
      <li>
        <Button type="button" data-action="good" onClick={onLeaveFeedback}>
          Good
        </Button>
      </li>
      <li>
        <Button type="button" data-action="neutral" onClick={onLeaveFeedback}>
          Neutral
        </Button>
      </li>
      <li>
        <Button type="button" data-action="bad" onClick={onLeaveFeedback}>
          Bad
        </Button>
      </li>
    </ButtonList>
  );
};
