import { useState, useEffect } from "react"
import ProjectTile from "../components/Project/ProjectTile"
import projects from "../content/data/project.json"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

function Projects() {

	const [rotation,setRotation] = useState(0)
	const [selected,setSelected] = useState(-1)

	const {scrollY} = useScroll()
	
	useMotionValueEvent(scrollY, "change", 
		(latest) => setRotation(prev=>prev+scrollY?.current/8000)
	)

	useEffect(()=>{
		const id = setTimeout(()=>setSelected(-1),2000)
		return () => clearTimeout(id)
	},[selected])

	return (
		<section className="w-screen h-fit relative p-48 small:p-2 pt-2 4 flex flex-col items-center select-none font-mada text-charcoal font-[400] gap-20 justify-between bg-chalk  snap-center small:pb-20 small:pt-20">

			<div className="text-4xl mt-10 w-full self-start capitalize flex relative items-center justify-between 																																				">

				<p 
					title="Projects"
					className="w-[25%] small:w-full "
				>
					From pixel to prototype, 
					each project is a canvas of innovation
				</p>

				<section className="w-[30%] text-sm flex flex-col items-end gap-5 small:hidden">
						<motion.img
							animate={{rotateZ:rotation}}
							alt="Star"
							src="./icons/lightStar.svg"
						/>
					<p className="text-base text-right">
						Vishnu's project portfolio is a testament 
						to his boundless creativity and technical prowess.
					</p>
				</section>

			</div>

			<ul className="w-full flex flex-col relative z-10 list-none">
				{projects?.slice(0,5)?.map(
					(project,index)=>(
						<ProjectTile
							key={index}
							index={index}
							project={project}
							setSelected={setSelected}
						>
							{selected===index?
								<motion.div 
									className="w-[42rem] popup small:hidden h-[25rem] absolute bottom-[100%] left-[15%] rounded-md border-[1.5px] border-charcoal p-3 bg-chalk z-20"
									layoutId="popup"
								>
									<motion.img
										initial={{opacity:0.5,blur:"3px"}}
										animate={{opacity:1,blur:"0px"}}
										className="w-full h-full object-contain"
										alt={project?.title}
										src={project?.images[0]}
									/>
								</motion.div>:null}
						</ProjectTile>
					)
				)}
			</ul>

		</section>
	)
}

export default Projects