type CustomContainerProps = {
	title: string
	children: React.ReactNode
}

const CustomContainer = (props: CustomContainerProps) => {
	return (
		<div className="w-full flex flex-col border border-gray-300">
			<div className="px-4 py-2 bg-cyan-900">
				<h2 className="text-xl lg:text-3xl text-white font-bold">
					{props.title}
				</h2>
			</div>
			<div className="p-6">{props.children}</div>
		</div>
	)
}

export default CustomContainer
