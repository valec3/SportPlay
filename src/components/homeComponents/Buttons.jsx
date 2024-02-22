import React from 'react';

const Buttons = () => {
	const openLinkInNewTab = (url) => {
		window.open(url, '_blank', 'noopener noreferrer');
	};

	return (
		<div className='absolute bottom-6 left-14 transform -translate-x-1/4 flex flex-col space-y-4'>
			<button
				onClick={() => openLinkInNewTab('https://www.google.com')}
				className='px-4 py-1 rounded-2xl  font-SourceSansPro text-base-100 bg-accent hover:bg-success transition duration-300 ease-in-out text-white'
			>
				Registrarse
			</button>
			<button
				onClick={() => openLinkInNewTab('https://www.ifood.com.br/')}
				className='px-4 py-1 rounded-2xl font-SourceSansPro text-base-100 bg-primary hover:bg-success transition duration-300 ease-in-out text-white'
			>
				Crear Torneo
			</button>
		</div>
	);
};

export default Buttons;