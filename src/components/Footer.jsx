import { FaYoutube } from 'react-icons/fa6';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className=' mt-auto bg-secondary flex flex-col items-center py-[14px] gap-y-2'>
			<div className=' flex items-center gap-[60px]'>
				<FaYoutube className=' w-9 h-8 text-neutral' />
                <FaFacebook className=' w-8 h-8 text-neutral' />
                <FaInstagram className=' w-7 h-8 text-neutral' />
			</div>
            <div>
                <img src="images/divider.png" alt="Divider" />
            </div>
			<p className=' font-Roboto leading-[19.2px] text-neutral'>2024 Todos los Derechos Reservados © SportPlay</p>
		</footer>
	);
}
