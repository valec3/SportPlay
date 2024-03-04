import React, { useState, useEffect } from 'react';

const Result = ({  name, teams_count, logo, status }) => {
  
  const startDate = '6 de mayo 2024'
  const teams = [
				{
					id: 1,
					name: 'Atlético Madrid',
					logo: 'images/atletico.svg',
					ta: 0,
					tr: 1,
					l: 6,
					gl: 4,
				},
				{
					id: 2,
					name: 'Real Madrid',
					logo: 'images/realmadrid.svg',
					ta: 0,
					tr: 3,
					l: 7,
					gl: 2,
				},
				{
					id: 3,
					name: 'Barcelona',
					logo: 'images/barcelona.svg',
					ta: 0,
					tr: 4,
					l: 9,
					gl: 1,
				},
				{
					id: 4,
					name: 'Villarreal',
					logo: 'images/villareal.svg',
					ta: 0,
					tr: 2,
					l: 10,
					gl: 0,
				},
			]

  

  return (
    <div className='py-1 w-fit px-1 bg-secondary rounded-3xl mb-4 m-2'>
      {/* Title */}
      <div className='flex items-center justify-center pt-3'>
        <div className='rounded-full bg-neutral w-[40px] h-[40px] ml-1.5 flex justify-center items-center'>
          {/* Si el logo del torneo es dinámico,  se puede establecer su src como 'tournamentData.logo' */}
          <img
            src={logo==null||logo==''?'icons/trophy.png':logo}
            alt='Torneo A Logo'
            className={`${logo == null || logo == '' ? 'w-[25px] h-[25px]' : 'p-0.5 w-[40px] h-[40px] rounded-full'}`}
          />
        </div>
        <h1 className='text-lg font-Sans Pro truncate ml-4'>{name}</h1>
        <p className='text-warning  font-SourceSansPro text-[14px] mt-2 ml-10'>
          {startDate}
        </p>
      </div>
      {/* Table */}
      <table className='w-full'>
        {/* Table Header */}
        <thead>
          <tr className='text-base-100 text-left'>
            <th className='p-1.5'>#</th>
            <th className='p-1.5'>Equipos</th>
            <th className='p-1.5 border-b border-primary'>TA</th>
            <th className='p-1.5 border-b border-primary'>TR</th>
            <th className='p-1.5 border-b border-primary'>L</th>
            <th className='p-1.5 border-b border-primary'>GL</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {/* Renderizando las filas de la tabla basadas en los datos del equipo */}
          {teams.map((team, index) => (
            <tr key={team.id}>
              <th className='p-1.5'>{index + 1}</th>
              <td className='flex flex-row space-x-2 p-1.5 pr-8'>
                {/* Si los logos de los equipos son dinámicos, puedes establecer su src como 'team.logo' */}
                <img src={team.logo} alt={team.name} />
                <div>{team.name}</div>
              </td>
              <td className='p-1.5 border-b border-primary'>{team.ta}</td>
              <td className='p-1.5 border-b border-primary'>{team.tr}</td>
              <td className='p-1.5 border-b border-primary'>{team.l}</td>
              <td className='p-1.5 border-b border-primary'>{team.gl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
