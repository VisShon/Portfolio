import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import Stars from "./Stars"

const options= [
	"Are you more inclined towards creating intuitive user interfaces or robust backend systems?",
	"Do you thrive on crafting seamless user experiences or enjoy the challenge of optimizing server performance?",
	"Are you drawn towards the creative side of development or do you revel in the intricacies of data management?",
	"Do you find joy in building entire applications from scratch or are you passionate about refining existing systems?",
	"Are you excited about the frontend magic that brings a website to life or are you more intrigued by the backend's hidden complexities?",
]



function Loading({progress,setProgress}) {

	const quote = useRef(options[Math.floor(Math.random() * 4)]) 


	useEffect(() => {
		const intervalId = setInterval(() => {
			if (progress >= 100){
				clearInterval(intervalId)
			}
			else setProgress((prevProgress) => prevProgress + 1)
		}, 20)
 
		return () => clearInterval(intervalId)
	}, [progress])


	return (
			<div 
				key="loader"
				className="fixed top-0 w-screen h-screen bg-ivory loader text-charcoal z-50 cursor-wait"
			>
				<motion.div 
					className="w-full h-full overflow-hidden bg-ivory flex flex-col justify-center items-center z-50"
					initial={{opacity: 0.01}} 
					animate={{opacity: 1}}
					transition={{
						duration:0.5
					}}
					
				>
					<p
						className="font-[600] font-luimp text-4xl small:text-left small:text-xl my-2 w-[70%] tracking-widest z-20">
						{
							progress<100?
								progress<10?
									`00${progress}`:
									`0${progress}`
							:`${progress}`
						}
					</p>

					<p
						className="w-[70%] capitalize font-luimp font-[300] text-[3vw] small:text-[3vh] text-charcoal tracking-tightest text-left z-20">
						{quote.current}
					</p>

					<Stars/>

				</motion.div>
				
			</div>
	)
}

export default Loading