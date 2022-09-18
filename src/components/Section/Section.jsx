import { Head, SectionTag } from './Section.styled';

export const Section = ({ title, children }) => {
	return (
		<SectionTag>
			<Head>{title}</Head>
			{children}
		</SectionTag>
	);
};
