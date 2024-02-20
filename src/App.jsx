import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
	return (
		<>
			<div className='bg-primary h-[100vh]  text-base-100'>
				{/* header */}

				<main className=''>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Home />} />
						</Routes>
					</BrowserRouter>
				</main>
				{/* footer */}
			</div>
		</>
	);
}

export default App;
