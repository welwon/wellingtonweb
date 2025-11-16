import './App.css';
import { Routes, Route } from 'react-router';
import { Navigation } from './navigation/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {
	return (
		<>
			<h1>React Router</h1>
			<Navigation />
			<Routes>
				<Route path="home" element={ <Home /> } />
				<Route path="about" element={ <About /> } />
			</Routes>
		</>
	);
}

export default App;
