import React, { Component } from 'react';

class Message extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messagesPerSec: 'null',
			refMessagesPerSec: 'null',
			milestoneIndex: 'null',
		};
	}

	componentDidMount() {
		const apiUrl = 'https://chrysalis-nodes.iota.org/api/v1/info';
		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					messagesPerSec: data.data.messagesPerSecond,
					refMessagesPerSec: data.data.referencedMessagesPerSecond,
					milestoneIndex: data.data.latestMilestoneIndex,
				});
			});
	}

	render() {
		const { messagesPerSec, refMessagesPerSec, milestoneIndex } = this.state;
		return (
			<section className="message" style={{ ZIndex: '2' }}>
				<div className="container" style={{ marginTop: '30%' }}>
					{messagesPerSec}
				</div>
				<div className="container" style={{ marginTop: '30%' }}>
					{refMessagesPerSec}
				</div>
				<div className="container" style={{ marginTop: '30%' }}>
					{milestoneIndex}
				</div>
			</section>
		);
	}
}

export default Message;
