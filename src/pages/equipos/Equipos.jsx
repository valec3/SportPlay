import React from 'react';
import { useSelector } from 'react-redux';
import PeticionAllTournaments from '../../components/common/PeticionAllTournaments'; 

const Equipos = () => {
  // Obtén los equipos del estado global
  const allTeams = useSelector((state) => state.allTeams.allTeams);

  // Función para unirse a un equipo (aquí puedes implementar la lógica según tus necesidades)
  const handleJoinTeam = (teamId) => {
    console.log(`Te has unido al equipo con ID ${teamId}`);
  };

  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl font-bold text-center mb-12 pt-4">Equipos</h1>
      {/* Renderiza la lista de equipos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allTeams.map((team) => (
          <div key={team.id} className='bg-secondary w-[170px] h-[180px] flex flex-col items-center justify-center p-8 rounded-[18px]  mb-9 mx-auto  drop-shadow-[3px_3px_2px_rgba(0,0,0,0.5)]'>
            {/* Renderiza el logo del equipo */}
            <img src={team.logo} alt={team.name} className={`${team.logo_url == null || team.logo_url == '' ? 'w-[35px] h-[35px] ' : 'p-0.5 w-[40px] h-[40px] rounded-full'}`}
					src={team.logo_url == null || team.logo_url == '' ? 'icons/trophy.png' : team.logo_url} />
            {/* Renderiza el nombre del equipo */}
            <h2 className="text-xl font-semibold text-center">{team.name}</h2>
            {/* Botón "Unirme" */}
            <button
              className='bg-accent text-base-100 px-9 py-2 font-bold rounded-[16px] mt-4 focus:outline-none focus:ring focus:ring-blue-200'
              onClick={() => handleJoinTeam(team.id)}
            >
              Unirme
            </button>
          </div>
        ))}
      </div>
      <PeticionAllTournaments />
    </div>
  );
};

export default Equipos;
