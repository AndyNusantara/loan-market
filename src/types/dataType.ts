export type LoanProductType = {
	id: string
	bankName: string
	productName: string
	statistics?: {
		rating: {
			average: number
			totalReviews: number
		}
		totalUser: number
	}
	promo?: {
		startDate: Date | undefined
		endDate: Date | undefined
	}
	features: {
		collateral: string[]
		targetMarket: string[]
		commission: number
		appraisal: number
		floating: number
		loanToValue: number
		penaltyFee: number
		interestRate: number
		fixRate: number
		fixRatePerYear: number
		maxTenor: number
	}
	description: string
	url: string
}

export type AddressDataType = {
	address: string
	postalCode: string
	province: string
	city: string
	district: string
	subdistrict: string
}
