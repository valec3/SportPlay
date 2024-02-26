import React from 'react'
import { useNavigate } from 'react-router';

const DetalleTorneoAbierto = () => {
	const navigate = useNavigate();

  return (
    <div className='bg-primary w-full h-96 px-[30px]'>
        <button
                  onClick={() => {
                    navigate("/TorneosAbiertos");
                  }}
                  className="py-3 px-2 mt-5 text-base-100 transition-colors bg-secondary rounded-sm hover:bg-[#262525]"
                >atras (provisorio)</button>
			<div className='w-full'>
				<h1 className=' text-3xl'>Detalle Torneo Abierto</h1>
			</div>
		</div>
    
  )
}

export default DetalleTorneoAbierto