import { Link, useLocation } from '@tanstack/react-router'
import { Icon } from '@iconify/react'
import Container from './container'
import { useState } from 'react'

type SidebarItemProps = {
	icon?: string
	label: string
	href?: string
	children?: SidebarItemProps[]
}

const SidebarItemList: SidebarItemProps[] = [
	{
		icon: 'ic:outline-home',
		label: 'Dashboard',
		href: '/'
	},
	{
		icon: 'ic:outline-contacts',
		label: 'Contact',
		href: '/contact'
	},
	{
		icon: 'ic:outline-insert-drive-file',
		label: 'Loan',
		href: '/loan'
	},
	{
		icon: 'ic:outline-shopping-bag',
		label: 'Product',
		children: [
			{
				icon: '',
				label: 'Bank Product',
				href: '/bank-product'
			},
			{
				icon: '',
				label: 'Product',
				href: '/product'
			},
			{
				icon: '',
				label: 'Category Product',
				href: '/category-product'
			}
		]
	},
	{
		icon: 'guidance:bank',
		label: 'Bank',
		href: '/bank'
	},
	{
		icon: 'carbon:business-metrics',
		label: 'Credit Scoring',
		href: '/credit-scoring'
	},
	{
		icon: 'mingcute:question-line',
		label: "FAQ's",
		href: '/faq'
	},
	{
		icon: 'charm:stack',
		label: 'Pipeline',
		href: '/pipeline'
	},
	{
		icon: 'charm:stack',
		label: 'Pipeline Developer',
		href: '/pipeline-developer'
	}
]

const SidebarItem = ({ item }: { item: SidebarItemProps }) => {
	const location = useLocation()
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

	const isActive = location.pathname === item.href

	const linkStyle =
		'w-full flex items-center gap-2 p-3 rounded-md text-gray-600 hover:bg-primary hover:text-white ' +
		(isActive && 'bg-primary text-white')

	const buttonStyle =
		'w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg cursor-pointer text-gray-600 hover:bg-primary hover:text-white'

	if (item.children) {
		return (
			<>
				<button
					type="button"
					onClick={() => setIsDropdownOpen((prev) => !prev)}
					className={buttonStyle}
				>
					<div className="flex items-center gap-3">
						<span className="font-medium">{item.label}</span>
					</div>
					<span>▼</span>
				</button>

				{isDropdownOpen && (
					<div className="ml-8 flex flex-col gap-1 bg-accent">
						{item.children?.map((child) => {
							const isChildActive = location.pathname === child.href

							return (
								<Link
									key={child.href}
									to={child.href}
									className={
										linkStyle + (isChildActive ? ' bg-primary text-white' : '')
									}
								>
									<span className="font-medium">{child.label}</span>
								</Link>
							)
						})}
					</div>
				)}
			</>
		)
	}

	return (
		<Link to={item.href} className={linkStyle}>
			{item.icon && <Icon icon={item.icon} width="24" height="24" />}
			<span className="font-medium">{item.label}</span>
		</Link>
	)
}

const Sidebar = () => {
	return (
		<Container className="pt-0">
			<div className="flex flex-col gap-5">
				<div className="flex items-center justify-center">
					<img src="./logo.png" alt="logo.png" width={80} />
				</div>
				<div className="flex flex-col gap-2">
					{SidebarItemList.map((item) => {
						return <SidebarItem item={item} key={item.label} />
					})}
				</div>
			</div>
		</Container>
	)
}

export default Sidebar
