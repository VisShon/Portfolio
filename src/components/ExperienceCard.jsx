import { useInView } from "framer-motion"
import { useRef,useEffect } from "react"

function ExperienceCard({index,logo,device,setCurrent,setAnimate}) {

	const ref = useRef(null)
	const inView = useInView(ref)

	const variants = {
		0:"h-[95vh]",
		1:"h-[145vh]",
	}

	useEffect(()=>{
		if(inView){
			setAnimate(true)
			setTimeout(()=>{
				setAnimate(false)
				setCurrent(index)
			},300)
		}
	},[inView,index,setAnimate,setCurrent])

	
	
	return (
		<div  className={`w-full ${device==="SMALL"?variants[0]:variants[1]} relative  overflow-visible`}
		>
			<div 
				className="flex flex-col justify-center items-center w-full h-[80vh] small:h-[30vh] sticky top-20 small:top-10 p-2  overflow-visible" 
			>
				<img 
					className="absolute h-[60%] small:h-[40%]"
					alt={logo}
					src={logo}
				/>

				<img 
					ref={ref}
					alt="Experience"
					className="w-full rounded-md h-full object-cover"
					src={`./others/${index+1}BG.webp`}
				/>

			</div>
		</div>
	)
}

export default ExperienceCard