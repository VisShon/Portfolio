import Linktree from "./Linktree"
import Avaibility from "./Avaibility"

function Navbar() {

	return (

		<>
			<nav className="absolute top-0  z-30 small:text-[0.9em] font-mada flex w-full px-10 small:px-5 py-7 justify-between items-start ">
				<section 
					className="flex small:gap-1 gap-10 justify-between font-normal text-grey relative small:flex-col-reverse"
				>
					<Linktree/>
					<a
						className="hover:text-charcoal transition-colors" 
						title="Dashboard"
						href={"/dashboard"}>
						Dashboard
					</a>
					<a
						className="hover:text-charcoal transition-colors" 
						target="_blank"
						title="Resume"
						rel="noreferrer"
						href={"/resume.pdf"}>
						Resume
					</a>
					<a
						className="hover:text-charcoal transition-colors small:hidden" 
						target="_blank"
						title="Figma"
						rel="noreferrer"
						href={"https://www.figma.com/community/file/1292935637129990867/visshon"}>
						Like This ?
					</a>
				</section>

				<Avaibility/>
			</nav>
		</>
	)
}

export default Navbar