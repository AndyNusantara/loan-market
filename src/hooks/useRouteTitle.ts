import { useMatches } from '@tanstack/react-router'

export const useRouteTitle = () => {
	const matches = useMatches()
	const currentMatch = matches[matches.length - 1]
	return currentMatch?.context?.title || 'Not Found'
}
