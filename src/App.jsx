import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<div className='bg-primary text-base-100 min-h-screen flex flex-col'>
				<Header />
				<main className=''>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Home />} />
						</Routes>
					</BrowserRouter>
				</main>
				<Footer />
			</div>
		</>
	);
}

export default App;
