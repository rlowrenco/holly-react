import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../layouts/index';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export default function TransactionInfo() {
	const query = useQuery();
	const input = query.get('transaction');
	console.log(query.get('transaction'));
	const [transactionId, setTransactionId] = useState();
	const apiUrl = `https://chrysalis-nodes.iota.org/api/v1/messages/${input}`;

	useEffect(() => {
		async function getTrans() {
			try {
				await fetch(apiUrl)
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						setTransactionId(data.data.payload.index);
					});
			} catch (error) {
				console.log(error);
			}
		}
		getTrans();
	}, [setTransactionId]);

	console.log(transactionId);
	return (
		<Layout>
			<article className="entry">
				<div className="container">
					<div className="entry-inner">
						<div className="entry-content">
							<div className="container-sm">
								<header className="entry-header">
									<h1 className="entry-title">Message</h1>
								</header>

								<div className="entry-body">{transactionId}</div>
							</div>
						</div>
					</div>
				</div>
			</article>
		</Layout>
	);
}
