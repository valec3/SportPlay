export default function MyTable() {
	return (
		<div className='p-4 pt-0 w-fit bg-secondary rounded-3xl mb-4'>
			<table className='w-ful  '>
				{/* head */}
				<thead className=''>
					<tr className='text-base-100 text-left  '>
						<th className='p-2'>#</th>
						<th className='p-2'>Equipos</th>
						<th className='p-2 border-b border-primary'>TA</th>
						<th className='p-2 border-b border-primary'>TR</th>
						<th className='p-2 border-b border-primary'>L</th>
						<th className='p-2 border-b border-primary'>GL</th>
					</tr>
				</thead>
				<tbody className=''>
					{/* row 1 */}
					<tr className=''>
						<th className='p-2'>1</th>
						<td className='flex flex-row space-x-2 p-2 pr-8'>
							<img src='images/atletico.svg' alt='' />
							<div>AtléticoMadrid</div>
						</td>
						<td className='p-2 border-b border-primary'>0</td>
						<td className='p-2 border-b border-primary'>1</td>
						<td className='p-2 border-b border-primary'>6</td>
						<td className='p-2 border-b border-primary'>4</td>
					</tr>
					{/* row 2 */}
					<tr className=''>
						<th className='p-2'>1</th>
						<td className='flex flex-row space-x-2 p-2 pr-8'>
							<img src='images/atletico.svg' alt='' />
							<div>AtléticoMadrid</div>
						</td>
						<td className='p-2 border-b border-primary'>0</td>
						<td className='p-2 border-b border-primary'>1</td>
						<td className='p-2 border-b border-primary'>6</td>
						<td className='p-2 border-b border-primary'>4</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
