import { useState, useEffect, Suspense } from "react"
import { pageMinDelay } from "../utils/pageMinDelay"

import Loading from "../components/Loader/index"
import Footer from "../components/Footer"

const  Dashboard = pageMinDelay(() => import("./Dashboard"),2000)
const  Home = pageMinDelay(() => import("./Home"),2000)



function App() {

	const [urlPath, setUrlPath] = useState(window.location.pathname.slice(1).toLowerCase())

	useEffect(() =>
		setUrlPath(window.location.pathname.slice(1).toLowerCase()), 
	[])


	return (
		<>

			<Suspense fallback={
				<Loading/>
			}>


				{
					urlPath==="dashboard"?
					<Dashboard/>:
					<>
						<Home/>
						<Footer/>
					</>
				}


			</Suspense>

		
			<aside className="loader"></aside>
		</>
	)
}

export default App