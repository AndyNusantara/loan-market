import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import Container from '../../../components/container'

const TargetChart = ({ percentage }: { percentage: number }) => {
	const displayPercentage = percentage > 100 ? 100 : percentage
	const remaining = 100 - displayPercentage

	const data = [
		{ name: 'Progress', value: displayPercentage },
		{ name: 'Remaining', value: remaining }
	]

	return (
		<div className="w-32 h-32 lg:w-42 lg:h-42 relative">
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie
						data={data}
						cx="50%"
						cy="50%"
						innerRadius="70%"
						outerRadius="100%"
						startAngle={90}
						endAngle={-270}
						dataKey="value"
					>
						<Cell fill="#17A9E2" />
						<Cell fill="#E5E7EB" />
					</Pie>
				</PieChart>
			</ResponsiveContainer>
			<div className="absolute inset-0 flex items-center justify-center">
				<div className="text-xl text-center font-bold text-gray-900">
					{percentage}%
				</div>
			</div>
		</div>
	)
}

const TargetCard = () => {
	return (
		<Container>
			<div className="grid grid-cols-2 divide-x divide-gray-300 min-h-50 2xl:min-h-60">
				<div className="flex flex-col items-center justify-end lg:justify-center gap-3">
					<h3 className="lg:text-xl text-center font-semibold">
						PINJAMAN DISETUJUI
					</h3>
					<TargetChart percentage={40} />
					<h4 className="lg:text-lg text-center">
						2/5 Pinjaman telah disetujui
					</h4>
				</div>
				<div className="flex flex-col items-center justify-end lg:justify-center gap-3">
					<h3 className="lg:text-xl text-center font-semibold">TARGET</h3>
					<TargetChart percentage={240} />
					<h4 className="lg:text-lg text-center">
						Rp14.000.000.000 / Rp5.000.000.000
					</h4>
				</div>
			</div>
		</Container>
	)
}

export default TargetCard
