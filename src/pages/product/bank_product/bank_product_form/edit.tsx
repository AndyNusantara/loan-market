import { useEffect, useState } from 'react'
import Container from '../../../../components/container'
import { useParams } from '@tanstack/react-router'
import {
	BANK_OPTIONS,
	COLLATERAL_OPTIONS,
	loanProducts,
	PRODUCT_OPTIONS,
	TARGET_MARKET_OPTIONS
} from '../../../../assets/dummy'
import NumberInput from './components/numberInput'
import DatePicker from './components/datePicker'
import { Icon } from '@iconify/react'
import type { LoanProductType } from '../../../../types/dataType'

const BankProductEdit = () => {
	const { id } = useParams({ from: '/bank-product-form/edit/$id' })

	const [data, setData] = useState<LoanProductType>({
		id: '',
		bankName: '',
		productName: '',
		promo: {
			startDate: undefined,
			endDate: undefined
		},
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

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value } = e.target

		if (name.includes('.')) {
			const [parent, child] = name.split('.')
			setData((prev) => ({
				...prev,
				[parent]: {
					[child]: value
				}
			}))
		} else {
			setData((prev) => ({
				...prev,
				[name]: value
			}))
		}
	}

	const handleCheckboxChange = (
		field: 'collateral' | 'targetMarket',
		value: string,
		checked: boolean
	) => {
		setData((prev) => ({
			...prev,
			features: {
				...prev.features,
				[field]: checked
					? [...prev.features[field], value]
					: prev.features[field].filter((item) => item !== value)
			}
		}))
	}

	const handlePromoDateRangeChange = (
		dateRange: { start: Date | null; end: Date | null } | null
	) => {
		setData((prev) => ({
			...prev,
			promo: {
				startDate: dateRange?.start || undefined,
				endDate: dateRange?.end || undefined
			}
		}))
	}

	useEffect(() => {
		if (id) {
			const product = loanProducts.find((p) => p.id === id)
			if (product) {
				setData({
					id: product.id,
					bankName: product.bankName,
					productName: product.productName,
					promo: {
						startDate: product.promo?.startDate,
						endDate: product.promo?.endDate
					},
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

	const onSubmit = () => {}
	return (
		<Container>
			<form onSubmit={onSubmit}>
				<div className="grid lg:grid-cols-2 md:text-xl p-4 gap-6">
					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-2">
							<label htmlFor="bankName" className="font-semibold">
								Bank
							</label>
							<select
								id="bankName"
								name="bankName"
								value={data.bankName}
								onChange={handleInputChange}
								className="w-full px-3 py-2 border rounded-md border-gray-300"
							>
								{BANK_OPTIONS.map((bank) => (
									<option key={bank.value} value={bank.value}>
										{bank.label}
									</option>
								))}
							</select>
						</div>

						<div className="flex flex-col gap-2">
							<label htmlFor="productName" className="font-semibold">
								Nama Produk
							</label>
							<select
								id="productName"
								name="productName"
								value={data.productName}
								onChange={handleInputChange}
								className="w-full px-3 py-2 border rounded-md border-gray-300"
							>
								{PRODUCT_OPTIONS.map((product) => (
									<option key={product.value} value={product.value}>
										{product.label}
									</option>
								))}
							</select>
						</div>

						<DatePicker
							label="Promotional Product"
							onDateRangeChange={handlePromoDateRangeChange}
							initialStartDate={data.promo?.startDate}
							initialEndDate={data.promo?.endDate}
						/>

						<div className="flex flex-col gap-2">
							<label className="font-semibold">Jaminan</label>
							<div className="grid grid-cols-2 gap-2">
								{COLLATERAL_OPTIONS.map((option) => (
									<label
										key={option.value}
										className="flex items-center gap-2 cursor-pointer"
									>
										<input
											type="checkbox"
											value={option.value}
											checked={data.features.collateral.includes(option.value)}
											onChange={(e) =>
												handleCheckboxChange(
													'collateral',
													option.value,
													e.target.checked
												)
											}
											className="size-4 cursor-pointer"
										/>
										<span>{option.label}</span>
									</label>
								))}
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<label className="font-semibold">Target Market</label>
							<div className="grid grid-cols-2 gap-2">
								{TARGET_MARKET_OPTIONS.map((option) => (
									<label
										key={option.value}
										className="flex items-center gap-2 cursor-pointer"
									>
										<input
											type="checkbox"
											checked={data.features.targetMarket.includes(
												option.value
											)}
											onChange={(e) => {
												const newValues = e.target.checked
													? [...data.features.targetMarket, option.value]
													: data.features.targetMarket.filter(
															(item) => item !== option.value
													  )
												setData((prev) => ({
													...prev,
													features: {
														...prev.features,
														targetMarket: newValues
													}
												}))
											}}
											className="size-4 cursor-pointer"
										/>
										<span>{option.label}</span>
									</label>
								))}
							</div>
						</div>

						<div className="flex flex-col gap-2">
							<label className="font-semibold">Komisi</label>
							<NumberInput
								value={data.features.commission}
								onChange={(value) =>
									setData((prev) => ({
										...prev,
										features: { ...prev.features, commission: value }
									}))
								}
								step={1}
								suffix="%"
								title="Komisi"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label className="font-semibold">Appraisal</label>
							<NumberInput
								value={data.features.appraisal}
								onChange={(value) =>
									setData((prev) => ({
										...prev,
										features: { ...prev.features, appraisal: value }
									}))
								}
								step={0.1}
								suffix="%"
								title="Appraisal"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label className="font-semibold">Floating</label>
							<NumberInput
								value={data.features.floating}
								onChange={(value) =>
									setData((prev) => ({
										...prev,
										features: { ...prev.features, floating: value }
									}))
								}
								step={0.1}
								suffix="%"
								title="Floating"
							/>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-2">
							<label className="font-semibold">Loan to Value</label>
							<NumberInput
								value={data.features.loanToValue}
								onChange={(value) =>
									setData((prev) => ({
										...prev,
										features: { ...prev.features, loanToValue: value }
									}))
								}
								step={0.1}
								suffix="%"
								title="Loan to value"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label className="font-semibold">Penalty Fee</label>
							<NumberInput
								value={data.features.penaltyFee}
								onChange={(value) =>
									setData((prev) => ({
										...prev,
										features: { ...prev.features, penaltyFee: value }
									}))
								}
								step={0.1}
								suffix="%"
								title="Penalty Fee"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label className="font-semibold">Interest Rate</label>
							<NumberInput
								value={data.features.interestRate}
								onChange={(value) =>
									setData((prev) => ({
										...prev,
										features: { ...prev.features, interestRate: value }
									}))
								}
								step={0.1}
								suffix="%"
								title="Interest Rate"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label className="font-semibold">Fix Rate</label>
							<NumberInput
								value={data.features.fixRate}
								onChange={(value) =>
									setData((prev) => ({
										...prev,
										features: { ...prev.features, fixRate: value }
									}))
								}
								step={0.1}
								suffix="%"
								title="Fix Rate"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label className="font-semibold">Fix Rate (Year)</label>
							<NumberInput
								value={data.features.fixRatePerYear}
								onChange={(value) =>
									setData((prev) => ({
										...prev,
										features: { ...prev.features, fixRatePerYear: value }
									}))
								}
								step={1}
								title="Fix Rate (Year)"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label className="font-semibold">Max Tenor (Year)</label>
							<NumberInput
								value={data.features.maxTenor}
								onChange={(value) =>
									setData((prev) => ({
										...prev,
										features: { ...prev.features, maxTenor: value }
									}))
								}
								step={1}
								title="Max Tenor (Year)"
							/>
						</div>

						<label htmlFor="description" className="font-semibold">
							Keterangan
						</label>
						<textarea
							id="description"
							name="description"
							value={data.description}
							onChange={handleInputChange}
							className="w-full px-3 py-2 border rounded-md border-gray-300"
						/>

						<label htmlFor="url" className="font-semibold">
							URL
						</label>
						<input
							type="url"
							id="url"
							name="url"
							placeholder="null"
							value={data.url}
							onChange={handleInputChange}
							className="w-full px-3 py-2 border rounded-md border-gray-300"
						/>
					</div>
				</div>
				<div className="w-full flex justify-end p-4">
					<button
						type="submit"
						title="submit-btn"
						className="flex justify-center items-center px-4 py-2 gap-2 bg-cyan-900 text-white font-semibold md:text-xl rounded-sm"
					>
						<Icon icon="fluent:save-16-regular" width={24} />
						UPDATE
					</button>
				</div>
			</form>
		</Container>
	)
}

export default BankProductEdit
