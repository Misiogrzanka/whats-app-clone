import React from 'react';
import { Login } from '../components/Login';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from '../components/Dashboard';

function App() {
	const [ID, setID] = useLocalStorage('ID');

	return <>{ID ? <Dashboard ID={ID} /> : <Login onIDSubmit={setID} />}</>;
}

export default App;
