import Notification from './components/notification'
import ProductCard from './components/productCard'
import Profile from './components/profile'
import TargetCard from './components/targetCard'
import TopApproval from './components/topApproval'

const Dashboard = () => {
	return (
		<div className="w-full h-full">
			<Profile />
			<div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 p-5">
				<ProductCard />
				<TargetCard />
				<div className="w-full h-full md:max-w-60 lg:max-w-none md:row-start-1 md:row-span-2 md:col-start-2">
					<Notification />
				</div>
				<TopApproval />
			</div>
		</div>
	)
}

export default Dashboard
