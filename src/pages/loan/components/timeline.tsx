import Container from '../../../components/container'

interface TimelineProps {
	steps: { id: string; title: string }[]
	currentStep: number
}

const Timeline = ({ steps, currentStep }: TimelineProps) => {
	return (
		<Container>
			<div className="flex overflow-x-auto p-6">
				{steps.map((step, index) => {
					return (
						<div
							key={step.id}
							className="w-full flex flex-col items-center relative"
						>
							{index < steps.length - 1 && (
								<div
									className={`absolute top-1.5 sm:top-2 h-1 ${
										index < currentStep ? 'bg-cyan-900' : 'bg-gray-300'
									} w-[calc(100%-8px)] left-[calc(50%+8px)]`}
								/>
							)}

							<div
								className={`relative z-10 w-3 h-3 sm:w-4 sm:h-4 rounded-full shrink-0 ${
									index < currentStep
										? 'bg-cyan-900'
										: index == currentStep
										? 'bg-primary'
										: 'bg-gray-300'
								}`}
							/>

							<div
								className={`text-xs sm:text-sm md:text-base font-medium mt-2 sm:mt-3 md:mt-4 text-center px-1 ${
									index < currentStep
										? 'text-cyan-900'
										: index == currentStep
										? 'text-primary'
										: 'text-gray-300'
								}`}
							>
								{step.title}
							</div>
						</div>
					)
				})}
			</div>
		</Container>
	)
}

export default Timeline
