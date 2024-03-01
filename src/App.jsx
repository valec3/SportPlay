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
import Activity from './components/modal/Activity';
<<<<<<< HEAD
import AdminTorneo from './pages/administrarTorneo/AdminTorneo';
=======
import CrearTorneo from './pages/crear-torneo/CrearTorneo';
>>>>>>> dev-front

function App() {
	return (
		<BrowserRouter>
			<div className='bg-primary text-base-100 h-screen flex flex-col relative z-0'>
				<Header />
				<main className='bg-primary'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/TorneosAbiertos' element={<TorneosAbiertos />} />
						<Route path='/ResultadosTorneos' element={<ResultadosTorneos />} />
						<Route
							path='/DetalleTorneoAbierto/:id'
							element={<DetalleTorneoAbierto />}
						/>
						<Route path='/Partidos' element={<Partidos />} />
						<Route path='/Equipos' element={<Equipos />} />
						<Route path='/Perfil' element={<Perfil />} />
						<Route path='/Modals' element={<Modals />} />
						<Route path='/Activity' element={<Activity />} />
						<Route path='/administrar-torneo' element={<AdminTorneo />} />
						<Route path='crear-torneo' element={<CrearTorneo />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
