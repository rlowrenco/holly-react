import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';
import Message from '../components/Messages/Message';

export default function IndexPage() {
	return (
		<Layout>
			<Hero
				title="Search through our node network"
				content="Our landing page template works for all the devices, so you only have to setup it once, and get beautiful results forever."
			/>
			<Message />
		</Layout>
	);
}
