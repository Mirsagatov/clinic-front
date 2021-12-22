import React from 'react';
import useToken from './Hooks/useToken';

function Register() {
	const [setToken] = useToken(true);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const { userName,email, password } = evt.target.elements;

		fetch('http://localhost:9000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				userName: userName.value.trim(),
                email: email.value.trim(),
				password: password.value.trim(),
			}),
		})
			.then((response) => response.json())
			.then((data) => setToken(data));
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Register</h2>

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
					type='email'
					placeholder='email'
					name='email'
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

			<button>Register</button>
		</form>
	);
}

export default Register;
