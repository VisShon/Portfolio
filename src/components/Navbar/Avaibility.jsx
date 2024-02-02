import { useState, useEffect } from "react"

function Avaibility() {


	const month = new Date().toLocaleDateString("en-US",{ 
		year: "numeric", 
		month: "long" 
	})

	const [time,setTime] = useState(new Date().toLocaleTimeString("en-IN", { 
		hour: "2-digit", 
		minute: "2-digit", 
		second: "2-digit", 
		timeZone: "Asia/Kolkata" 
	}))
	

	useEffect(()=>{
		setInterval(
			()=>setTime(new Date().toLocaleTimeString("en-IN", { 
				hour: "2-digit", 
				minute: "2-digit", 
				second: "2-digit", 
				timeZone: "Asia/Kolkata" 
			}))
			,1000
		)
	},[])

	return (
		<section 
			className="flex flex-col gap-1 items-end text-grey font-[500] z-50 font-mada"
		>
			<p
				className=" select-none"
				
			>
				Delhi       
				<b> 🕒 {time.toUpperCase()} </b>
				GMT (+5:30)
			</p>

			<p 
				className="select-none capitalize"
			>
				🟢 Available 
				<b> {month}</b>
			</p>

			<a
				href={"mailto:vshon447@gmail.com"}
				title="email me"
			>
				📧 <u> vshon447@gmail.com </u>
			</a>
		</section>
	)
}

export default Avaibility