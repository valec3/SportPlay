import MyTable from '../../components/common/MyTable';
import Title2 from '../../components/common/Title2';
import LastMatch from '../../components/homeComponents/LastMatch';
import Carrousel from '../../components/homeComponents/Carrousel';
import OpenTournaments from '../../components/homeComponents/OpenTournaments';

function Home() {
	return (
		<div className='space-y-8'>
			<section>
				<Carrousel />
			</section>

			{/* section torneo abierto*/}
			<section className='border-b  border-[#545458] space-y-4 px-[30px] pb-8 '>
				<Title2 title='Torneos Abiertos' link='torneos'></Title2>
				<OpenTournaments />
			</section>
			{/*section equipos de torneo */}
			<section className='border-b  border-[#545458] space-y-4 px-[30px] pb-8'>
				<Title2 title='Resultado de torneos' link='resultados'></Title2>
				<div className='flex justify-center '>
					<MyTable></MyTable>
				</div>
			</section>
			{/* section ultimo partido */}
			<section className='border-b  border-[#545458] space-y-4 px-[30px] pb-8'>
				<Title2 title='Último Partido' link='partidos'></Title2>
				<LastMatch />
			</section>
			{/* section equipos logos */}
			<section className='space-y-4 px-[30px] pb-8'>
				<Title2 title='Equipos' link='equipos'></Title2>
			</section>
		</div>
	);
}

export default Home;
