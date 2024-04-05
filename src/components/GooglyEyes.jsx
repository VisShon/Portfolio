import {
	motion
} from "framer-motion"

function GooglyEyes({xposition, yposition}) {


	return (
		<div className="w-[20%] h-full rounded-full p-2  flex flex-col justify-start items-start relative  small:hidden">

			<img
				className="object-fill rounded-full absolute w-[90%] bottom-0 z-0 "
				fetchPriority="high"
				alt="Vishnu Selfie"
				src="./others/ethicPhoto.webp"
			/>

			<div className="relative flex w-full -ml-2 mt-[3vw] ">
				<div className="rounded-full w-[1.5vw] h-[1.5vw] absolute top-[1vh] left-[28%] z-10 bg-ivory flex justify-center items-center">
					<motion.div 
						style={{
							translateX:(xposition),
							translateY:(yposition),
						}}
						className="rounded-full w-[1vw] h-[1vw] bg-charcoal"
					></motion.div>
				</div>

				<div className=" rounded-full w-[1.5vw] h-[1.5vw] absolute top-0 left-[40%] z-10 bg-ivory flex justify-center items-center">
					<motion.div 
						style={{
							translateX:(xposition),
							translateY:(yposition),
						}}
						className="rounded-full w-[1vw] h-[1vw] bg-charcoal"
					></motion.div>
				</div>
			</div>

		</div>
	)
}

export default GooglyEyes