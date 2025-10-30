import { Icon } from '@iconify/react'
import Container from '../../../../components/container'

const FilteringSection = () => {
	return (
		<div className="w-full flex flex-col lg:flex-row gap-6 xl:text-xl">
			<Container className="w-full">
				<div className="w-full flex justify-between items-center">
					<input
						title="search"
						type="text"
						placeholder="Cari berdasarkan nama"
						className="w-full"
					/>
					<Icon icon="material-symbols:search" width={24} />
				</div>
			</Container>
			<div className="w-full flex flex-col md:flex-row gap-6">
				<Container className="w-full">
					<button
						type="button"
						title="filter-btn"
						className="w-full whitespace-nowrap flex justify-between items-center"
					>
						<h5>Kredit Pemilikan</h5>
						<Icon icon="ri:arrow-down-s-line" width={24} />
					</button>
				</Container>
				<div className="w-full flex gap-6">
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
					<button
						type="button"
						title="add-product-btn"
						className="w-full flex items-center justify-center gap-2 bg-primary text-white rounded-sm shadow-md px-4 py-2 whitespace-nowrap"
					>
						<Icon icon="ic:baseline-plus" width={24} />
						<h5>Tambahkan Product</h5>
					</button>
				</div>
			</div>
		</div>
	)
}

export default FilteringSection
