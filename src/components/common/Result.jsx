import React, { useState, useEffect } from 'react';

const Result = ({ tournamentData }) => {
  const [tournamentName, setTournamentName] = useState('');
  const [tournamentStartDate, setTournamentStartDate] = useState('');
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    setTournamentName(tournamentData.name);
    setTournamentStartDate(tournamentData.startDate);
    setTeamData(tournamentData.teams);
  }, [tournamentData]);

  return (
    <div className='p-4 pt-2 w-fit pl-0 bg-secondary rounded-3xl mb-4 m-2'>
      {/* Title */}
      <div className='flex items-center justify-center pt-3'>
        <div className='h-12 w-12 flex items-center justify-center '>
          {/* Si el logo del torneo es dinámico,  se puede establecer su src como 'tournamentData.logo' */}
          <img
            src='/public/images/Juventus.svg'
            alt='Torneo A Logo'
            className='h-16 w-16'
          />
        </div>
        <h1 className='text-2xl font-Sans Pro  ml-4'>{tournamentName}</h1>
        <p className='text-warning  font-Sans Pro mt-2 ml-10'>
          {tournamentStartDate}
        </p>
      </div>
      {/* Table */}
      <table className='w-full'>
        {/* Table Header */}
        <thead>
          <tr className='text-base-100 text-left'>
            <th className='p-2'>#</th>
            <th className='p-2'>Equipos</th>
            <th className='p-2 border-b border-primary'>TA</th>
            <th className='p-2 border-b border-primary'>TR</th>
            <th className='p-2 border-b border-primary'>L</th>
            <th className='p-2 border-b border-primary'>GL</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {/* Renderizando las filas de la tabla basadas en los datos del equipo */}
          {teamData.map((team, index) => (
            <tr key={team.id}>
              <th className='p-2'>{index + 1}</th>
              <td className='flex flex-row space-x-2 p-2 pr-8'>
                {/* Si los logos de los equipos son dinámicos, puedes establecer su src como 'team.logo' */}
                <img src={team.logo} alt={team.name} />
                <div>{team.name}</div>
              </td>
              <td className='p-2 border-b border-primary'>{team.ta}</td>
              <td className='p-2 border-b border-primary'>{team.tr}</td>
              <td className='p-2 border-b border-primary'>{team.l}</td>
              <td className='p-2 border-b border-primary'>{team.gl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
