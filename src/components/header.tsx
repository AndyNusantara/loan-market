import { useRouteTitle } from '../hooks/useRouteTitle'
import Container from './container'
import { Icon } from '@iconify/react'

type HeaderProps = {
	onToggleSidebar: () => void
}

const Header = (props: HeaderProps) => {
	const pageName = useRouteTitle()

	return (
		<Container className="flex justify-between items-center p-5 md:p-7 divide-x divide-gray-300">
			<div className="flex gap-4 w-full">
				<button
					type="button"
					title="toggle-sidebar-btn"
					onClick={props.onToggleSidebar}
					className="block md:hidden"
				>
					<Icon icon="stash:burger-classic" />
				</button>
				<h1 className="text-xl lg:text-3xl">{pageName}</h1>
			</div>
			<div className="flex gap-2">
				<button
					type="button"
					title="notification-btn"
					className="px-2 border-r-2 border-gray-300"
				>
					<span className="flex gap-2 items-center ">
						<Icon icon="mdi:bell-outline" width={20} />
						<Icon icon="bxs:down-arrow" width={12} />
					</span>
				</button>
				<button
					type="button"
					title="account-btn"
					className="px-4 border-r-2 border-gray-300"
				>
					<span className="flex gap-2 items-center">
						<span className="w-24 md:fit truncate overflow-hidden">
							YOHANNES AFFANDY
						</span>
						<Icon icon="bxs:down-arrow" width={12} />
					</span>
				</button>
			</div>
		</Container>
	)
}

export default Header
