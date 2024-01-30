import { useState } from "react"
import { motion } from "framer-motion"

function Linktree() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<button
				className="hover:text-charcoal transition-colors w-[3rem] h-[1.5em] text-left" 
				onClick={()=>setIsOpen(prev=>!prev)}
				
			>
				Linktree
				<motion.div
					onMouseLeave={()=>setIsOpen(false)}
				 	animate={{
						clipPath: isOpen
						  ? "inset(0% 0% 0% 0% round 10px)"
						  : "inset(10% 50% 90% 50% round 10px)"
					}}
					transition={{
						type: "spring",
						bounce: 0,
						duration: 0.5
					}}
					className="w-[15rem] small:w-[90vw] small p-2 pb-0 pr-2 relative top-0 pt-5 rounded-md -ml-2"
					>

					<div
						className="grid grid-cols-2 small:grid-cols-4  bg-charcoal bg-opacity-50  p-5  text-left justify-center  text-chalk gap-5 w-full  rounded-md"
					>
						<a
							className="hover:text-charcoal transition-all" 
							target="_blank"
												rel="noreferrer"
							href={"https://github.com/VisShon"}>
							Github
						</a>

						<a
							className="hover:text-charcoal transition-all" 
							target="_blank"
												rel="noreferrer"
							href={"https://www.linkedin.com/in/vishnu-shon-079007202/"}>
							LinkedIn
						</a>

						<a
							className="hover:text-charcoal transition-all" 
							target="_blank"
												rel="noreferrer"
							href={"https://www.figma.com/@VisShon"}>
							Figma
						</a>

						<a
							className="hover:text-charcoal transition-all" 
							target="_blank"
												rel="noreferrer"
							href={"https://www.instagram.com/visshon/"}>
							Instagram
						</a>

						<a
							className="hover:text-charcoal transition-all" 
							target="_blank"
												rel="noreferrer"
							href={"https://twitter.com/ShonVishnu"}>
							Twitter
						</a>

						<a
							className="hover:text-charcoal transition-all" 
							target="_blank"
												rel="noreferrer"
							href={"https://t.me/VShon1"}>
							Telegram
						</a>

						<a
							className="hover:text-charcoal transition-all" 
							target="_blank"
												rel="noreferrer"
							href={"https://discord.com/channels/0xvishnu"}>
							Discord
						</a>
					</div>

				</motion.div>
			</button>
		</>
	)
}

export default Linktree