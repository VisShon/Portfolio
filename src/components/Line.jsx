import { useTransform,motion } from "framer-motion"
function Line({children,base,scrollY}) {

	
	const textScroll = useTransform(scrollY,[500,1100],[base*2,0])
	const textOpacity = useTransform(scrollY,[500,1100],[0.1,1])
	const textOpacitySmall = useTransform(scrollY,[500,1300-5*base],[0.01*base,1])

	return (
		<>
			<motion.li 
				className="w-full list-none small:hidden"
				style={{
					x:textScroll,
					opacity:textOpacity
				}}
			>
				{children}
			</motion.li>

			<motion.li 
				className="w-full list-none large:hidden"
				style={{
					opacity:textOpacitySmall
				}}
			>
				{children}
			</motion.li>
		</>
	)
}

export default Line