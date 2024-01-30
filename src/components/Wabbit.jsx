import { useAnimate,useScroll,useSpring,useTransform,motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"


function Wabbit() {
	const [scope, animate] = useAnimate()
	const [focus,setFocus] = useState(false)
	const audio = useRef(null)
	
	const { scrollY } = useScroll()
	const springScroll = useSpring(scrollY, {
		stiffness: 80,
		damping: 30,
		restDelta: 0.01,
	})

	const wabbitScroll = useTransform(springScroll,[100,800],[0,-200])
	const wabbitBlur = useTransform(springScroll,[50,500],[0,8])

	const [blur,setBlur] = useState(wabbitBlur.current)
	wabbitBlur.onChange((current, value) => {setBlur(current)})

	const burstGum = async() =>{
		setFocus(true)
		await animate(
			".gum",
			{
				scale:0,
				x:-100
			},
			{repeat:0, ease: "easeInOut", duration:1}
		)
		await audio.current.play()			
		return
	}

	
	const stopAudio = async() =>{
		audio.current.currentTime = 0
		audio.current.src=""
		await audio.current.pause()	
		setFocus(false)
		await animate(
			".gum",
			{
				scale:1,
				x:0
			},
			{repeat:0, ease: "easeInOut", duration:1}
		)
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
		<motion.div 
			style={{
				y:wabbitScroll,
				filter:`blur(${blur}px)`
			}}
			
			className="large:w-[70vh] small:h-[80vh] small:left-0 absolute large:top-64 small:bottom-32 z-20 flex justify-start" 
			ref={scope}
		>
			<img 
				className="relative z-10 w-[90%] small:w-full object-contain drop-shadow-lg cursor-pointer"
				alt="wabbit"
				onClick={stopAudio}
				src="./others/wabbit.webp"
			/>

			{focus?
			<img
				className="gum absolute top-[30%] right-0 z-20 w-[30%] cursor-pointer select-none drop-shadow-lg"
				alt="burst"
				src="/others/burstbubblegum.svg"
			/>:
			<img
				className="gum absolute top-[30%] small:top-[26vh] -right-2 small:-right-10  z-20 w-[30%] cursor-pointer select-none drop-shadow-lg"
				alt="bubblegum"
				onClick={burstGum} 
				src="/others/bubblegum.svg"
			/>}

			<audio ref={audio} id="Audio" src="./music.mp3"/>
			
		</motion.div>
	)
}

export default Wabbit