import { Icon } from '@iconify/react'
import Container from '../../../components/container'
import { loanProducts } from '../../../assets/dummy'
import RatingStar from '../../../components/ratingStar'

const ProductChoice = () => {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex gap-6 xl:text-xl">
				<Container className="w-full">
					<div className="w-full flex justify-between items-center">
						<input
							title="search"
							type="text"
							placeholder="Cari Nama Bank"
							className="w-full"
						/>
						<Icon
							icon="material-symbols:search"
							width={24}
							className="text-primary"
						/>
					</div>
				</Container>
				<Container className="w-fit">
					<button
						type="button"
						title="sort-btn"
						className="w-full min-w-20 flex justify-between items-center"
					>
						<Icon icon="bx:sort-z-a" width={24} />
						<h5>Sort</h5>
					</button>
				</Container>
			</div>
			<label className="flex items-center gap-2">
				<input type="checkbox" className="size-5 rounded-sm" />
				<h5 className="text-lg font-semibold">
					Send to Pool (Pilih opsi ini jika Anda ingin mengirim leads ke semua
					bank rekanan Loan Market)
				</h5>
				<span className="relative group">
					<Icon
						icon="mingcute:question-fill"
						width={35}
						className="text-primary"
					/>
					<span className="absolute p-2 bg-white border-2 border-gray-300 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
						Tooltip
					</span>
				</span>
			</label>
			<div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4">
				{loanProducts.map((item) => {
					return (
						<Container
							key={item.productName}
							className="flex-1 min-w-60 h-100 flex items-center justify-center"
						>
							<div className="w-full h-full flex flex-col gap-2">
								<input type="checkbox" title="select-bank" className="size-4" />
								<span className="flex flex-col items-center justify-center gap-0">
									<img src={item.url} alt={item.bankName} width={200} />
									<RatingStar rating={item.statistics?.rating.average || 0} />
									<h6 className="text-sm">
										{item.statistics?.rating.totalReviews} Reviews
									</h6>
								</span>
								<h3 className="text-primary font-semibold">
									{item.productName}
								</h3>
								<h4>{item.description}</h4>
							</div>
						</Container>
					)
				})}
			</div>
		</div>
	)
}
export default ProductChoice
