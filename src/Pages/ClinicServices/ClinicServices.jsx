import React from 'react';
import { useParams } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';

function ClinicServices() {
	const { clinic_id } = useParams();
	const [data, setData] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	const history = useHistory();

	React.useEffect(() => {
		fetch(`http://localhost:9000/clinic/${clinic_id}`)
			.then((response) => response.json())
			.then((data) => {
				           setData(data);
                           setLoading(false);
						});
	}, [clinic_id]);

	return (
		<>
		    <div>
				<button onClick={() => history.goBack()}>GO BACK</button>
			    <h2>Services and sub-services</h2>
			</div>

			{loading && <p>Loading ....</p>}

			{data.length > 0 &&
				data.map((row) => (
					 <Link to={`/services/${row.clinic_id}`}>
					    <li key={row.clinic_id}>
							<h2>{row.clinic_name}</h2>
					    </li>
					 </Link>
				))}
		</>	
	);
}

export default ClinicServices;
