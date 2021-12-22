import React from 'react';
// import { Link } from 'react-router-dom';

function Services() {

	const [services, setServices] = React.useState([])
	const [loading, setLoading] = React.useState(true);



	React.useEffect(() => {
		fetch(`http://localhost:9000/clinic`)
			.then((response) => response.json())
			.then((data) => {
				           setServices(data);
                           setLoading(false);
						});
	});

	return (
		<>

			<h2>Services</h2>

			{loading && <p>Loading ....</p>}


            {services.length > 0 &&
		    services.map((row) => (
			    // <Link to={`/services/${row.clinic_id}`}>
				  <li key={row.clinic_id}>
					<h2>{row.clinic_name}</h2>

				  </li>
		        //  </Link>
        ))}			
		</>
		
	);
}

export default Services;
