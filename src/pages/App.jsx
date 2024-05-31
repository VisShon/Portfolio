import { useState, useEffect, Suspense } from "react"
import { pageMinDelay } from "../utils/pageMinDelay"

import Loading from "../components/Loader/index"
import Footer from "../components/Footer"
import { AnimatePresence } from "framer-motion"

const  Dashboard = pageMinDelay(() => import("./Dashboard"),2000)
const  Home = pageMinDelay(() => import("./Home"),2000)



function App() {

	const [urlPath, setUrlPath] = useState(window.location.pathname.slice(1).toLowerCase())
	const [progress, setProgress] = useState(0)

	useEffect(() =>
		setUrlPath(window.location.pathname.slice(1).toLowerCase()), 
	[])


	return (
		<AnimatePresence>
			{
				progress<100&&
				<Loading
					progress={progress}
					setProgress={setProgress}
				/>
			}

			{
				urlPath==="dashboard"?
				<Dashboard/>:
				<>
					<Home/>
					<Footer/>
				</>
			}


			<aside key="psuedo-loader" className="loader"></aside>
		</AnimatePresence>
	)
}

export default App