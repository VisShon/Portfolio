import ReactFluidAnimation from "@usertive/react-fluid-animation"

function Fluid() {

	return (
		<div className="absolute top-4 z-20 w-[96%] h-[96%] bg-noise">
			<ReactFluidAnimation
				config={
					{
						textureDownsample:2,
						splatRadius: 0.02,
						curl:3
					}
				}
				className="bg-noise opacity-50 bluewash" 
				style={{
					
					width:"100%",
					height:"100%",
					borderRadius:"0.375rem",
				}}
			/>
        </div>
	)
}

export default Fluid