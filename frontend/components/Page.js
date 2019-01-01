import React, { Component } from 'react';
import styled, {ThemeProvider, injectGlobal} from 'styled-components';
import Meta from '../components/Meta';
import Header from '../components/Header';
import Footer from '../components/Footer';

const theme = {
	red: '#47BEE9',
	black: '#292727',
	grey: '#3A3A3A',
	lightgrey: '#E1E1E1',
	offWhite: '#EDEDED',
	maxWidth: '1000px',
	bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',

};

const StyledPage = styled.div`
	background: white;
	height: 100%;
	color: ${ props => props.theme.black };
`;

const Inner = styled.div`
	max-width: ${ props => props.theme.maxWidth };
	margin: 0 auto;
	padding: 2rem;
	margin-bottom: 40px;
	overflow: scroll;
`;

injectGlobal`
	@font-face {
		font-family: 'radnika_next';
		src: url('/static/radnikanext-medium-webfont.woff2') format ('woff2');
		font-weight: normal;
		font-style: normal;
	}
	html {
		box-sizing: border-box;
		font-size: 10px;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	body {
		padding: 0;
		margin: 0;
		font-size: 1.5rem;
		line-height: 2;
		font-family: 'radnika_next';
	}
	a {
		text-decoration: none;
		color: ${ theme.black };
	}
`;

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={ theme }>
				<StyledPage>
					<Meta />
					<Header />
					<Inner>
						{ this.props.children }
					</Inner>
					<Footer />
				</StyledPage>
			</ThemeProvider>
		)
	}
}

export default Page;
