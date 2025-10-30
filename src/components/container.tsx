import classNames from 'classnames'

type ContainerProps = {
	children: React.ReactNode
	className?: string
}

const Container = (props: ContainerProps) => {
	const cn = classNames(
		'bg-white shadow-md rounded-sm p-2 border-1 border-gray-200',
		props.className
	)

	return <div className={cn}>{props.children}</div>
}

export default Container
