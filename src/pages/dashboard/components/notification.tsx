import Container from '../../../components/container'

const notifications = [
	{
		time: '2 hrs',
		title: 'admin_branch has updated',
		subtitle: 'Hans Yolanda - Application Success | MYCRM'
	},
	{
		time: '2 hrs',
		title: 'admin_branch has updated',
		subtitle: 'Harry Handoko - Contact | MYCRM'
	},
	{
		time: '4 hrs',
		title: 'admin_branch has updated',
		subtitle: 'Hans Yolanda - Application Success | MYCRM'
	},
	{
		time: '4 hrs',
		title: 'admin_branch has updated',
		subtitle: 'Harry Handoko - Contact | MYCRM'
	}
]

const Notification = () => {
	return (
		<Container>
			<div className="flex flex-col gap-5 p-4">
				<h3 className="font-semibold xl:text-2xl">Notification</h3>
				<div>
					{notifications.map((notification, index) => (
						<div key={index} className="grid grid-cols-[auto_auto_1fr] gap-3">
							<span className="text-md min-w-10">{notification.time}</span>

							<div className="h-full flex flex-col items-center mt-1 relative ">
								<div
									className={`w-4 h-4 rounded-full shrink-0 ${
										index % 2 === 0 ? 'bg-gray-600' : 'bg-primary'
									}`}
								/>
								{index !== notifications.length - 1 && (
									<div className="w-0.5 h-full bg-gray-600" />
								)}
							</div>

							<div className="w-full">
								<p className="text-md font-semibold text-gray-6	00">
									{notification.title}
								</p>
								<p className="text-sm text-gray-600 mt-0.5">
									{notification.subtitle}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	)
}

export default Notification
