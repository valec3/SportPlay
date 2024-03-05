import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const CustomSelect = ({ options, onChange }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState('');

	const handleOptionClick = option => {
		setSelectedOption(option);
		onChange(option);
		setIsOpen(false);
	};

	const handleButtonClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='flex my-2'>
			<button
				className='w-full flex gap-2 items-center justify-between bg-secondary px-6 py-2 rounded-md text-white'
				onClick={handleButtonClick}
			>
				{selectedOption ? selectedOption.label : 'Seleccione una opción'}
				<MdKeyboardArrowDown className='size-8' />
			</button>
			{isOpen && (
				<ul className=''>
					{options?.map(option => (
						<li key={option.id}>
							<button onClick={() => handleOptionClick(option)}>
								{option.label}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default CustomSelect;
