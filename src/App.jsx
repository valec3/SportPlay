import Home from './pages/home/Home';

function App() {
	return (
		<>
			<div className='bg-primary h-[100vh] px-4 space-y-4 text-base-100'>
				{/* header */}

				<main className='px-4 space-y-4'>
					<Home></Home>
				</main>
				{/* footer */}
			</div>
		</>
	);
}

export default App;
