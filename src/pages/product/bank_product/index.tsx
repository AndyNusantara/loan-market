import FilteringCard from './components/filteringCard'
import FilteringSection from './components/filteringSection'
import NavigationButton from './components/navigationButton'
import BankProductCard from './components/bankProductCard'
import { Outlet } from '@tanstack/react-router'

const BankProduct = () => {
	return (
		<div className="flex flex-col">
			<NavigationButton />
			<div className="flex flex-col gap-6 p-6">
				<FilteringCard />
				<FilteringSection />
				<BankProductCard />
			</div>
			<Outlet />
		</div>
	)
}

export default BankProduct
