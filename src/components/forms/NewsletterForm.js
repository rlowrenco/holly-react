import React, { Component } from 'react';
import classnames from 'classnames';

class NewsletterForm extends Component {
	constructor(props) {
		super(props);
		this.state = { email: '' };
	}

	render() {
		const { className, submit = 'Submit' } = this.props;
		const { email } = this.state;

		return (
			<form
				className={classnames(
					'newsletter-form field field-grouped is-revealing',
					className
				)}
				action="example"
				method="GET"
			>
				<div className="control control-expanded">
					<input
						className="input"
						type="text"
						name="transaction"
						placeholder="Insert the messageId or a bech32 address"
					/>
				</div>
				<div className="control">
					<button
						className="button button-primary button-block button-shadow"
						type="submit"
					>
						{submit}
					</button>
				</div>
			</form>
		);
	}
}

export default NewsletterForm;
