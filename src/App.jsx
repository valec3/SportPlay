import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import CrearTorneo from './pages/crear-torneo/CrearTorneo';

function App() {
	return (
		<>
			<div className='bg-primary  text-base-100 min-h-screen flex flex-col space-y-4'>
				{/* header */}
				<Header />
				<main className=''>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='crear-torneo' element={<CrearTorneo />} />
						</Routes>
					</BrowserRouter>
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App;
