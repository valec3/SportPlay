import { useSelector } from 'react-redux';
import useFetchTournaments from '../../hooks/useFetchTournaments';
import useFetchTeams from '../../hooks/useFetchTeams';
import { useEffect, useState } from 'react';
const Equipos = () => {
    const allTeams = useSelector((state) => state.allTeams.allTeams);
    const [currentPage, setCurrentPage] = useState(1);
    const [teamsToShow, setTeamsToShow] = useState([]);
    const handleJoinTeam = (teamId) => {
        console.log(`Te has unido al equipo con ID ${teamId}`);
    };
    const handleScroll = () => {
        if (
            window.scrollY + window.innerHeight >= document.body.scrollHeight &&
            allTeams.length > 12 + currentPage * 8
        ) {
            console.log('Llegaste al final de la página');
            setCurrentPage((currentPage) => currentPage + 1);
        }
    };
    useFetchTournaments();
    useFetchTeams();
    useEffect(() => {
        setTeamsToShow(allTeams.slice(0, 12 + currentPage * 8));
    }, [allTeams, currentPage]);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [allTeams, currentPage]);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold text-center mb-12 ">Equipos</h1>
            {allTeams.length === 0 && (
                <div className="flex items-center justify-center h-[50vh]">
                    <h2 className="text-2xl font-bold text-center">No hay equipos disponibles</h2>
                </div>
            )}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[85%] m-auto" id="teams">
                {teamsToShow.map((team, idx) => (
                    <div
                        key={team.id}
                        className="bg-secondary w-[170px] h-[180px] flex flex-col items-center justify-center p-8 rounded-[18px]  mb-9 mx-auto  drop-shadow-[3px_3px_2px_rgba(0,0,0,0.5)]"
                    >
                        <img
                            decoding="async"
                            loading={idx < 10 ? 'eager' : 'lazy'}
                            alt={team.name}
                            width={40}
                            height={40}
                            className={`${
                                !team?.logo_url ? 'w-[35px] h-[35px] ' : 'p-0.5 w-[40px] h-[40px] rounded-full'
                            }`}
                            src={!team.logo_url ? 'icons/trophy.png' : team.logo_url}
                        />
                        <h2 className="font-semibold text-center">{team.name}</h2>
                        <button
                            className="h-35 bg-accent text-base-100 px-9 py-2 font-bold rounded-[16px] mt-4 focus:outline-none focus:ring focus:ring-blue-200"
                            onClick={() => handleJoinTeam(team.id)}
                        >
                            Unirme
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Equipos;
