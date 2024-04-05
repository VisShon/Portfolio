
import { lazy } from "react"
const  Fluid = lazy(() => import("./Fluid"))


function Footer() {  

	return (
		<footer className="w-screen h-[100vh] bg-ivory fixed top-0 small:relative  z-0  p-10 flex flex-col justify-center items-center font-mada text-ivory  mb-2 pop-in">

			<aside className="bg-ivory w-[12vw] h-[10vh] absolute top-0 -right-[8.5vw] small:-right-[8vh] z-30 skew-x-[45deg]  small:h-[30vw] small:w-[10vh]"></aside>

			<a 
				className="border border-ivory p-2 rounded-lg px-4 hover:bg-ivory hover:text-charcoal transition-all ease-in-out duration-100 z-50 absolute bottom-16 left-20 small:left-12 small:bottom-36"
				title="Email me"
				href={"mailto:vshon447@gmail.com"}
			>
				Contact Me
			</a>

			<Fluid/>

			<aside className="w-[96%] h-[96%] p-10 absolute top-4  flex flex-col justify-end bg-charcoal bluewash rounded-lg">
				<section className="absolute top-10 small:text-sm">
					<p>From here, <b>new</b> </p>
					<p><b>chapters await</b>, and</p>
					<p>our adventure</p>
					<p>continues</p>
				</section>	


				<section className="flex justify-between  small:flex-col small:w-full">

					<p className="text-7xl mb-20 small:text-6xl small:mb-32">HAVE AN IDEA ?</p>

					<article className="w-fit font-[300] self-end">
						<p>2023 © VisShon, New Delhi. All rights reserved</p>
						<section className="text-sm small:text-[1.6vh] underline flex gap-2 justify-between">
							<a href="tel:+91-7017495876" title={"Ph. no: +91-7017495876"}>
								Ph. no: +91-7017495876
							</a>
							<a href={"mailto:vshon447@gmail.com"} title={"Mail: vshon447@gmail.com"}>
								Mail: vshon447@gmail.com
							</a>
						</section>
					</article>
				</section>
			</aside>


		</footer>
	)
}

export default Footer