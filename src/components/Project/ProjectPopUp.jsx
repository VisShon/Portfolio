import { motion } from "framer-motion"

function ProjectPopUp({project,isOpen,setIsOpen}) {

	const descpLength = project?.descriptions.length
	
	return (
		<>
			{
				isOpen&&
				<motion.div 
					className="fixed left-0 top-0 w-screen h-screen bg-chalk p-5 z-50 flex small:flex-col"
					initial={{ opacity: 0.01 }}
					whileInView={{ opacity: 1 }}
					transition={{ 
						duration: 0.5, 
						ease: "easeOut" 
					}}
				>

					<div className=" border-l border-y rounded-l-md small:rounded-l-none small:rounded-t-md small:border-b-0 small:border-r h-full small:h-[30%] w-[30%] small:w-full p-10 small:p-5 flex flex-col items-start justify-between">


						<section>
							<p className="text-grey text-[2vw] w-[50%] small:w-full leading-tight small:text-[3vh]">{project?.title}</p>

							<div className="w-[50%] small:w-full text-lg small:text-[1rem] small:tracking-tighter capitalize leading-tight font-light mt-5">
								{project?.date&&<p>{project?.date}</p>}
								{project?.tags&&<p >{project?.tags}</p>}
							</div>
						</section>

						<div className="flex gap-2 w-[15vw] small:w-[30%]">
							{project?.links?.map((link,index)=>(
								<a 
									key={index}
									className="opacity-80 hover:opacity-100 transition-all "
									target="_blank"
									rel="noreferrer"
									title={link.name}
									href={link?.url}>
									<img 
										className="w-[2rem] object-contain"
										loading="lazy"
										alt={link.name}
										src={`./icons/${link.name}Dark.svg`}
									/>
								</a>
							))}
						</div>

					</div>

					<div className="w-[70%] small:w-full h-full border rounded-r-md small:rounded-tr-none small:rounded-b overflow-y-scroll z-0">
						<motion.button 
							className="fixed top-10 right-5  z-20  "
							title={"Home"}
							whileHover={{opacity:1}}
							onClick={()=>setIsOpen(false)} 
						>
							<img 
								alt={"Go Back"}
								loading="lazy"
								className="w-[50%] "
								src="./icons/cross.svg"
							/>
						</motion.button>

						<section className="p-10 px-20 w-[90%] small:w-full flex flex-col items-start  text-2xl small:text-lg overflow-hidden small:p-5">
							{
								<>
									{
										project.image&&
										<img
											alt={project?.title}
											loading="lazy"
											className="w-full object-contain h-[40vh] small:h-full"
											src={project?.image}
										/>
									}
								
									{
										project.images&&
										<a 	
											className="w-full"
											target="_blank"
											rel="noreferrer"
											title={project?.title}
											href={project?.images[0]}>
											<img
												alt={project?.title}
												className="w-full object-cover h-[50vh] object-top"
												loading="lazy"
												src={project?.images[0]}
											/>
										</a>
									}
									<p className="my-5">{project?.descriptions[0]}</p>

									<div className="flex w-full gap-10 small:flex-col">
									{
										project.images&&
											<a 
												className="w-[50%] small:w-full"
												target="_blank"
												rel="noreferrer"
												title={project?.title}
												href={project?.images[1]}>
												<img
													alt={project?.title}
													className="w-full object-contain h-[40vh] small:h-full"
													loading="lazy"
													src={project?.images[1]}
												/>
											</a>
										}
										{
											project.images&&
											<a 
												className="w-[50%] small:w-full"
												target="_blank"
												rel="noreferrer"
												title={project?.title}
												href={project?.images[2]}>
												<img
													alt={project?.title}
													loading="lazy"
													className="w-full object-contain h-[40vh] small:h-full"
													src={project?.images[2]}
												/>
											</a>
										}
									</div>
									<p className="my-5">{project?.descriptions[1]}</p>


									{descpLength-3>=0&&	
										<>
										{	
											project.images&&
											<a 
											
													className="w-full"
													target="_blank"
													rel="noreferrer"
													title={project?.title}
													href={project?.images[3]}>	
													<img
														alt={project?.title}
														loading="lazy"
														className="w-full object-contain h-[50vh] object-left small:h-full"
														src={project?.images[3]}
												/>	
													
												<p className="my-5">{project?.descriptions[2]}</p>
											</a>
										}

										</>
									}

									{descpLength-4>=0&&
										<>
											<div className="flex w-full gap-10">
											{
												project.images&&
													<a 
														className="w-full"
														target="_blank"
														rel="noreferrer"
														title={project?.title}
														href={project?.images[4]}>
														<img
															alt={project?.title}
															loading="lazy"
															className="w-full object-contain h-[40vh] small:h-full"
															src={project?.images[4]}
														/>
													</a>
												}
												{
													project.images&&
													<a 
														className="w-full"
														target="_blank"
														rel="noreferrer"
														title={project?.title}
														href={project?.images[5]}>
														<img
															className="w-full object-contain h-[40vh] small:h-full"
															alt={project?.title}
															loading="lazy"
															src={project?.images[5]}
														/>
													</a>
												}
											</div>
											<p className="my-5">{project?.descriptions[3]}</p>
										</>
									}

									<div className="grid grid-cols-2 gap-10 mt-10 small:grid-cols-1">
										{
											project?.images?.slice(descpLength+1).map((image,id)=>
												{
													return project.images&&
													<a
														className="w-full"
														key={id}
														title={project?.title}
														href={image}				
													>
														<img
															className="w-full object-fill h-fit small:h-full"
															alt={project?.title}
															loading="lazy"
															src={image}
														/>
													</a>
												}
											)
										}
									</div>
								</>
							}
						</section>
					</div>

				</motion.div>
			}
		</>
	)
}

export default ProjectPopUp