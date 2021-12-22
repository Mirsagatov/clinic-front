import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

// Pages
import Home from './Pages/Home/Home';
import ClinicServices from './Pages/ClinicServices/ClinicServices';
import Doctors from './Pages/Doctors/Doctors';
import Services from './Pages/Services/Services';

function AuthenticatedApp() {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<NavLink
								to='/'
								activeClassName='nav__link--active'
								exact>
								Clinics
							</NavLink>
						</li>
						
						<li>
							<NavLink
								to='/services'
								activeClassName='nav__link--active'>
								Services
							</NavLink>
						</li>

						<li>
							<NavLink
								to='/doctors'
								activeClassName='nav__link--active'>
								Doctors
							</NavLink>
						</li>

						<li>
							<NavLink
								to='/queue'
								activeClassName='nav__link--active'>
								Queues
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>

			<main>
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/doctors' component={Doctors} exact />
					<Route path ='/services' component={Services} exact />
					<Route path='/services/:clinic_id' component={ClinicServices} exact />
				</Switch>
			</main>
		</>
	);
}

export default AuthenticatedApp;
