import Linktree from "./Linktree"
import Avaibility from "./Avaibility"

function Navbar() {

	return (

		<>
			<nav className="absolute top-0  z-30 small:text-[1em] font-mada flex w-full px-10 small:px-5 py-7 justify-between items-start ">
				<section 
					className="flex small:gap-3 gap-10 justify-between font-normal text-grey relative small:flex-col-reverse "
				>
					<Linktree/>
					<a
						className="hover:text-charcoal transition-colors underline" 
						title="Dashboard"
						href={"/dashboard"}>
						Dashboard
					</a>
					<a
						className="hover:text-charcoal transition-colors underline" 
						target="_blank"
						title="Resume"
						rel="noreferrer"
						href={"/resume.pdf"}>
						Resume
					</a>
				</section>

				<Avaibility/>
			</nav>
		</>
	)
}

export default Navbar