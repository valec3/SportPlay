import { Link } from 'react-router-dom';

function Title2({ title, link }) {
	return (
		<div className='flex flex-row justify-between mx-4'>
			<h2 className='text-base-100'>{title}</h2>
			<Link to={link}>Ver más</Link>
		</div>
	);
}

export default Title2;
