import Hero from "../layouts/Hero"
import Introduction from "../layouts/Introduction"
import Experiences from "../layouts/Experiences"
import Projects from "../layouts/Projects"
import Ethics from "../layouts/Ethics"
import SkillsTools from "../layouts/SkillsTools"
import Reviews from "../layouts/Reviews"


function Home() {
	return (
		<main className="flex bg-ivory flex-col items-center relative  w-screen h-fit overflow-x-clip overscroll-contain snap-y snap-scroll-points z-20 mb-[100vh] small:mb-0 select-none pop-in">
			<Hero/>
			<Introduction/>
			<Experiences/>
			<Ethics/>
			<Projects/>
			<SkillsTools/>
			<Reviews/>
		</main>
	)
}

export default Home