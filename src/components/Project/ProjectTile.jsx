import { motion } from "framer-motion"
import { useState } from "react"
import ProjectPopUp from "./ProjectPopUp"

function ProjectTile({index,project,setSelected,children}) {

	const [isPopUpOpen,setIsPopUpOpen] = useState(false)
	

	const variants ={
		0:"border border-t-[1.5px] border-b-0",
		1:"border border-t-[1.5px] border-b-[1.5px]"
	}

	return (
		<>
			<motion.li 
				className={`flex ${index===4?variants[1]:variants[0]} border-charcoal justify-between gap-10 p-5 hover:bg-ivory transition-all px-10 small:px-5 w-full items-center group relative cursor-pointer`}
				onMouseEnter={()=>setSelected(index)}
				
				// onMouseLeave={()=>index===0?setSelected(index-1):null}
			>

				<h4 className="text-3xl small:text-xl font-[300]  w-[15vw] small:w-[8vh]">{project.title}</h4>

				<div className="flex gap-2 w-[15vw] small:mx-2 small:flex-col">
					{project.links.map((link,index)=>(
						<a 
							key={index}
							className="opacity-80 hover:opacity-100 transition-all "
							target="_blank"
							rel="noreferrer"
							href={link?.url}>
							<img 
								className="w-[2rem] object-contain"
								alt={link.name}
								loading="lazy"
								src={`./icons/${link.name}Dark.svg`}
							/>
						</a>
					))}
				</div>

				<div className="w-[50%] small:w-[60%] small:text-sm">
					<p className="my-5">{project.descriptions[0]}</p>
					<p className="small:hidden">{project.descriptions[1]}</p>
				</div>

				<button 
					onClick={()=>setIsPopUpOpen(true)}
					className="opacity-80 hover:opacity-100 transition-all small:hidden"
					>
					<img 
						alt={"Learn More"}
						loading="lazy"
						src="./icons/arrow.svg"
					/>
				</button>

				{children}
			</motion.li>	

			<ProjectPopUp
				project={project}
				isOpen={isPopUpOpen}
				setIsOpen={setIsPopUpOpen}
			/>

		</>
	)
}

export default ProjectTile