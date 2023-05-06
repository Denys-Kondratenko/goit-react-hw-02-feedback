import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
    visible: false,
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
        visible: true,
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

  // countTotalFeedback = () => {
  //   this.setState(prevState => {
  //     return {
  //       total: prevState.total + 1,
  //     };
  //   });
  // };

  // countPositiveFeedbackPercentage = () => {
  //   this.setState(prevState => {
  //     return {
  //       positivePercentage: Math.round(
  //         (prevState.good / prevState.total) * 100
  //       ),
  //     };
  //   });
  // };

  render() {
    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleClick} />
        </Section>
        <Section title="Statistics">
          {!this.state.visible ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics feedback={this.state} />
          )}
        </Section>
        <GlobalStyle />
      </Layout>
    );
  }
}
