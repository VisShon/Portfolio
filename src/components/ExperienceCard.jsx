import { useInView } from "framer-motion"
import { useRef,useEffect } from "react"

function ExperienceCard({index,logo,setCurrent,setAnimate}) {

	const ref = useRef(null)
	const inView = useInView(ref)


	useEffect(()=>{
		if(inView){
			setAnimate(true)
			setTimeout(()=>{
				setAnimate(false)
				setCurrent(index)
			},300)
		}
	},[inView,index,setAnimate,setCurrent])

	const bgVariants = {
		0:"Staybook",
		1:"Mathworks",
		2:"Government",
		3:"Respct",
	}
	
	return (
		<div  className={`w-full small:h-full h-[84.7rem] relative  overflow-visible`}
		>
			<section 
				ref={ref}
				className="flex flex-col justify-center items-center w-full h-[80vh] small:h-[20vh] sticky small:absolute top-20 small:top-0 p-2  overflow-visible" 
			>
				<img 
					className="absolute h-[60%] small:h-[40%] z-10"
					fetchPriority="high"
					alt={logo}
					src={logo}
				/>

				<aside  title="Experience" className={`realtive w-full z-2 rounded-md h-full ${bgVariants[index]}`}>
					<div className="w-full h-full z-10 bg-noise "></div>
				</aside>

			</section>
		</div>
	)
}

export default ExperienceCard