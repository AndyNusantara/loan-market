import { useEffect, useState } from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'
import { useMobile } from './hooks/useMobile'

const Layout = ({ children }: { children: React.ReactNode }) => {
	const isMobile = useMobile()
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	useEffect(() => {
		if (!isMobile) setIsSidebarOpen(true)
	}, [isMobile])

	return (
		<div className="w-full min-h-screen flex relative bg-gray-100">
			<div
				className={`${
					isSidebarOpen ? 'block' : 'hidden'
				} fixed top-0 md:sticky z-40 h-full`}
			>
				<Sidebar />
			</div>

			{isMobile && isSidebarOpen && (
				<div
					className="fixed w-full h-full bg-gray-100 opacity-50 z-30 md:hidden"
					onClick={() => setIsSidebarOpen(false)}
				/>
			)}

			<div className="flex flex-col w-full h-full relative">
				<header className="sticky top-0 z-20 border-b border-gray-200">
					<Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
				</header>
				<main>{children}</main>
			</div>
		</div>
	)
}

export default Layout
