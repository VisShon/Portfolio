import {createRoot} from "react-dom/client"

import App from "./pages/App"
import Navbar from "./components/Navbar"

import "./styles/index.css"
import { ReactLenis } from "@studio-freight/react-lenis"


const rootElement = document.getElementById("root")
const root = createRoot(rootElement)


root.render(
	<>
		<Navbar/>

		<ReactLenis 
			options={{
				smoothWheel: true,
				duration: 5,
				lerp:0.03,
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			}} 
			root={true}>
			<App/>
		</ReactLenis>
	
	</>
)
