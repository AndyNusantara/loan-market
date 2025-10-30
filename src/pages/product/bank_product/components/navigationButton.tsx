import { useState } from 'react'
import Container from '../../../../components/container'

const NavigationButton = () => {
	const [activeSection, setActiveSection] = useState('home')

	const sections = [
		{ id: 'bank', label: 'Bank' },
		{ id: 'developer', label: 'Developer' }
	]

	return (
		<Container>
			<div className="flex justify-center items-center gap-4">
				{sections.map((section) => (
					<button
						type="button"
						key={section.id}
						onClick={() => setActiveSection(section.id)}
						className={`w-30 pb-4 pt-2 text-xl font-semibold ${
							activeSection === section.id
								? 'text-blue-600 border-b border-blue-600'
								: 'text-gray-500 hover:text-gray-700'
						}`}
					>
						{section.label}
					</button>
				))}
			</div>
		</Container>
	)
}

export default NavigationButton
