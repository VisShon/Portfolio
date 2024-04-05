
import { useWindowSize } from "../utils/useWindowSize"
import { useState, useEffect } from "react"

import Seperator from "../components/GradientWave/Seperator"
import Reveiw from "../components/Reveiw"
import ScrollBanner from "../components/ScrollBanner"

function Reviews() {

	const [width] = useWindowSize()
	const [device, setDevice] = useState("")

	useEffect(()=>{
		if(width < 500)
			setDevice("SMALL")
		if(width <=1030 && width >=500)
			setDevice("MEDIUM")
		if(width >1030)
			setDevice("LARGE")
	},[width])

	const reviews = [
		// {
		// 	text: "Vishnu consistently demonstrated exceptional problem-solving skills and a strong work ethic. His contributions were invaluable to the team.",
		// 	author:"Ilan Bhatia, Director Metabetter Technologies Private Limited",
		// 	proof:"./hedgeco.pdf"
		// },
		{
			text:"Aside from his love and dedication, Vishnu had always been a decent and kind man who kept good relationships with everyone",
			author:"Mohit Khanna",
			proof:"./staybook.pdf"
		},
		{
			text:"We found Vishnu to be a self-starter who is motivated, duty bound and hard working. He worked sincerely on his assignment and his performance was par excellence.",
			author:"Ilan Bhatia, Metabetter Technologies Private Limited",
			proof:"./hedgeco.pdf"
		},
		// {
		// 	text:"It was a pleasure to work with Vishnu. He exhibited professionalism, creativity, and a genuine passion for his work.",
		// 	author:"Ilan Bhatia",
		// 	proof:"./hedgeco.pdf"
		// },
		// {
		// 	text:"Vishnu's dedication and attention to detail were evident in his work. He consistently delivered high-quality results and was a valuable asset to our team.",
		// 	author:"Ilan Bhatia",
		// 	proof:"./hedgeco.pdf"
		// },
	]

	

	return (
		<section title="Reviews" className="relative w-screen h-fit px-24  small:px-0 flex flex-col items-center select-none font-mada text-charcoal font-[400] gap-20 small:gap-10 justify-between snap-center bg-chalk   mb-[10vh]">

			<Seperator
				top
			/>
			
			<section className="text-5xl small:text-2xl w-[30rem] small:w-[24rem] self-start capitalize flex relative items-center justify-center small:px-8">
				<p>
					Here's what some awesome people have said about working with me.
				</p>
				<img
					className="absolute -bottom-5  small:right-10 small:h-[50%]"
					alt="Reviews"
					src="./icons/comma.svg"
				/>
			</section>

			<div className="grid grid-cols-2 gap-x-[2vw] small:gap-12 grid-flow-row-dense small:flex small:flex-col small:px-8 h-[60vh] small:h-[55vh]">

				{
					reviews.slice(0,device==="SMALL"?3:undefined)
					.map(({text,author,proof},index) => 
						<Reveiw 
							key={index}
							review={text}
							author={author}
							proof={proof}
						/>
					)
				}
	
				more on way...
			</div>

			

			<ScrollBanner 
				bg={"url(./others/bannerLight.svg)"}
				bgColor={"#F4F9FF"}
				bottom
			/>

		</section>
	)
}

export default Reviews