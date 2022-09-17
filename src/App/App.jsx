import { Box } from 'Box/Box';
import { Container } from 'App/App.styled';
import Counter from 'components/Counter/Counter';

export const App = () => {
	return (
		<Container>
			<Box display="flex" justifyContent="center" flexWrap="wrap" pt={2}>
				<Box>
					<Counter />
				</Box>
			</Box>
		</Container>
	);
};
