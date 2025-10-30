import { Link } from '@tanstack/react-router'
import Container from '../../../../../components/container'
import { Icon } from '@iconify/react'

const ProductDetailHeader = ({
	isView,
	id
}: {
	isView: boolean
	id: string
}) => {
	return (
		<Container className="w-full">
			<div className="w-full flex flex-col md:flex-row justify-between p-2 gap-4">
				<div className="w-full flex  items-center gap-6">
					<Link to={'/bank-product'} className="text-primary">
						<Icon icon="mage:arrow-left-circle-fill" width={50} />
					</Link>
					<h1 className="text-xl md:text-2xl lg:text-3xl">
						{isView ? 'Bank Product Detail' : 'Edit Product'}
					</h1>
				</div>
				{isView && (
					<div className="w-full flex items-center justify-end gap-6">
						<Link
							to={'/bank-product-form/edit/$id'}
							params={{ id: id }}
							className="h-fit flex items-center justify-center px-4 py-2 gap-4 bg-cyan-900 text-white"
						>
							<Icon icon="lucide:edit" width={20} />
							<h4>Edit Product</h4>
						</Link>
						<button
							type="button"
							title="delete-btn"
							className="h-fit flex items-center justify-center px-4 py-2 gap-4 bg-red-500 text-white cursor-pointer"
						>
							<Icon icon="material-symbols:delete-outline" width={20} />
							<h4>Delete Product</h4>
						</button>
					</div>
				)}
			</div>
		</Container>
	)
}

export default ProductDetailHeader
