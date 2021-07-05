import React from 'react';
import { Login } from '../components/Login';
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from '../components/Dashboard';
import { ContactsProvider } from '../context/ContactsProvider';

function App() {
	const [ID, setID] = useLocalStorage('ID');

	const dashboard = (
		<ContactsProvider>
			<Dashboard id={ID} />
		</ContactsProvider>
	);

	return <>{ID ? <Dashboard ID={ID} /> : <Login onIDSubmit={setID} />}</>;
}

export default App;
