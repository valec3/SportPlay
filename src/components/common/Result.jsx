import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamsTournament, resetTeamsTournament } from '../../redux/featuresSlice/teamsPerTournamentSlice';
import axios from 'axios';

const Result = ({ id, name, teams_count, logo, status }) => {
  const [allTeamsTournament, setAllTeamsTournament] = useState([])
  const dispatch = useDispatch();
  //const allTeamsTournament = useSelector((state) => state.allTeamsTournament.allTeamsTournament);
  const apiTeamsOfTournamentURL = `https://tournament-sport.onrender.com/api/tournament/tournament-teams?id=${id}`;

	useEffect(() => {	
		window.scrollTo({
		  top:0,
		  behavior:'smooth'
		})
		
				// dispatch(resetTeamsTournament())
				const fetchDataTeams = async () => {
					try {
					  const res = await axios.get(apiTeamsOfTournamentURL);
					  //console.log(res.data.teams);					  
					  // dispatch(getTeamsTournament(res.data.teams))
            setAllTeamsTournament(res.data.teams)
					} catch (er) {
					  console.log(er);
					}
				  };
				fetchDataTeams();
				
	}, []);
  
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
		
			]

    const trunName = name.slice(0, 18);

    console.log("torneos",  allTeamsTournament)

  return (
    <div className='py-5 w-full px-5 sm:w-[90%] md:w-[70%] lg:px-10 bg-secondary rounded-3xl mb-4 m-2 mt-8'>
      {/* Title */}
      <div className='flex items-center justify-between pt-31 py-2'>
       <div className='flex pl-2'>
          <div className='rounded-full bg-neutral w-[40px] h-[40px] ml-1.5 flex justify-center items-center'>
            {/* Si el logo del torneo es dinámico,  se puede establecer su src como 'tournamentData.logo' */}
            <img
              src={logo==null||logo==''?'icons/trophy.png':logo}
              alt='Torneo A Logo'
              className={`${logo == null || logo == '' ? 'w-[25px] h-[25px]' : 'p-0.5 w-[40px] h-[40px] rounded-full'}`}
            />
          </div>
          <h1 className='text-lg font-Sans Pro truncate ml-4 py-2'>{trunName}</h1>
        </div>
        <p className='text-warning  font-SourceSansPro text-[14px] mt-2 ml-10 pr-2'>
          {startDate}
        </p>
      </div>
      {/* Table */}
      <table className='w-full text-[14px]'>
        {/* Table Header */}
        <thead>
          <tr className='text-base-100 text-left'>
            <th className='p-1.5'></th>
            <th className='p-1.5'>EQUIPOS</th>
            <th className='p-1.5 border-b border-primary'>TA</th>
            <th className='p-1.5 border-b border-primary'>TR</th>
            <th className='p-1.5 border-b border-primary'>L</th>
            <th className='p-1.5 border-b border-primary'>GL</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {/* Renderizando las filas de la tabla basadas en los datos del equipo */}
          {allTeamsTournament.length>0?(allTeamsTournament.map((team, index) => (
            <tr key={team.id}>
              <th className='p-1.5'>{index + 1}</th>
              <td className='flex flex-row space-x-2 p-1.5 pr-8'>
                {/* Si los logos de los equipos son dinámicos, puedes establecer su src como 'team.logo' */}
                <div className='rounded-full bg-neutral w-[40px] h-[40px] ml-1 flex justify-center items-center'>
                  <img
                    className={`${team.logo_url == null || team.logo_url == '' ? 'w-[25px] h-[25px]' : 'p-0.5 w-[40px] h-[40px] rounded-full'}`}
                    src={team.logo_url == null || team.logo_url == '' ? 'icons/trophy.png' : team.logo_url}
                    alt='Real Madrid'
                  />
                  </div>
                <div className="py-2">{team.name}</div>
              </td>
              <td className='p-1.5 border-b border-primary'>{teams[0].ta}</td>
              <td className='p-1.5 border-b border-primary'>{teams[0].tr}</td>
              <td className='p-1.5 border-b border-primary'>{teams[0].l}</td>
              <td className='p-1.5 border-b border-primary'>{teams[0].gl}</td>
            </tr>
          ))):<></>}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
