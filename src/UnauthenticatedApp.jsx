import React from 'react';

import useToken from './Hooks/useToken';
// import { Link} from 'react-router-dom';

function UnauthenticatedApp() {
	const [setToken] = useToken(true);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const { userName, password } = evt.target.elements;

		fetch('http://localhost:9000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				userName: userName.value.trim(),
				password: password.value.trim(),
			}),
		})
			.then((response) => response.json())
			.then((data) => setToken(data));
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div>
				<input
					type='text'
					placeholder='username'
					name='userName'
					required
				/>
			</div>

			<div>
				<input
					type='password'
					placeholder='password'
					name='password'
					required
				/>
			</div>

			<button>Log in</button>

		</form>
	);
}

export default UnauthenticatedApp;
