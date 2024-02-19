import MyTable from './components/common/MyTable';

function App() {
	return (
		<>
			<div className='bg-primary h-[100vh]'>
				{/* header */}
				<main className='px-4 space-y-4 text-base-100'>
					<div className=''>App sportPlay</div>
					<MyTable></MyTable>
				</main>
				{/* footer */}
			</div>
		</>
	);
}

export default App;
