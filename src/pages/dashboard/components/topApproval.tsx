import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer,
	type PieLabelRenderProps
} from 'recharts'
import Container from '../../../components/container'
import { useMobile } from '../../../hooks/useMobile'

const TopApproval = () => {
	const isMobile = useMobile(1024)

	const data = [
		{ bankName: 'KEP Hana Bank', percentage: 10, color: '#0088FE' },
		{ bankName: 'Mandiri', percentage: 15, color: '#00C49F' },
		{ bankName: 'BTN', percentage: 20, color: '#FFBB28' },
		{ bankName: 'BRI', percentage: 30, color: '#FF8042' },
		{ bankName: 'Artha Graha', percentage: 25, color: '#8884D8' }
	]

	const customLabel = (props: PieLabelRenderProps) => {
		const { x, y, index } = props

		return (
			<g>
				<text
					x={x}
					y={y - 8}
					fontWeight="bold"
					fill="#17a9e2"
					fontSize={isMobile ? 12 : 13}
					dominantBaseline="central"
				>
					{data[index].percentage}%
				</text>
				<text
					x={x}
					y={y + 8}
					fontWeight="bold"
					fontSize={isMobile ? 11 : 14}
					dominantBaseline="central"
				>
					{data[index].bankName}
				</text>
			</g>
		)
	}

	return (
		<Container>
			<div className="">
				<h3 className="text-center text-xl md:text-2xl font-semibold mb-4">
					Top 5 Bank Approval Tertinggi
				</h3>
				<div className="w-full h-64 lg:h-100">
					<ResponsiveContainer>
						<PieChart>
							<Pie
								data={data}
								cx="50%"
								cy="50%"
								innerRadius="30%"
								outerRadius="60%"
								dataKey="percentage"
								label={customLabel}
							>
								{data.map((item) => (
									<Cell key={item.bankName} fill={item.color} />
								))}
							</Pie>
						</PieChart>
					</ResponsiveContainer>
				</div>
			</div>
		</Container>
	)
}

export default TopApproval
