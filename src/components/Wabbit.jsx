import { useAnimate,useScroll,useSpring,useTransform,motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"


function Wabbit({springScroll}) {
	const [scope, animate] = useAnimate()
	const [focus,setFocus] = useState(false)
	const audio = useRef(null)
	
	const wabbitScroll = useTransform(springScroll,[0,1],[0,-100])
	const wabbitBlur = useTransform(springScroll,[0,1],[0,3])

	const [blur,setBlur] = useState(wabbitBlur.current)
	wabbitBlur.onChange((current, value) => {setBlur(current)})

	const burstGum = async() =>{
		setFocus(true)
		await animate(
			".gum",
			{
				scale:0,
				x:-90,
			},
			{repeat:0, ease: "easeInOut", duration:1}
		)
		audio.current.src="./music.mp3"
		// await audio.current.play()			
		return
	}

	
	const stopAudio = async() =>{
		audio.current.currentTime = 0
		audio.current.src=""
		await audio.current.pause()	

		if(focus){
			setFocus(false)
			await animate(
				".gum",
				{
					scale:0.9,
					x:-25
				},
				{repeat:0, ease: "easeInOut", duration:1}
			)

			await animate(
				".gum",
				{
					scale:[0.9,1.2,0.9],
					x:[-25,0,-25]
				},
				{repeat:Infinity, ease: "easeInOut", duration:20}
			)
		}


		return 	
	}

	useEffect(() => {
		animate(
			".gum",
			{
				scale:[0.9,1.2,0.9],
				x:[-25,0,-25]
			},
			{repeat:Infinity, ease: "easeInOut", duration:20}
		)
	}, [animate])

	return (
		<motion.section 
			style={{
				y:wabbitScroll,
				filter:`blur(${blur}px)`
			}}
			
			className="large:w-[70vh] small:h-[80vh] small:left-0 absolute large:top-64 small:bottom-32 z-20 flex justify-start" 
			ref={scope}
			
		>
			
			<img 
				className="relative z-10 w-[90%] small:w-full object-contain drop-shadow-lg cursor-pointer rounded-[10rem]"
				alt="wabbit"
				loading="lazy"
				src="./others/wabbit.svg"
			/>

			{focus?
			<img
				className="gum absolute top-[30%] small:top-[26vh] -right-2 small:-right-10  z-20 w-[30%] cursor-pointer select-none drop-shadow-lg"
				alt="burst"
				loading="lazy"
				src="/others/burstbubblegum.svg"
			/>:
			<img
				className="gum absolute top-[30%] small:top-[26vh] -right-2 small:-right-10  z-20 w-[30%] cursor-pointer select-none drop-shadow-lg"
				alt="bubblegum"
				loading="lazy"
				onClick={burstGum} 
				src="/others/bubblegum.svg"
			/>}

			{focus&&
			<motion.button 
				className="bg-ivory scale-50  absolute top-[20%] left-[-50%] small:left-[5%] small:top-[-5%]  p-4 z-20 rounded-full hover:opacity-100 opacity-40 transition-all ease-in-out duration-200 small:opacity-100 "
				title="Mute"
				whileHover={{opacity:1}}
				onClick={stopAudio} 
			>
				<img 
					alt="Mute"
					loading="lazy"
					src="./icons/speaker.svg"
				/>
			</motion.button>}
			<audio ref={audio} id="Audio" src="./music.mp3"/>
			
		</motion.section>
	)
}

export default Wabbit