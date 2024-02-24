import React from 'react';
import { useNavigate } from 'react-router';

const TorneosAbiertos = () => {
	const navigate = useNavigate();
	return (
		<div className='bg-primary h-96 w-full px-[30px]'>
			<div className='w-full'>
				<h1 className=' text-3xl'>Torneos Abiertos</h1>
				<button
                  onClick={() => {
                    navigate("/DetalleTorneoAbierto");
                  }}
                  className="py-3 px-2 mt-5 text-base-100 transition-colors bg-secondary rounded-sm hover:bg-[#262525]"
                >Detalle del Torneo (provisorio)</button>
			</div>
		</div>
	);
};

export default TorneosAbiertos;
