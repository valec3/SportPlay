const TableInput = ({ data }) => {
	return (
		<table className='w-full'>
			<thead>
				<tr>
					<th className='text-left text-red-400'>Equipo A</th>
					<th className='text-center'>TA</th>
					<th className='text-center'>TR</th>
					<th className='text-center'>L</th>
					<th className='text-center'>Gl</th>
				</tr>
			</thead>
			<tbody>
				{data?.map(player => (
					<tr key={player.id}>
						<td>{player.name}</td>
						<td className='py-2 text-center'>
							<input
								type='number'
								defaultValue={0}
								className='size-8 bg-transparent text-center text-white border-[1px] border-white'
							/>
						</td>
						<td className='py-2 text-center'>
							<input
								type='number'
								defaultValue={0}
								className='size-8 bg-transparent text-center text-white border-[1px] border-white'
							/>
						</td>
						<td className='py-2 text-center'>
							<input
								type='number'
								defaultValue={0}
								className='size-8 bg-transparent text-center text-white border-[1px] border-white'
							/>
						</td>
						<td className='py-2 text-center'>
							<input
								type='number'
								defaultValue={0}
								className='size-8 bg-transparent text-center text-white border-[1px] border-white'
							/>
						</td>
					</tr>
				))}
				<tr>
					<td>Cristiano Ronaldo</td>
					<td className='py-2 text-center'>
						<input
							type='number'
							defaultValue={0}
							className='size-8 bg-transparent text-center text-white border-[1px] border-white'
						/>
					</td>
					<td className='py-2 text-center'>
						<input
							type='number'
							defaultValue={0}
							className='size-8 bg-transparent text-center text-white border-[1px] border-white'
						/>
					</td>
					<td className='py-2 text-center'>
						<input
							type='number'
							defaultValue={0}
							className='size-8 bg-transparent text-center text-white border-[1px] border-white'
						/>
					</td>
					<td className='py-2 text-center'>
						<input
							type='number'
							defaultValue={0}
							className='size-8 bg-transparent text-center text-white border-[1px] border-white'
						/>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default TableInput;
