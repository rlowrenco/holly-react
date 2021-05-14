import React from 'react';

import Main from '../components/layout/Main';
import Footer from '../components/layout/Footer';

export default function Layout({ children }) {
	return (
		<div className="body-wrap boxed-container">
			<Main>{children}</Main>
			<Footer />
		</div>
	);
}
