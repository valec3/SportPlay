export default function LastMatch() {
	return (
		<>
			<div className='w-full bg-secondary mt-[45px] text-base-100 rounded-[14px] text-center py-[28px] px-7 lg:hidden '>
				<h2 className=' text-[32px] font-semibold font-Roboto md:text-[38px] md:leading-[54px]'>
					Torneo “A”
				</h2>
				<p className=' mt-[15px] text-lg text-neutral md:text-[20px] font-Roboto'>
					Grupo “A” - Partido “1”
				</p>

				<div className=' mt-[21px] flex items-center justify-between gap-[25px]'>
					<div>
						<img src='images/real-madrid.png' alt='real madrid' />
						<p className=' text-lg text-neutral font-semibold leading-[27px] font-Roboto mt-3'>
							Equipo “A”
						</p>
					</div>

					<div className='flex gap-2'>
						<span className=' font-Roboto font-semibold text-[48px] leading-[96px] md:text-[64px]'>
							2
						</span>
						<span className=' font-Roboto font-semibold text-[48px] leading-[96px] md:text-[64px]'>
							:
						</span>
						<span className=' font-Roboto font-semibold text-[48px] leading-[96px] md:text-[64px]'>
							1
						</span>
					</div>

					<div>
						<img src='images/real-madrid1.png' alt='real madrid' />
						<p className=' text-lg text-neutral font-semibold leading-[27px] font-Roboto mt-3'>
							Equipo “A”
						</p>
					</div>
				</div>

				<div className=' flex justify-center items-center mt-2'>
					<img className=' w-[337px]' src='images/cancha1.png' alt='Cancha' />
				</div>

				<div className='flex justify-center gap-[20px] mt-[14px]'>
					<button className=' w-[118px] h-[40px] bg-base-100 text-secondary rounded-2xl font-SourceSansPro  font-semibold'>
						Más Info
					</button>
					<button className=' w-[118px] h-[40px] bg-base-100 text-secondary rounded-2xl font-SourceSansPro  font-semibold'>
						Ir al Torneo
					</button>
				</div>
			</div>

			<div className='hidden  lg:flex w-[87%] bg-secondary mt-[45px] text-base-100 rounded-[14px] text-center py-[28px] px-7  mx-auto  items-center justify-around'>
				<div>
					<h2 className='text-[32px] font-semibold font-Roboto py-3'>
					Torneo “A”
				</h2>
				<p className='text-lg text-neutral font-Roboto py-3'>
					Grupo “A” - Partido “1”
					</p>
					
						<div className='flex justify-center gap-[20px] mt-[14px] py-3'>
					<button className=' w-[118px] h-[40px] bg-base-100 text-secondary rounded-2xl font-SourceSansPro font-semibold'>
						Más Info
					</button>
					<button className=' w-[118px] h-[40px] bg-base-100 text-secondary rounded-2xl font-SourceSansPro font-semibold'>
						Ir al Torneo
					</button>
				</div>
				</div>

				<div className="flex flex-col">
					<div className="flex justify-center gap-8" >
							<div>
								<img src='images/real-madrid.png' alt='real madrid' />
								<p className=' text-lg text-neutral font-semibold leading-[27px] font-Roboto mt-3'>
									Equipo “A”
								</p>
							</div>

						<div className='flex gap-2'>
							<span className=' font-Roboto font-semibold text-[40px] leading-[96px]'>
								2
							</span>
							<span className=' font-Roboto font-semibold text-[40px] leading-[96px]'>
								:
							</span>
							<span className=' font-Roboto font-semibold text-[40px] leading-[96px]'>
								1
							</span>
						</div>
					

						<div>
							<img src='images/real-madrid1.png' alt='real madrid' />
							<p className=' text-lg text-neutral font-semibold leading-[27px] font-Roboto mt-3'>
								Equipo “A”
							</p> 
						</div>
					</div>
						<div className=' flex justify-center items-center mt-2'>
						 <img className=' w-[337px]' src='images/cancha1.png' alt='Cancha' />
						</div>

				</div>
			
			</div>
		</>
	);
}
