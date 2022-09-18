import {
	// StatisticsHead,
	StatisticsGood,
	StatisticsNeutral,
	StatisticsBad,
	StatisticsTotal,
	StatisticsPositive,
	// FeedBackStatisticsAccent,
} from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, totalPositive }) => {
	return (
		<>
			{/* <StatisticsHead>
				Statistics <FeedBackStatisticsAccent>:</FeedBackStatisticsAccent>
			</StatisticsHead> */}
			<StatisticsGood>Good: {good}</StatisticsGood>
			<StatisticsNeutral>Neutral: {neutral}</StatisticsNeutral>
			<StatisticsBad>Bad: {bad}</StatisticsBad>
			<StatisticsTotal>Total: {total}</StatisticsTotal>
			<StatisticsPositive>Positive: {totalPositive}%</StatisticsPositive>
		</>
	);
};
