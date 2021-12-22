import React from 'react';
import './App.scss';

import useToken from './Hooks/useToken';

import AuthenticatedApp from './AuthenticatedApp';
import Register from './Register';
import UnauthenticatedApp from './UnauthenticatedApp';

function App() {
	const [token] = useToken();

	if (token) {
		if(token.message==="You are not logged in, please try again"){
			return <Register />;
		} else {
			return <AuthenticatedApp />;
		} 
	} else {
		return <UnauthenticatedApp/>
	}
	
}

export default App;
