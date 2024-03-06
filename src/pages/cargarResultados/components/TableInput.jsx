import { useEffect, useState } from 'react';
import { getPlayersForTeamInGame } from '../../../services';
const TableInput = ({ game, dataGame, setDataGame }) => {
	const [playersA, setPlayersA] = useState([]);
	const [playersB, setPlayersB] = useState([]);

	useEffect(() => {
		const getPlayers = async () => {
			const { players } = await getPlayersForTeamInGame(game.game_id);
			const teamA = players.filter(
				player => player.team_id === game.home_team_id
			);
			const teamB = players.filter(
				player => player.team_id === game.away_team_id
			);
			setPlayersA(teamA);
			setPlayersB(teamB);
		};
		getPlayers();
	}, [game]);
	const handleChangePlayers = (player_id, team_id, name, value) => {
		if (team_id === game.home_team_id) {
			// update if the player is in the home team
			const index = dataGame.home_team.players.findIndex(
				player => player.player_id === player_id
			);
			if (index === -1) {
				// if the player is not in the array, add it
				setDataGame({
					...dataGame,
					home_team: {
						...dataGame.home_team,
						players: [
							...dataGame.home_team.players,
							{
								player_id,
								[name]: value,
							},
						],
					},
				});
			} else {
				// if the player is in the array, update it
				const newPlayers = dataGame.home_team.players.map(player => {
					if (player.player_id === player_id) {
						return {
							...player,
							[name]: value,
						};
					}
					return player;
				});
				setDataGame({
					...dataGame,
					home_team: {
						...dataGame.home_team,
						players: newPlayers,
					},
				});
			}
		}
		if (team_id === game.away_team_id) {
			// update if the player is in the away team
			const index = dataGame.away_team.players.findIndex(
				player => player.player_id === player_id
			);
			if (index === -1) {
				// if the player is not in the array, add it
				setDataGame({
					...dataGame,
					away_team: {
						...dataGame.away_team,
						players: [
							...dataGame.away_team.players,
							{
								player_id,
								[name]: value,
							},
						],
					},
				});
			} else {
				// if the player is in the array, update it
				const newPlayers = dataGame.away_team.players.map(player => {
					if (player.player_id === player_id) {
						return {
							...player,
							[name]: value,
						};
					}
					return player;
				});
				setDataGame({
					...dataGame,
					away_team: {
						...dataGame.away_team,
						players: newPlayers,
					},
				});
			}
		}
	};
	console.log('game players', dataGame);
	return (
		<div className='w-full flex flex-col lg:flex-row lg:justify-between gap-x-8 gap-y-10 lg:gap-x-16 lg:mt-10'>
			<table className='flex flex-1 flex-col bg-secondary p-5 rounded-lg'>
				<thead>
					<tr className='grid grid-cols-[5fr_1fr_1fr_1fr_1fr]'>
						<th className='text-left text-xl text-red-400'>
							<p className='text-ellipsis overflow-x-hidden whitespace-nowrap text-nowrap max-w-[10.5rem] md:max-w-none'>
								{game.home_team_name}
							</p>
						</th>
						<th className='text-center'>TA</th>
						<th className='text-center'>TR</th>
						<th className='text-center'>L</th>
						<th className='text-center'>Gl</th>
					</tr>
				</thead>
				<tbody>
					{playersA?.map(player => (
						<tr
							className='grid grid-cols-[5fr_1fr_1fr_1fr_1fr]'
							key={player.player_id}
						>
							<td className='flex items-center'>{player.player_name}</td>
							<td className='py-2 text-center'>
								<input
									type='number'
									defaultValue={0}
									className='size-8 bg-transparent text-center text-white border-[1px] border-white'
									name='yellow'
									onChange={e =>
										handleChangePlayers(
											player.player_id,
											player.team_id,
											e.target.name,
											e.target.value
										)
									}
								/>
							</td>
							<td className='py-2 text-center'>
								<input
									type='number'
									defaultValue={0}
									className='size-8 bg-transparent text-center text-white border-[1px] border-white'
									name='red'
									onChange={e =>
										handleChangePlayers(
											player.player_id,
											player.team_id,
											e.target.name,
											e.target.value
										)
									}
								/>
							</td>
							<td className='py-2 text-center'>
								<input
									type='number'
									defaultValue={0}
									className='size-8 bg-transparent text-center text-white border-[1px] border-white'
									name='injury'
									onChange={e =>
										handleChangePlayers(
											player.player_id,
											player.team_id,
											e.target.name,
											e.target.value
										)
									}
								/>
							</td>
							<td className='py-2 text-center'>
								<input
									type='number'
									defaultValue={0}
									className='size-8 bg-transparent text-center text-white border-[1px] border-white'
									name='goal'
									onChange={e =>
										handleChangePlayers(
											player.player_id,
											player.team_id,
											e.target.name,
											e.target.value
										)
									}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<table className='flex flex-1 flex-col bg-secondary p-5 rounded-lg'>
				<thead>
					<tr className='grid grid-cols-[5fr_1fr_1fr_1fr_1fr]'>
						<th className='text-left text-xl text-blue-400'>
							<p className='text-ellipsis overflow-x-hidden whitespace-nowrap text-nowrap max-w-[10.5rem] md:max-w-none'>
								{game.away_team_name}
							</p>
						</th>
						<th className='text-center'>TA</th>
						<th className='text-center'>TR</th>
						<th className='text-center'>L</th>
						<th className='text-center'>Gl</th>
					</tr>
				</thead>
				<tbody>
					{playersB?.map(player => (
						<tr
							className='grid grid-cols-[5fr_1fr_1fr_1fr_1fr]'
							key={player.player_id}
						>
							<td className='flex items-center'>{player.player_name}</td>
							<td className='py-2 text-center'>
								<input
									type='number'
									defaultValue={0}
									className='size-8 bg-transparent text-center text-white border-[1px] border-white'
									name='yellow'
									onChange={e =>
										handleChangePlayers(
											player.player_id,
											player.team_id,
											e.target.name,
											e.target.value
										)
									}
								/>
							</td>
							<td className='py-2 text-center'>
								<input
									type='number'
									defaultValue={0}
									className='size-8 bg-transparent text-center text-white border-[1px] border-white'
									name='red'
									onChange={e =>
										handleChangePlayers(
											player.player_id,
											player.team_id,
											e.target.name,
											e.target.value
										)
									}
								/>
							</td>
							<td className='py-2 text-center'>
								<input
									type='number'
									defaultValue={0}
									className='size-8 bg-transparent text-center text-white border-[1px] border-white'
									name='injury'
									onChange={e =>
										handleChangePlayers(
											player.player_id,
											player.team_id,
											e.target.name,
											e.target.value
										)
									}
								/>
							</td>
							<td className='py-2 text-center'>
								<input
									type='number'
									defaultValue={0}
									className='size-8 bg-transparent text-center text-white border-[1px] border-white'
									name='goal'
									onChange={e =>
										handleChangePlayers(
											player.player_id,
											player.team_id,
											e.target.name,
											e.target.value
										)
									}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TableInput;
