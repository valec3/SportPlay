import MyTable from '../../components/common/MyTable';
import Title2 from '../../components/common/Title2';
import LastMatch from '../../components/homeComponents/LastMatch';
import Carrousel from '../../components/homeComponents/Carrousel';
import Slider from '../../components/homeComponents/Slider';
import OpenTournaments from '../../components/homeComponents/OpenTournaments';
import { useEffect } from 'react';


function Home()  {
	

	useEffect(() => {	
		  window.scrollTo({
			top:0,
			behavior:'smooth'
		  })	
	  }, []);

	return (
		<div className='space-y-8 bg-primary'>
			<section>
				<Carrousel />
			</section>

			{/* section torneo abierto*/}
			<section className='border-b  border-[#545458] space-y-4 px-[30px] pb-8 '>

				<Title2 title='Torneos Abiertos' link='TorneosAbiertos'></Title2>
				<OpenTournaments />

			</section>
			{/*section equipos de torneo */}
			<section className='border-b  border-[#545458] space-y-4 px-[30px] pb-8'>
				<Title2 title='Resultado del ultimo torneo' link='ResultadosTorneos'></Title2>
				<div className='flex justify-center w-full '>
					<MyTable/>
				</div>
			</section>
			{/* section ultimo partido */}
			<section className='border-b  border-[#545458] space-y-4 px-[30px] pb-8'>
				<Title2 title='Último Partido' link='partidos'></Title2>
				<LastMatch />
			</section>
			{/* section equipos logos */}
			<section className='space-y-4 px-[30px] pb-8'>
				<Title2 title='Equipos' link='Equipos'></Title2>
			</section>
			
			{/* slider section */}
			<section className='space-y-2 px-[30px] pb-6'>
				<Slider/>
			</section>
		</div>
	);
}

export default Home;
