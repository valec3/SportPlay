import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const CustomSelect = ({ options, onChange }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState('');

	const handleOptionClick = option => {
		setSelectedOption(`${option.home_team_name} VS ${option.away_team_name}`);
		onChange(option);
		setIsOpen(false);
	};

	const handleButtonClick = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className='flex flex-col my-2 relative w-[90%] lg:w-[50%] m-auto '>
			<button
				className='w-full flex gap-2 items-center justify-between bg-secondary px-6 py-2 rounded-xl text-white'
				onClick={handleButtonClick}
			>
				<p className='text-ellipsis overflow-x-hidden whitespace-nowrap'>
					{selectedOption || 'Seleccione un equipo'}
				</p>
				<MdKeyboardArrowDown className='size-6' />
			</button>
			{isOpen && (
				<ul className='absolute top-[100%] left-0 py-2 bg-slate-950 w-full shadow-xl px-6 border-t-transparent rounded-md  flex flex-col gap-y-2 max-h-[10rem] overflow-y-auto'>
					{options?.length === 0 && (
						<li className='py-1 flex justify-center'>
							<p className='text-center text-white text-sm font-Roboto'>
								No hay partidos disponibles
							</p>
						</li>
					)}
					{options?.map(option => (
						<li key={option.game_id} className='py-1 flex justify-center'>
							<button
								onClick={() => handleOptionClick(option)}
								className='grid grid-cols-[1fr_0.2fr_1fr]'
							>
								<span className='text-right'>{option.home_team_name}</span>
								<span className='text-success px-2 font-bold'>VS</span>
								<span className='text-left'>{option.away_team_name}</span>
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default CustomSelect;
