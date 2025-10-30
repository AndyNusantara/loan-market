import { useParams } from '@tanstack/react-router'
import { loanProducts } from '../../../../assets/dummy'
import Container from '../../../../components/container'
import { useEffect, useState } from 'react'

const BankProductDetail = () => {
	const { id } = useParams({ from: '/bank-product-form/detail/$id' })

	const [data, setData] = useState({
		bankName: '',
		productName: '',
		features: {
			collateral: [''],
			targetMarket: [''],
			commission: 0,
			appraisal: 0,
			floating: 0,
			loanToValue: 0,
			penaltyFee: 0,
			interestRate: 0,
			fixRate: 0,
			fixRatePerYear: 0,
			maxTenor: 0
		},
		description: '',
		url: ''
	})

	useEffect(() => {
		if (id) {
			const product = loanProducts.find((p) => p.id === id)
			if (product) {
				setData({
					bankName: product.bankName,
					productName: product.productName,
					features: {
						collateral: product.features.collateral,
						targetMarket: product.features.targetMarket,
						commission: product.features.commission,
						appraisal: product.features.appraisal,
						floating: product.features.floating,
						loanToValue: product.features.loanToValue,
						penaltyFee: product.features.penaltyFee,
						interestRate: product.features.interestRate,
						fixRate: product.features.fixRate,
						fixRatePerYear: product.features.fixRatePerYear,
						maxTenor: product.features.maxTenor
					},
					description: product.description,
					url: product.url
				})
			}
		}
	}, [id])

	const inputProps = {
		className: 'px-3 py-2 border rounded-md border-gray-300 bg-gray-200',
		disabled: true,
		readOnly: true
	}

	return (
		<Container>
			<div className="w-full p-6">
				<div className="grid grid-cols-[auto_1fr] gap-4 items-center text-base md:text-xl">
					<label htmlFor="bankName" className="font-semibold">
						Bank
					</label>
					<input
						type="text"
						id="bankName"
						name="bankName"
						value={data.bankName}
						{...inputProps}
					/>

					<label htmlFor="productName" className="font-semibold">
						Nama Produk
					</label>
					<input
						type="text"
						id="productName"
						name="productName"
						value={data.productName}
						{...inputProps}
					/>

					<label htmlFor="collateral" className="font-semibold">
						Jaminan
					</label>
					<input
						type="text"
						id="collateral"
						name="collateral"
						value={data.features.collateral.join(', ')}
						{...inputProps}
					/>

					<label htmlFor="targetMarket" className="font-semibold">
						Target Market
					</label>
					<input
						type="text"
						id="targetMarket"
						name="targetMarket"
						value={data.features.targetMarket.join(', ')}
						{...inputProps}
					/>

					<label htmlFor="commission" className="font-semibold">
						Komisi
					</label>
					<input
						type="number"
						id="commission"
						name="features.commission"
						value={data.features.commission}
						{...inputProps}
					/>

					<label htmlFor="appraisal" className="font-semibold">
						Appraisal
					</label>
					<input
						type="number"
						id="appraisal"
						name="features.appraisal"
						value={data.features.appraisal}
						{...inputProps}
					/>

					<label htmlFor="floating" className="font-semibold">
						Floating
					</label>
					<input
						type="number"
						id="floating"
						name="features.floating"
						value={data.features.floating}
						{...inputProps}
					/>

					<label htmlFor="loanToValue" className="font-semibold">
						Loan to Value
					</label>
					<input
						type="number"
						id="loanToValue"
						name="features.loanToValue"
						value={data.features.loanToValue}
						{...inputProps}
					/>

					<label htmlFor="penaltyFee" className="font-semibold">
						Penalty Fee
					</label>
					<input
						type="number"
						id="penaltyFee"
						name="features.penaltyFee"
						value={data.features.penaltyFee}
						{...inputProps}
					/>

					<label htmlFor="interestRate" className="font-semibold">
						Interest Rate
					</label>
					<input
						type="number"
						id="interestRate"
						name="features.interestRate"
						value={data.features.interestRate}
						{...inputProps}
					/>

					<label htmlFor="fixRate" className="font-semibold">
						Fix Rate (%)
					</label>
					<input
						type="number"
						id="fixRate"
						name="features.fixRate"
						value={data.features.fixRate}
						{...inputProps}
					/>

					<label htmlFor="fixRatePerYear" className="font-semibold">
						Fix Rate (year)
					</label>
					<input
						type="number"
						id="fixRatePerYear"
						name="features.fixRatePerYear"
						value={data.features.fixRatePerYear}
						{...inputProps}
					/>

					<label htmlFor="maxTenor" className="font-semibold">
						Max Tenor (year)
					</label>
					<input
						type="number"
						id="maxTenor"
						name="features.maxTenor"
						value={data.features.maxTenor}
						{...inputProps}
					/>

					<label htmlFor="description" className="font-semibold">
						Keterangan
					</label>
					<textarea
						id="description"
						name="description"
						value={data.description}
						{...inputProps}
					/>

					<label htmlFor="url" className="font-semibold">
						URL Produk
					</label>
					<input
						type="url"
						id="url"
						name="url"
						value={data.url}
						{...inputProps}
					/>
				</div>
			</div>
		</Container>
	)
}

export default BankProductDetail
