import {
	createRouter,
	createRoute,
	createRootRoute
} from '@tanstack/react-router'
import App from '../App'
import Dashboard from '../pages/dashboard'
import BankProduct from '../pages/product/bank_product'
import BankProductFormLayout from '../pages/product/bank_product/bank_product_form'
import BankProductDetail from '../pages/product/bank_product/bank_product_form/detail'
import BankProductEdit from '../pages/product/bank_product/bank_product_form/edit'
import LoanFormLayout from '../pages/loan'

const rootRoute = createRootRoute({
	component: App
})

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: Dashboard,
	beforeLoad: () => ({ title: 'Dashboard' })
})

const bankProductRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/bank-product',
	component: BankProduct,
	beforeLoad: () => ({ title: 'Bank Products' })
})

const bankProductFormRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/bank-product-form',
	component: BankProductFormLayout,
	beforeLoad: () => ({ title: 'Bank Product' })
})

const bankProductDetailRoute = createRoute({
	getParentRoute: () => bankProductFormRoute,
	path: 'detail/$id',
	component: BankProductDetail,
	beforeLoad: () => ({ title: 'Product Detail' })
})

const bankProductEditRoute = createRoute({
	getParentRoute: () => bankProductFormRoute,
	path: 'edit/$id',
	component: BankProductEdit,
	beforeLoad: () => ({ title: 'Edit Product' })
})

const LoanRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/loan',
	component: LoanFormLayout,
	beforeLoad: () => ({ title: 'Bank Products' })
})

bankProductFormRoute.addChildren([bankProductDetailRoute, bankProductEditRoute])

export const router = createRouter({
	routeTree: rootRoute.addChildren([
		indexRoute,
		bankProductRoute,
		bankProductFormRoute,
		LoanRoute
	])
})
