import React from 'react';
// import { Link } from 'react-router-dom';

function Doctors() {
	const [data, setData] = React.useState([]);


	React.useEffect(() => {
		fetch('http://localhost:9000/doctors')
			.then((response) => response.json())
			.then((data) => setData(data));
	});

	return (
		<>
			<h2>Doctors</h2>

			<ul>
				{data.length &&
					data.map((row) => (
						<li key={row.doctor_id}>
							<img src="https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/Public%20Opinion%20Research%201200x666.jpg?itok=Z9g0DOPe" alt= {row.doctor_name+'image'}
							width={300}
							height={150}/>
							<h2>{row.doctor_name}</h2>
						</li>
					))}
			</ul>
		</>
	);
}

export default Doctors;
