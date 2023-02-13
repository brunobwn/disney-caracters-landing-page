import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { motion } from 'framer-motion';

function LoadingCircle({ full = false, color = 'white' }) {
	return (
		<motion.div
			animate={{
				rotate: 360,
			}}
			transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
			style={{
				display: 'grid',
				placeItems: 'center',
				width: 'fit-content',
				margin: 'auto',
				height: full ? '98vh' : 'fit-content',
			}}
		>
			<AiOutlineLoading3Quarters color={color} size={48} />
		</motion.div>
	);
}

export default LoadingCircle;
