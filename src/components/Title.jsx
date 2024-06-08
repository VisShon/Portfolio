import { TypeAnimation } from "react-type-animation"
import { useScroll,useSpring,useTransform,motion } from "framer-motion"
import { useState } from "react"

function Title() {

	const { scrollY } = useScroll()
	const springScroll = useSpring(scrollY, {
		stiffness: 100,
		damping: 20,
		restDelta: 0.01,
	})
	const titleBlur = useTransform(springScroll,[0,500],[0,7])

	const [blur,setBlur] = useState(titleBlur.current)
	titleBlur.on("change",(current, value) => {setBlur(current)})

	const titleScroll = useTransform(springScroll,[0,800],[0,-50])

	return (
		<header className="flex flex-col justify-start items-center small:items-start w-full small:px-4 small:mt-12 small:-ml-4 h-[11.5vw] small:h-[23vh] mb-8 small:-mb-12">
			<motion.p 
				className="font-[400] small:font-[300] text-4xl my-2 small:my-0  small:text-4xl small:-mb-4"
				style={{
					filter:`blur(${blur}px)`
				}}>
				FULL STACK
			</motion.p>

			<motion.div 
				className="w-full flex justify-center small:justify-start items-center small:items-start h-full"
				style={{
					y:titleScroll,
				}}>
				<TypeAnimation
					sequence={[
						"DEVELOPER",
						60000, 
						"INNOVATOR",
						60000, 
						"DESIGNER",
						60000, 
					]}
					cursor={false}
					preRenderFirstString={true}
					speed={150}
					className="small:pb-0 pb-4 font-luimp italic font-[300] text-[14vw] small:text-[20vw] text-charcoal tracking-[-13px] small:tracking-[-6px] text-center small:text-left small:-ml-2"
					repeat={Infinity}
				/>
			</motion.div>
		</header>
	)
}

export default Title