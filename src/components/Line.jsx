import { useTransform,motion } from "framer-motion"
function Line({children,base,scrollY}) {

	
	const textScroll = useTransform(scrollY,[500,1100],[base*2,0])
	const textOpacity = useTransform(scrollY,[500,1100],[0.1,1])

	return (
		<motion.li 
			className="w-full list-none"
			style={{
				x:textScroll,
				opacity:textOpacity
			}}
		>
			{children}
		</motion.li>
	)
}

export default Line