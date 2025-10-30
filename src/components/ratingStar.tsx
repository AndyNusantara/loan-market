import { Icon } from '@iconify/react'

type RatingStarProps = {
	rating: number
}

const RatingStar = (props: RatingStarProps) => {
	return (
		<div className="flex items-center gap-0.5">
			{[...Array(5)].map((_, index) => (
				<Icon
					key={index}
					icon={index < (props.rating || 0) ? 'mdi:star' : 'mdi:star-outline'}
					className={`text-xl 2xl:text-4xl ${
						index < (props.rating || 0) ? 'text-yellow-400' : 'text-gray-300'
					}`}
				/>
			))}
		</div>
	)
}

export default RatingStar
