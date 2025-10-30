import { Icon } from '@iconify/react'
import Container from '../../../components/container'

const Profile = () => {
	return (
		<Container className="flex gap-5 items-center p-5">
			<div>
				<div className="size-24 lg:size-30 rounded-full overflow-hidden bg-red-500">
					<img
						src="/person.jpg"
						alt="user-img"
						className="object-cover w-full h-full"
					/>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<h1 className="text-xl lg:text-3xl font-semibold text-primary">
					YOHANNES AFFENDY
				</h1>
				<div className="flex flex-col md:flex-row justify-between md:divide-x md:divide-gray-300">
					<div className="flex flex-col gap-2 px-4">
						<span className="flex items-center gap-2">
							<span className="flex items-center justify-center size-10 rounded-full text-primary bg-blue-100 shrink-0">
								<Icon icon="hugeicons:permanent-job" width={20} />
							</span>
							<h6 className="text-md font-semibold">Loan Market Office Dev</h6>
						</span>
						<span className="flex items-center gap-2">
							<span className="flex items-center justify-center size-10 rounded-full text-primary bg-blue-100 shrink-0">
								<h6 className="text-sm font-semibold">ID:</h6>
							</span>
							<h6 className="text-md font-semibold">LM9990001</h6>
						</span>
					</div>
					<div className="flex flex-col gap-2 px-4">
						<span className="flex items-center gap-2">
							<span className="flex items-center justify-center size-10 rounded-full text-primary bg-blue-100 shrink-0">
								<Icon icon="ic:outline-email" width={20} />
							</span>
							<h6 className="text-md font-semibold">it@loanmarket.co.id</h6>
						</span>
						<span className="flex items-center gap-2">
							<span className="flex items-center justify-center size-10 rounded-full text-primary bg-blue-100 shrink-0">
								<Icon icon="ic:outline-phone" width={20} />
							</span>
							<h6 className="text-md font-semibold">6281234567890</h6>
						</span>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default Profile
