import { Component } from 'react';
import {
	FeedBackHead,
	FeedBackBtnGood,
	FeedBackBtnNeutral,
	FeedBackBtnBad,
	StatisticsHead,
	StatisticsGood,
	StatisticsNeutral,
	StatisticsBad,
	FeedBackBtnWrapper,
	FeedBackHeadAccent,
	FeedBackStatisticsAccent,
	StatisticsTotal,
	StatisticsPositive,
} from 'components/Counter/Counter.styled';

class Counter extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	handleIncrement = (el) => {
		this.setState(prevState => {
			return {
				[el]: prevState[el] + 1,
			};
		});
	};

	render() {
		return (
			<>
				<FeedBackHead>
					Please leave <FeedBackHeadAccent>feedback</FeedBackHeadAccent>
				</FeedBackHead>
				<FeedBackBtnWrapper>
					<FeedBackBtnGood type="button" onClick={this.handleIncrement}>
						Good
					</FeedBackBtnGood>
					<FeedBackBtnNeutral type="button" onClick={this.handleIncrement}>
						Neutral
					</FeedBackBtnNeutral>
					<FeedBackBtnBad type="button" onClick={this.handleIncrement}>
						Bad
					</FeedBackBtnBad>
				</FeedBackBtnWrapper>
				<StatisticsHead>
					Statistics <FeedBackStatisticsAccent>:</FeedBackStatisticsAccent>
				</StatisticsHead>
				<StatisticsGood>Good: {this.state.good}</StatisticsGood>
				<StatisticsNeutral>Neutral: {this.state.neutral}</StatisticsNeutral>
				<StatisticsBad>Bad: {this.state.bad}</StatisticsBad>
				<StatisticsTotal>Total: {this.state.total}</StatisticsTotal>
				<StatisticsPositive>
					Positive: {this.state.positive}%
				</StatisticsPositive>
			</>
		);
	}
}

export default Counter;
