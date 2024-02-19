import Footer from "./components/Footer";
import LastMatch from "./components/homeComponents/LastMatch";

function App() {
	return (
		<>
			<div className='bg-primary h-[100vh]'>
				{/* header */}
				<main className=' px-[30px] space-y-4 text-base-100 md:px-[45px] min-h-screen'>
					<div className=''>App sportPlay</div>
					<LastMatch />
				</main>
				{/* footer */}
				<Footer />
			</div>
		</>
	);
}

export default App;
