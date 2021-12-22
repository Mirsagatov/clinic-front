import React from 'react';
// import { Link } from 'react-router-dom';

function Posts() {
	const [data, setData] = React.useState([]);


	React.useEffect(() => {
		fetch('http://localhost:9000/doctors')
			.then((response) => response.json())
			.then((data) => setData(data));
	}, []);

	return (
		<>
			<h2>Doctors</h2>

			<ul>
				{data.length &&
					data.map((row) => (
						// <Link to={'/doctors' + row.doctor_id}>
						<li key={row.doctor_id}>
							<h2>{row.doctor_name}</h2>
						</li>
						// </Link>
					))}
			</ul>
		</>
	);
}

export default Posts;
