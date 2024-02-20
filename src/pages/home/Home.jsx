import MyTable from '../../components/common/MyTable';
import Title2 from '../../components/common/Title2';

function Home() {
	return (
		<>
			{/* section banner */}
			<section></section>
			{/* section torneo abierto*/}
			<section></section>
			{/*section equipos de torneo */}
			<section>
				<Title2 title='Equipos'></Title2>
				<MyTable></MyTable>
			</section>
			{/* section ultimo partido */}
			<section></section>
			{/* section equipos logos */}
			<section></section>
		</>
	);
}

export default Home;
