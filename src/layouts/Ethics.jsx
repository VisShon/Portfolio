import TransitionTunnel from "../components/TransitionTunnel"
import GooglyEyes from "../components/GooglyEyes"
import { useEffect,useRef,useState } from "react"
import {
	useTransform,
	useMotionValue,
	motion, 
	useScroll
} from "framer-motion"

function Ethics() {
	const x = useMotionValue(0)
	const y = useMotionValue(0)
	const ref = useRef(null)

	const {scrollYProgress} = useScroll({
		target: ref,
	})


	const nextTransition = useTransform(scrollYProgress,[0.2,1],["-80vh","0vh"])
	const nextTransitionBlur = useTransform(scrollYProgress,[0.2,1],[8,0])
	const nextTransitionScale = useTransform(scrollYProgress,[0.2,1],[0.8,1])
	const xposition = useTransform(x,[0,1000],[-8,8])
	const yposition = useTransform(y,[0,1000],[-8,8])

	const [blur,setBlur] = useState(nextTransitionBlur.current)
	nextTransitionBlur.onChange((current, value) => {setBlur(current)})

	
	useEffect(() => {
		const updateMousePosition = (e) => {
			x.set(e.clientX)
			y.set(e.clientY)
		}

		window.addEventListener("mousemove", updateMousePosition);

		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		}
	}, [x,y])


	return (
		<>
			<section 
				title="About"
				className="w-screen h-fit relative  bg-ivory small:mt-10" 
			>

				<TransitionTunnel/>


				<motion.div 
					className="w-full h-screen flex flex-col justify-center absolute -bottom-40 snap-center "
					initial={{opacity:0}}
					whileInView={{opacity: 1}}
					transition={{
						duration: 1,
					}}
					style={{
						filter:`blur(${blur}px)`,
						scale:nextTransitionScale,
					}}
				>

					<div className="flex justify-center list-none">
						<ul  className=" font-mada small:font-[300] text-[2.5vw] small:text-[3vh] w-[40%] small:w-auto flex flex-col items-start small:items-center leading-snug relative  small:text-chalk">
							<li>With strong work ethics, I</li>
							<li>hold integrity in high regard</li>
							<li>A systematic and organized</li>
							<li>approach defines my work</li>
							<li>style, valuing creative</li>
							<li>solutions that stem from</li>
							<li>methodical thinking. </li>
						</ul>

						<GooglyEyes
							xposition={xposition}
							yposition={yposition}
						/>
					</div>

				</motion.div>

			</section>

			<motion.div 
				className="w-screen h-[40vh] small:h-[20vh]" 
				ref={ref}
				style={{
					marginBottom:nextTransition
				}}
			>
				
			</motion.div>
		</>
	)
}

export default Ethics