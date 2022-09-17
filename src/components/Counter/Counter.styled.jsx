import styled from '@emotion/styled';

export const FeedBackHead = styled.h2`
	text-align: center;
	color: #2d2c3e;
`;
export const FeedBackHeadAccent = styled.span`
	color: #eb9532;
`;
export const FeedBackBtnWrapper = styled.div`
	width: 300px;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;
export const FeedBackBtnGood = styled.button`
	display: block;
	width: 70px;
	padding: 8px;
	border-radius: 4px;
	border: none;
	cursor: pointer;
	background-color: #2d2c3e;
	color: #ffffff;
	transition: 250ms background-color ease-in-out;

	:hover,
	:focus {
		background-color: #16a085;
	}
`;

export const FeedBackBtnNeutral = styled.button`
	display: block;
	width: 70px;
	padding: 8px;
	border-radius: 4px;
	border: none;
	cursor: pointer;
	background-color: #2d2c3e;
	color: #ffffff;
	transition: 250ms background-color ease-in-out;

	:hover,
	:focus {
		background-color: #eb9532;
	}
`;

export const FeedBackBtnBad = styled.button`
	display: block;
	width: 70px;
	padding: 8px;
	border-radius: 4px;
	border: none;
	cursor: pointer;
	background-color: #2d2c3e;
	color: #ffffff;
	transition: 250ms background-color ease-in-out;

	:hover,
	:focus {
		background-color: #c82647;
	}
`;

export const StatisticsHead = styled.h2`
	color: #2d2c3e;
`;
export const FeedBackStatisticsAccent = styled.span`
	color: #eb9532;
`;
export const StatisticsGood = styled.p`
	padding: 16px;
	background-color: #16a085;
	color: #ffffff;
`;
export const StatisticsNeutral = styled.p`
	padding: 16px;
	background-color: #eb9532;
	color: #ffffff;
`;
export const StatisticsBad = styled.p`
	padding: 16px;
	background-color: #c82647;
	color: #ffffff;
`;

export const StatisticsTotal = styled.p`
	padding: 16px;
	background-color: #8cc63f;
	color: #ffffff;
`;

export const StatisticsPositive = styled.p`
	padding: 16px;
	background-color: #7e3661;
	color: #ffffff;
`;
