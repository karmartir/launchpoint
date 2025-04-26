import React, { useState } from 'react';

const ReplyForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [status, setStatus] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (name.trim() && message.trim() && emailRegex.test(email)) {
			setStatus('Sent successfully!');
		} else {
			setStatus('Please fill out all fields with valid information.');
		}

		setTimeout(() => {
			setName('');
			setEmail('');
			setMessage('');
			setStatus('');
		}, 3000);
	};

	return (
		<div className="reply-form-container" style={{marginBottom: '30px', textAlign: 'center' }}>
			<h5
				style={{
					color: 'white',
					fontFamily: 'Julius Sans One, sans-serif',
					marginBottom: '25px',
				}}
			>
				Fill out the form below
			</h5>
			<form onSubmit={handleSubmit} style={{ margin: '0 auto' }}>
				<div className="mb-3">
					<input
						type="text"
						className="form-control"
						placeholder="Your Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						style={{
							backgroundColor: 'rgba(255, 255, 255, 0.05)',
							border: '1px solid rgba(255, 255, 255, 0.3)',
							color: 'white',
							borderRadius: '8px',
							padding: '10px',
						}}
					/>
				</div>
				<div className="mb-3">
					<input
						type="email"
						className="form-control"
						placeholder="Your Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						style={{
							backgroundColor: 'rgba(255, 255, 255, 0.05)',
							border: '1px solid rgba(255, 255, 255, 0.3)',
							color: 'white',
							borderRadius: '8px',
							padding: '10px',
						}}
					/>
				</div>
				<div className="mb-3">
					<textarea
						className="form-control"
						placeholder="Your Message"
						rows="4"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						style={{
							backgroundColor: 'rgba(255, 255, 255, 0.05)',
							border: '1px solid rgba(255, 255, 255, 0.3)',
							color: 'white',
							borderRadius: '8px',
							padding: '10px',
						}}
					></textarea>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					style={{
						borderRadius: '8px',
						padding: '10px 20px',
						backgroundColor: '#0A1523',
						border: '1px solid white',
					}}
				>
					Send
				</button>
			</form>
			{status && <div className="mt-3 text-success">{status}</div>}
		</div>
	);
};

export default ReplyForm;