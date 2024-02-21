import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

import Footer from './components/Footer';
import CrearTorneo from './pages/crear-torneo/CrearTorneo';

function App() {
	return (
		<>
			<div className='bg-primary  text-base-100 min-h-screen flex flex-col'>
				{/* header */}

				<main className=''>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='crear-torneo' element={<CrearTorneo />} />
						</Routes>
					</BrowserRouter>
				</main>
				{/* footer */}
				<Footer />
			</div>
		</>
	);
}

export default App;
