import { useEffect, useState } from 'react';
import { getDataGameForTournament } from '../../services';
import { useSelector } from 'react-redux';

export default function ResultLastTournament() {
	const [teamsInTournament, setTeamsInTournament] = useState([]);
	const [lastTournamentId, setLastTournamentId] = useState(0);

	//find last tournament
	const allTournaments = useSelector(
		state => state.allTournaments.allTournaments
	);
	const findLastTournamentId = allTournaments => {
		let max = 0;
		allTournaments.forEach(obj => {
			if (obj.id > max) {
				max = obj.id;
			}
		});
		setLastTournamentId(max);
	};

	//get teams of tournament
	useEffect(() => {
		findLastTournamentId(allTournaments);

		const dataGamesOfTournamen = async () => {
			const { data } = await getDataGameForTournament(lastTournamentId || 54);
			setTeamsInTournament(data);
		};
		dataGamesOfTournamen();
	}, []);

	return (
		<div className='p-1 pt-0 w-full bg-secondary rounded-[16px] mb-4 lg:mx-4 lg:w-[87%]'>
			<table className='w-full mb-5'>
				{/* head */}
				<thead className=''>
					<tr className='text-base-100 text-left   '>
						<th className='p-1.5'></th>
						<th className='p-1.5 py-5'>Equipos</th>
						<th className='p-1.5 border-b border-primary'>TA</th>
						<th className='p-1.5 border-b border-primary'>TR</th>
						<th className='p-1.5 border-b border-primary'>L</th>
						<th className='p-1.5 border-b border-primary'>GL</th>
					</tr>
				</thead>
				<tbody className=''>
					{/* rows */}
					{teamsInTournament.map((tournament, index) => {
						return (
							<tr className='' key={index}>
								<th className='p-1.5'>{index + 1}</th>
								<td className='flex flex-row space-x-2 p-1.5 pr-8'>
									<img
										src={tournament.team_logo}
										alt='logo del equipo'
										className='w-[19px] h-[20px]'
									/>
									<div className='truncate md:truncate-none'>
										{tournament.team_name}
									</div>
								</td>
								<td className='p-1.5 border-b border-primary'>
									{tournament.yellow_cards}
								</td>
								<td className='p-1.5 border-b border-primary'>
									{tournament.red_cards}
								</td>
								<td className='p-1.5 border-b border-primary'>
									{tournament.injuries}
								</td>
								<td className='p-1.5 border-b border-primary'>
									{tournament.goals}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
