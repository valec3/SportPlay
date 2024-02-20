import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

import Footer from './components/Footer';

function App() {
	return (
		<>
			<div className='bg-primary  text-base-100 min-h-screen flex flex-col'>
				{/* header */}

				<main className=''>
					<BrowserRouter>
						<Routes>
							<Route path='/' element={<Home />} />
						</Routes>
					</BrowserRouter>

					{/* <main className=' px-[30px] space-y-4 text-base-100 md:px-[45px] min-h-screen'> */}
				</main>
				{/* footer */}
				<Footer />
			</div>
		</>
	);
}

export default App;
