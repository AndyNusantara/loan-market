import { Outlet } from '@tanstack/react-router'
import Layout from './Layout'

function App() {
	return (
		<Layout>
			<Outlet />
		</Layout>
	)
}

export default App
