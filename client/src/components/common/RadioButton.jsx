import { useState } from 'react';

const RadioButton = ({ label, name, value, checked }) => {
	const [isChecked, setIsChecked] = useState(checked);

	const handleChange = event => {
		setIsChecked(event.target.checked);
	};

	return (
		<label className='flex items-center cursor-pointer'>
			<span className='text-neutral text-sm mr-4'>{label}</span>
			<input
				type='radio'
				name={name}
				value={value}
				checked={isChecked}
				onChange={handleChange}
				className='w-4 h-4 mr-2 text-blue-600 focus:ring-0 border-blue-500'
			/>
		</label>
	);
};

export default RadioButton;
