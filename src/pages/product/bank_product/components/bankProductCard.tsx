import { Icon } from '@iconify/react'
import Container from '../../../../components/container'
import { Link } from '@tanstack/react-router'
import { loanProducts } from '../../../../assets/dummy'
import RatingStar from '../../../../components/ratingStar'

const BankProductCard = () => {
	return (
		<div className="grid grid-flow-row gap-4">
			{loanProducts.map((item) => {
				return (
					<Container key={item.id}>
						<div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr_auto]  items-center justify-center gap-4 p-4 2xl:p-0">
							<div className="flex flex-col items-center gap-4 shrink-0">
								<img
									src={item.url}
									alt={item.bankName}
									className="w-24 xl:w-40 2xl:w-60 h-auto"
								/>
								<div className="grid grid-cols-2 divide-x divide-gray-300 w-full">
									<div className="flex flex-col items-center p-4">
										<h5 className="text-sm xl:text-xl text-gray-700">
											Rating:
										</h5>
										<RatingStar rating={item.statistics?.rating.average || 0} />
										<h6 className="text-xs xl:text-lg">
											{item.statistics?.rating.totalReviews} Reviews
										</h6>
									</div>
									<div className="flex flex-col items-center p-4">
										<h5 className="text-sm xl:text-xl text-gray-700">User:</h5>
										<h5 className="text-lg xl:text-xl font-bold">
											{item.statistics?.totalUser}
										</h5>
										<h6 className="text-xs xl:text-lg">Users yearly</h6>
									</div>
								</div>
							</div>
							<div className="w-full flex flex-col gap-4 px-4 md:px-0">
								<div className="flex flex-wrap items-center justify-center text-center gap-x-2">
									<h2 className="text-xl xl:text-4xl font-semibold">
										{item.bankName}
									</h2>
									<h2 className="text-xl xl:text-2xl 2xl:text-4xl text-primary font-semibold">
										{item.productName}
									</h2>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-6 text-gray-700">
									<div className="flex items-center gap-2">
										<Icon
											icon="pajamas:chart"
											width={30}
											className="shrink-0"
										/>
										<h5 className="text-sm xl:text-xl">
											Fix Rate (Year): {item.features.fixRatePerYear || '-'}
										</h5>
									</div>
									<div className="flex items-center gap-2">
										<Icon
											icon="lsicon:shield-outline"
											width={30}
											className="shrink-0"
										/>
										<h5 className="text-sm xl:text-xl">
											Jaminan: {item.features.collateral.join(', ')}
										</h5>
									</div>
									<div className="flex items-center gap-2">
										<Icon
											icon="mingcute:time-line"
											width={30}
											className="shrink-0"
										/>
										<h5 className="text-sm xl:text-xl">
											Max Tenor: {item.features.maxTenor || '-'}
										</h5>
									</div>
									<div className="flex items-center gap-2">
										<Icon
											icon="material-symbols:person-outline"
											width={30}
											className="shrink-0"
										/>
										<h5 className="text-sm xl:text-xl">
											Target: {item.features.targetMarket.join(', ')}
										</h5>
									</div>
									<div className="flex items-center gap-2">
										<Icon
											icon="ant-design:field-time-outlined"
											width={30}
											className="shrink-0"
										/>
										<h5 className="text-sm xl:text-xl">
											Loan to Value: {item.features.loanToValue || '-'}
										</h5>
									</div>
									<div className="flex items-center gap-2">
										<Icon
											icon="dashicons:money-alt"
											width={30}
											className="shrink-0"
										/>
										<h5 className="text-sm xl:text-xl">
											Komisi: {item.features.commission}%
										</h5>
									</div>
								</div>
							</div>
							<div className="w-full flex items-center justify-center p-4">
								<Link
									to="/bank-product-form/detail/$id"
									params={{ id: item.id }}
									className="bg-white text-primary border-2 border-gray-200 shadow-md px-4 py-2 rounded hover:bg-gray-50 transition-colors whitespace-nowrap text-sm xl:text-xl"
								>
									Detail
								</Link>
							</div>
						</div>
					</Container>
				)
			})}
		</div>
	)
}

export default BankProductCard
