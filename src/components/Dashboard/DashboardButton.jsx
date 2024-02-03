import { useState } from "react"
import { motion } from "framer-motion"
import PopUpTile from "./PopUpTile"

function DashboardButton({index,descp,title,data,setBg}) {

	const [popup,setPopup] = useState(false)

	const variants = {
		0:"workBg col-span-3 row-span-4 ",
		1:"communityBg col-span-6 row-span-4 col-start-4 ",
		2:"awardsBg col-span-3 row-span-4 row-start-5 ",
		3:"mentorshipBg col-span-3 row-span-4 col-start-4 row-start-5 ",
		4:"projectBg col-span-3 row-span-4 col-start-7 row-start-5 ",
	}
	const variantsBg = {
		0:"workBg",
		1:"communityBg",
		2:"awardsBg",
		3:"mentorshipBg",
		4:"projectBg",
	}

	return (
		<>
			<button
				title={title}
				className={`relative small:gap-10 w-full h-[42vh] bg-noise bg-repeat bg-contain  ${variants[index]} text-chalk  select-none cursor-pointer  rounded-3xl z-10`}
				onClick={()=>{
					setBg({
						image:"url(./others/bannerDark.svg",
						color:"#1F1F1F"
					})
					return setPopup(true)
				}}
			>

				<div className={`relative text-left bg-noise w-full h-full  p-10 small:p-4 small:hover:p-4 hover:p-12 transition-all ease-in-out duration-300 flex flex-col items-end justify-between rounded-3xl z-0`}>
					<img 
						alt={title}
						loading="lazy"
						src="./icons/arrowWhite.svg"
					/>


					<p 
						className="w-[25vw] self-start small:w-full text-[0.85vw] small:text-sm"
					>
						{descp}
					</p>

					<h3
						className="text-[3vw] self-start small:text-[3vh]"
					>
						{title}
					</h3>
				</div>
			</button>

			<>
				{popup&&
				<div 
					className="fixed z-50 flex flex-col justify-center items-center w-full small:w-[98vw] bg-charcoal h-[90vh] bottom-0 p-4 small:p-0 overflow-x-hidden scroll-smooth"
				>
						<motion.div 
							className="rounded-3xl bg-ivory w-full h-full pt-20 px-0 overflow-y-scroll  overflow-x-hidden"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ 
								duration: 0.5, 
								ease: "easeOut" 
							}}
						>

							<button
								onClick={()=>{
									setBg({
										image:"url(./others/bannerLight.svg)",
										color:"#F4F9FF"
									})
									return setPopup(false)
								}} 
								title={"Dashboard"}
								className="absolute top-10 right-10 small:right-0 small:top-4 z-40">
								<img 
									className="small:w-[50%]"
									loading="lazy"
									alt="Back to Dashboard"
									src="./icons/cross.svg"
								/>
							</button>


								{
									data.map((item,id)=>(
										<PopUpTile 
											key={id}
											title={item?.title} 
											descriptions={item?.descriptions} 
											item={item}
											bg={variantsBg[index]}
										/>
									))
								}

						</motion.div>
					</div>}
			</>
		</>
	)
}

export default DashboardButton