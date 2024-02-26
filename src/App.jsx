import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Modals from './components/FormComponents/Modals';
import TorneosAbiertos from './pages/torneosAbiertos/TorneosAbiertos';
import DetalleTorneoAbierto from './pages/torneosAbiertos/detalleTorneoAbierto/DetalleTorneoAbierto';
import ResultadosTorneos from './pages/resultadosTorneos/ResultadosTorneos';
import Partidos from './pages/partidos/Partidos';
import Equipos from './pages/equipos/Equipos';
import Perfil from './pages/perfil/Perfil';

function App() {
	return (
		<>
			<BrowserRouter>		
				<div className='bg-primary text-base-100 min-h-screen flex flex-col'>
					<Header />
					<main className=''>					
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/TorneosAbiertos' element={<TorneosAbiertos/>} />
								<Route path='/ResultadosTorneos' element={<ResultadosTorneos/>} />
								<Route path='/DetalleTorneoAbierto' element={<DetalleTorneoAbierto/>} />
								<Route path='/Partidos' element={<Partidos/>} />
								<Route path='/Equipos' element={<Equipos/>} />
								<Route path='/Perfil' element={<Perfil/>} />

							</Routes>					
					</main>				
					<Footer />
					<Modals/>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
