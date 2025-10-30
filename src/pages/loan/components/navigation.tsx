import { Icon } from '@iconify/react'

interface NavigationProps {
	currentStep: number
	stepTitle: string
	onBack: () => void
	onNext: () => void
	isLastStep: boolean
}

const Navigation = ({
	currentStep,
	stepTitle,
	onBack,
	onNext,
	isLastStep
}: NavigationProps) => {
	return (
		<div className="flex items-center justify-between">
			<button
				title="back-btn"
				type="button"
				onClick={onBack}
				disabled={currentStep === 0}
				className={
					currentStep === 0
						? 'text-gray-400  cursor-not-allowed'
						: 'text-primary cursor-pointer'
				}
			>
				<Icon icon="mage:arrow-left-circle-fill" width={50} />
			</button>

			<h1 className="text-xl md:text-3xl font-semibold">{stepTitle}</h1>

			<button
				title="next-btn"
				type="button"
				onClick={onNext}
				disabled={isLastStep}
				className={
					isLastStep
						? 'text-gray-400 cursor-not-allowed'
						: 'text-primary cursor-pointer'
				}
			>
				<Icon icon="mage:arrow-right-circle-fill" width={50} />
			</button>
		</div>
	)
}

export default Navigation
