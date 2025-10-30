interface NumberInputProps {
	value: number
	onChange: (value: number) => void
	step: number
	title: string
	suffix?: string
}

const NumberInput = ({
	value,
	onChange,
	step = 1,
	title = 'Number input',
	suffix
}: NumberInputProps) => {
	const handleIncrement = () => {
		const newValue = Math.round((value + step) * 100) / 100
		onChange(newValue)
	}

	const handleDecrement = () => {
		const newValue = Math.round((value - step) * 100) / 100
		onChange(Math.max(0, newValue))
	}

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = parseFloat(e.target.value) || 0
		const roundedValue = Math.round(newValue * 100) / 100
		onChange(Math.max(0, roundedValue))
	}

	return (
		<div
			className={`grid ${
				suffix ? 'grid-cols-[40px_1fr_30px_40px]' : 'grid-cols-[40px_1fr_40px]'
			} items-center w-full`}
		>
			<button
				type="button"
				onClick={handleDecrement}
				className="h-10 bg-primary border border-y border-gray-300 text-white text-xl font-bold cursor-pointer"
			>
				-
			</button>
			<input
				type="number"
				value={value}
				onChange={handleInputChange}
				step={step}
				min={0}
				title={title}
				className="w-full h-10 border-y border-gray-300 text-center bg-white"
			/>
			{suffix && (
				<div className="h-10 flex items-center justify-center bg-gray-100 border-y border-gray-300">
					{suffix}
				</div>
			)}

			<button
				type="button"
				onClick={handleIncrement}
				className="h-10 bg-primary border border-y border-gray-300 text-white text-xl font-bold cursor-pointer"
			>
				+
			</button>
		</div>
	)
}

export default NumberInput
