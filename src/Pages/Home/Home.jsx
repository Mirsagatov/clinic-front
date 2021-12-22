import React from 'react';
import { Link } from 'react-router-dom';
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";

// Components

function Home() {
	const [data, setData] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const [page, setPage] = React.useState(1);
	const [isNextDisabled, setIsNextDisabled] = React.useState(false);

	React.useEffect(() => {
		fetch('http://localhost:9000/clinics?page=' + page)
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			});

		fetch('http://localhost:9000/clinics?page=' + (page + 1))
			.then((response) => response.json())
			.then((data) => {
				if (data.length) {
					setIsNextDisabled(false);
				} else {
					setIsNextDisabled(true);
				}
			});
	}, [page]);

	return (
		<>
			<h2>Clinics</h2>

			{loading && <p>Loading ....</p>}

			{data.length > 0 &&
				data.map((row) => (
					<Link to={`/services/${row.clinic_id}`}>
					    <li key={row.clinic_id}>
						    <div>
							    <img
								    src='https://www.exp.com/wp-content/uploads/2017/07/healthcare_UC-San-Diego-Sulpizio-Cardio-Center_featured_01.jpg'
								    alt={row.clinic_name+'image'}
								    width={300}
								    height={150}
							    />
						    </div>
							<h2>{row.clinic_name} Clinic </h2>
					    </li>
					</Link>
				))}

			<button
				onClick={() => setPage(page - 1)}
				disabled={page < 2 ? true : false}>
				<TiArrowLeftOutline/> prev
			</button>
			<button onClick={() => setPage(page + 1)} disabled={isNextDisabled}>
				next <TiArrowRightOutline/>
			</button>
		</>
	);
}

export default Home;
