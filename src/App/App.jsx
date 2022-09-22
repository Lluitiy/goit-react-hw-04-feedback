import { Box } from 'Box/Box';
import { Container } from 'App/App.styled';
import { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';

export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	handleIncrement = el => {
		this.setState(prevState => {
			return {
				[el]: prevState[el] + 1,
			};
		});
	};

	handleTotal = () => {
		const arrValue = Object.values(this.state);
		return arrValue.reduce((acc, value) => {
			return acc + value;
		}, 0);
	};
	handlePositive = () => {
		const { good } = this.state;

		return Math.round((good / this.handleTotal()) * 100);
	};
	render() {
		const { good, neutral, bad } = this.state;
		return (
			<Container>
				<Box display="flex" justifyContent="center" flexWrap="wrap" pt={2}>
					<Box>
						<Section title="Leave your feedback">
							<FeedbackOptions
								options={Object.keys(this.state)}
								onLeaveFeedback={this.handleIncrement}
							/>
						</Section>
						<Section title="Statistics:">
							{this.handleTotal() ? (
								<Statistics
									good={good}
									neutral={neutral}
									bad={bad}
									total={this.handleTotal()}
									totalPositive={this.handlePositive()}
								/>
							) : (
								<Notification message="There is no feedback" />
							)}
						</Section>
					</Box>
				</Box>
			</Container>
		);
	}
}
