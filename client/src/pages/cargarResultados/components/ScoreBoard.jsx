const ScoreBoard = ({ game, setDataGame, dataGame }) => {
	return (
		<div className='bg-secondary w-[90%] mx-auto  p-4 py-5 rounded-lg mt-10 lg:w-[50%]'>
			<h3 className='text-2xl mb-8 text-center font-Roboto  font-bold'>
				Marcador
			</h3>
			<div className=' flex items-start justify-center gap-6'>
				<div className='flex flex-col gap-2 items-center'>
					<img
						className='size-12 rounded-full object-contain'
						src={game.home_team_logo}
						alt=''
					/>
					<p className='text-center'>{game.home_team_name}</p>
				</div>
				<div className='flex items-center gap-3'>
					<input
						defaultValue={0}
						type='number'
						className='appearance-none text-center font-bold text-2xl bg-primary size-12 px-2'
						onChange={e =>
							setDataGame({
								...dataGame,
								home_team: {
									...dataGame.home_team,
									score: e.target.value,
								},
							})
						}
					/>
					<p className='text-[2rem]'>:</p>
					<input
						defaultValue={0}
						type='number'
						className='appearance-none text-center font-bold text-2xl bg-primary size-12 px-2'
						onChange={e =>
							setDataGame({
								...dataGame,
								away_team: {
									...dataGame.away_team,
									score: e.target.value,
								},
							})
						}
					/>
				</div>
				<div className='flex flex-col gap-2 items-center'>
					<img
						className='size-12 rounded-full object-contain'
						src={game.away_team_logo}
						alt=''
					/>
					<p className='text-center'>{game.away_team_name}</p>
				</div>
			</div>
		</div>
	);
};

export default ScoreBoard;
