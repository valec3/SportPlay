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
import AdminTorneo from './pages/administrarTorneo/AdminTorneo';
import CrearTorneo from './pages/crear-torneo/CrearTorneo';
import OrganizeGames from './pages/partidos/OrganizeGames';
import Addplayer from './modal/AddPlayer';
import AdminResult from './pages/adminResultados/AdminResults';
import AdministrarEquipos from './pages/administrarEquipos/AdministrarEquipos';
import LoadResults from './pages/cargarResultados/LoadResults';

function App() {
    return (
        <BrowserRouter>
            <div className="text-base-100 h-screen flex flex-col relative z-0" id="container-app">
                <div className="-z-10 fixed top-0 left-0 h-screen w-screen lg:bg-hero lg:bg-[#2F2F42] lg:bg-cover"></div>
                <div className="lg:w-[1024px] lg:mx-auto bg-primary h-full flex flex-col">
                    <Header />
                    <main className="bg-primary">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/TorneosAbiertos" element={<TorneosAbiertos />} />
                            <Route path="/ResultadosTorneos" element={<ResultadosTorneos />} />
                            <Route path="/DetalleTorneoAbierto/:id" element={<DetalleTorneoAbierto />} />
                            <Route path="/Partidos" element={<Partidos />} />
                            <Route path="/Equipos" element={<Equipos />} />
                            <Route path="/administrar-equipos" element={<AdministrarEquipos />} />
                            <Route path="/Perfil" element={<Perfil />} />
                            <Route path="/Activity" element={<Activity />} />
                            <Route path="/administrar-torneo" element={<AdminTorneo />} />
                            <Route path="/crear-torneo" element={<CrearTorneo />} />
                            <Route path="/addPlayer/:id" element={<Addplayer />} />
                            <Route path="/Admin-Resultados" element={<AdminResult />} />
                            <Route path="/cargar-resultados/:id" element={<LoadResults />} />
                            <Route path="/OrganizeGames/:id" element={<OrganizeGames />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
                <Modals />
            </div>
        </BrowserRouter>
    );
}
export default App;
