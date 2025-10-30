import { Icon } from '@iconify/react'
import Container from '../../../../components/container'

const data = [
	{
		icon: 'ic:outline-home',
		label: 'KPR dan Multiguna'
	},
	{
		icon: 'la:user-tie',
		label: 'Refinancing'
	},
	{
		icon: 'iconamoon:credit-card-light',
		label: 'Kredit Modal Usaha dan Investasi'
	},
	{
		icon: 'streamline-plump:piggy-bank',
		label: 'Deposito'
	},
	{
		icon: 'bx:building',
		label: 'Take Over dan Bridging Loan'
	}
]

const FilteringCard = () => {
	return (
		<div className="w-full flex flex-row flex-wrap items-center justify-center gap-4">
			{data.map((item) => {
				return (
					<Container
						key={item.label}
						className="flex-1 min-w-40 h-35 md:h-45 lg:h-50 flex items-center justify-center"
					>
						<div className="w-full grid grid-rows-2 place-items-center p-4 text-gray-500">
							<Icon
								icon={item.icon}
								className="size-10 md:size-15 xl:size-20"
							/>
							<span className="flex items-center">
								<h4 className="text-sm md:text-lg text-center">{item.label}</h4>
							</span>
						</div>
					</Container>
				)
			})}
		</div>
	)
}

export default FilteringCard
