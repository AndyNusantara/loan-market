import { useState } from 'react'

type DatePickerProps = {
	label: string
	onDateRangeChange: (
		dateRange: { start: Date | null; end: Date | null } | null
	) => void
	initialStartDate?: Date
	initialEndDate?: Date
}

const DatePicker = ({
	label,
	onDateRangeChange,
	initialStartDate,
	initialEndDate
}: DatePickerProps) => {
	const [isEnabled, setIsEnabled] = useState(
		!!(initialStartDate || initialEndDate)
	)
	const [startDate, setStartDate] = useState<Date | null>(
		initialStartDate || null
	)
	const [endDate, setEndDate] = useState<Date | null>(initialEndDate || null)

	const handleCheckboxChange = (enabled: boolean) => {
		setIsEnabled(enabled)
		if (!enabled) {
			setStartDate(null)
			setEndDate(null)
			onDateRangeChange(null)
		}
	}

	const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const date = e.target.value ? new Date(e.target.value) : null
		setStartDate(date)
		onDateRangeChange({ start: date, end: endDate })
	}

	const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const date = e.target.value ? new Date(e.target.value) : null
		setEndDate(date)
		onDateRangeChange({ start: startDate, end: date })
	}

	return (
		<div>
			<label className="flex items-center gap-2 cursor-pointer">
				<input
					type="checkbox"
					checked={isEnabled}
					onChange={(e) => handleCheckboxChange(e.target.checked)}
					className="w-4 h-4 rounded cursor-pointer"
				/>
				<span className="font-semibold">{label}</span>
			</label>

			<div
				className={`grid grid-cols-2 gap-4 ${
					isEnabled ? 'opacity-100' : 'opacity-50'
				}`}
			>
				<div>
					<label className="text-sm font-semibold text-gray-700">
						Start Date
					</label>
					<input
						type="date"
						value={startDate?.toISOString() || ''}
						onChange={handleStartDateChange}
						disabled={!isEnabled}
						className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed"
						title="Start Date"
					/>
				</div>
				<div>
					<label className="text-sm font-medium text-gray-700">End Date</label>
					<input
						type="date"
						value={endDate?.toISOString() || ''}
						onChange={handleEndDateChange}
						disabled={!isEnabled}
						className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed"
						title="End Date"
					/>
				</div>
			</div>
		</div>
	)
}

export default DatePicker
