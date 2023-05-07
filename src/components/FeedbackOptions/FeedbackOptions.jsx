import { ButtonList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <ButtonList>
      {options.map((item, i) => {
        return (
          <li key={i}>
            <Button type="button" onClick={() => onLeaveFeedback(item)}>
              {item}
            </Button>
          </li>
        );
      })}
    </ButtonList>
  );
};
