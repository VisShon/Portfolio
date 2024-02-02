import { useState } from "react"
import ProjectTile from "../components/Project/ProjectTile"
import projects from "../content/data/project.json"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

function Projects() {

	const [rotation,setRotation] = useState(0)
	const {scrollY} = useScroll()
	useMotionValueEvent(scrollY, "change", 
		(latest) => setRotation(prev=>prev+scrollY?.current/8000)
	)

	return (
		<section title="Projects" className="w-screen h-fit relative p-48 small:p-2 pt-2 4 flex flex-col items-center select-none font-mada text-charcoal font-[400] gap-20 justify-between bg-chalk  snap-center small:pb-20 small:pt-20">

			<div className="text-4xl mt-10 w-full self-start capitalize flex relative items-center justify-between 																																				">

				<h3 
					className="w-[25%] small:w-full"
				>
					From pixel to prototype, 
					each project is a canvas of innovation
				</h3>

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

			<div className="w-full flex flex-col relative z-10">
				{projects?.slice(0,5)?.map(
					(project,index)=>(
						<ProjectTile
							key={index}
							index={index}
							title={project.title}
							project={project}
							descriptions={project.descriptions}
							image={project.images[0]}
							links={project.links}
						/>
					)
				)}
			</div>

		</section>
	)
}

export default Projects