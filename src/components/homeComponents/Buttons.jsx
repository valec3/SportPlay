import React from 'react';

const Buttons = () => {
	const openLinkInNewTab = (url) => {
		window.open(url, '_blank', 'noopener noreferrer');
	};

	return (
		<div className='absolute bottom-12 left-14 px-2 transform -translate-x-1/4 flex flex-col space-y-8'>
			<button
				onClick={() => openLinkInNewTab('https://www.google.com')}
				className='px-6 py-2 rounded-2xl drop-shadow-[3px_3px_2px_rgba(0,0,0,0.5)] font-SourceSansPro text-primary font-semibold bg-accent hover:bg-success transition duration-300 ease-in-out'
			>
				Registrarse
			</button>
			<button
				onClick={() => openLinkInNewTab('https://www.ifood.com.br/')}
				className='px-6 py-2 rounded-2xl drop-shadow-[3px_3px_2px_rgba(0,0,0,0.5)] font-SourceSansPro text-base-100 bg-secondary hover:bg-success transition duration-300 ease-in-out'
			>
				Crear Torneo
			</button>
		</div>
	);
};

export default Buttons;