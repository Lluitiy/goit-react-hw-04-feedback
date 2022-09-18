import {
	// FeedBackHead,
	FeedBackBtn,
	// FeedBackBtnNeutral,
	// FeedBackBtnBad,
	// FeedBackHeadAccent,
	FeedBackBtnWrapper,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<>
			<FeedBackBtnWrapper>
				{options.map(option => (
					<FeedBackBtn
						key={option}
						type="button"
						onClick={() => {
							onLeaveFeedback(option);
						}}
					>
						{option}
					</FeedBackBtn>
				))}
			</FeedBackBtnWrapper>
		</>
		// <>
		// 	<FeedBackHead>
		// 		Please leave <FeedBackHeadAccent>feedback</FeedBackHeadAccent>
		// 	</FeedBackHead>
		// 	<FeedBackBtnWrapper>
		// 		<FeedBackBtnGood type="button" onClick={this.handleIncrement}>
		// 			Good
		// 		</FeedBackBtnGood>
		// 		<FeedBackBtnNeutral type="button" onClick={this.handleIncrement}>
		// 			Neutral
		// 		</FeedBackBtnNeutral>
		// 		<FeedBackBtnBad type="button" onClick={this.handleIncrement}>
		// 			Bad
		// 		</FeedBackBtnBad>
		// 	</FeedBackBtnWrapper>
		// </>
	);
};
