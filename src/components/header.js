import React from 'react';

import TopNav from './top-nav';

import './header.css';

export default function Header(props) {
	return (
		<header>
			<TopNav/>
			<h1>Hot or cold</h1>
		</header>

		);
}