import { Icon } from '@iconify/react'
import Container from '../../../components/container'

const CardData = [
	{
		icon: 'ic:outline-contacts',
		title: 'contact',
		value: '51'
	},
	{
		icon: 'ic:outline-insert-drive-file',
		title: 'loan',
		value: '56'
	},
	{
		icon: 'ic:outline-shopping-bag',
		title: 'product',
		value: '80'
	},
	{
		icon: 'guidance:bank',
		title: 'bank',
		value: '30'
	}
]

const ProductCard = () => {
	return (
		<div className="grid grid-cols-2 xl:grid-cols-4 gap-4 2xl:gap-8">
			{CardData.map((item) => (
				<Container key={item.title} className="h-full min-h-20">
					<div className="flex md:flex-col xl:flex-row h-full justify-center xl:justify-evenly items-center min-w-30 gap-2 p-2">
						<span className="flex items-center justify-center size-10 rounded-full text-primary bg-blue-100">
							<Icon icon={item.icon} width={25} />
						</span>
						<span className="flex justify-baseline items-center flex-col gap-2">
							<h4 className="xl:text-xl font-semibold">
								{item.title.toUpperCase()}
							</h4>
							<h3 className="xl:text-3xl text-primary font-bold">
								{item.value}
							</h3>
						</span>
					</div>
				</Container>
			))}
		</div>
	)
}
export default ProductCard
