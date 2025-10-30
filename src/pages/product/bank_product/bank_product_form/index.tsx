import { Outlet, useMatches, useParams } from '@tanstack/react-router'
import { loanProducts } from '../../../../assets/dummy'

import Container from '../../../../components/container'
import ProductDetailHeader from './components/productDetailHeader'

const BankProductFormLayout = () => {
	const matches = useMatches()

	const isView = matches.some((match) =>
		match.pathname.includes('/bank-product-form/detail/')
	)

	const { id } = useParams({
		from: isView
			? '/bank-product-form/detail/$id'
			: '/bank-product-form/edit/$id'
	})

	const product = loanProducts.find((p) => p.id === id)

	if (!product) {
		return (
			<Container>
				<div className="w-full h-full text-center">Product not found</div>
			</Container>
		)
	}

	return (
		<div className="flex flex-col">
			<ProductDetailHeader isView={isView} id={String(id)} />
			<div className="p-6">
				<Outlet />
			</div>
		</div>
	)
}

export default BankProductFormLayout
