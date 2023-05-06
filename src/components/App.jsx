import { Component } from 'react';
import { FeedbackButtons } from './FeedbackButtons/FeedbackButtons';
import { FeedbackStatistics } from './FeedbackStatistics/FeedbackStatistics';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  handleClick = event => {
    this.setState(prevState => {
      return {
        good:
          event.target.dataset.action === 'good'
            ? prevState.good + 1
            : prevState.good,
        neutral:
          event.target.dataset.action === 'neutral'
            ? prevState.neutral + 1
            : prevState.neutral,
        bad:
          event.target.dataset.action === 'bad'
            ? prevState.bad + 1
            : prevState.bad,
        total: prevState.total + 1,
      };
    });

    this.setState(prevState => {
      return {
        positivePercentage: Math.round(
          (prevState.good / prevState.total) * 100
        ),
      };
    });
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.total + 1,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positivePercentage: Math.round(
          (prevState.good / prevState.total) * 100
        ),
      };
    });
  };

  render() {
    return (
      <Layout>
        <FeedbackButtons onClick={this.handleClick} />
        <FeedbackStatistics feedback={this.state} />
        <GlobalStyle />
      </Layout>
    );
  }
}
