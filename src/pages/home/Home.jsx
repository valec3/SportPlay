import MyTable from '../../components/common/MyTable';
import Title2 from '../../components/common/Title2';

function Home() {
	return (
		<>
			{/* section banner */}
			<section>banner</section>
			{/* section torneo abierto*/}
			<section className='border-b border-b-50 border-ternary space-y-4  '>
				<Title2 title='Torneos Abiertos' link='torneos'></Title2>
			</section>
			{/*section equipos de torneo */}
			<section className='border-b border-b-50 border-ternary space-y-4 '>
				<Title2 title='Resultado de torneos' link='resultados'></Title2>
				<div className='flex justify-center '>
					<MyTable></MyTable>
				</div>
			</section>
			{/* section ultimo partido */}
			<section className='border-b border-b-50 border-ternary'>
				<Title2 title='Partidos' link='partidos'></Title2>
			</section>
			{/* section equipos logos */}
			<section>
				<Title2 title='Equipos' link='equipos'></Title2>
			</section>
		</>
	);
}

export default Home;
