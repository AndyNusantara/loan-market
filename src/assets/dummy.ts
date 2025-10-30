import type { LoanProductType } from '../types/dataType'

export const loanProducts: LoanProductType[] = [
	{
		id: 'mandiri-bunga-special-2023',
		bankName: 'Mandiri',
		productName: 'Bunga Special Tengah Imlek 2023',
		statistics: {
			rating: {
				average: 4,
				totalReviews: 14
			},
			totalUser: 220
		},
		features: {
			collateral: ['Ruko', 'Rukan', 'Rumah', 'Apartemen'],
			targetMarket: ['Karyawan', 'Pengusaha'],
			commission: 1,
			appraisal: 0,
			floating: 0,
			loanToValue: 100,
			penaltyFee: 0,
			interestRate: 0,
			fixRate: 3.88,
			fixRatePerYear: 3.88,
			maxTenor: 12
		},
		description:
			'Mandiri KPR adalah kredit pemilikan rumah (KPR) bank mandiri yang diberikan secara perseorangan untuk membeli rumah tinggal/apartemen/ruko/rukan, baik melalui developer atau tidak.',
		url: '/mandiri.png'
	},
	{
		id: 'panin-kpr-xtra',
		bankName: 'Panin Bank',
		productName: 'Panin KPR & KPR XTRA',
		statistics: {
			rating: {
				average: 4,
				totalReviews: 9
			},
			totalUser: 220
		},
		features: {
			collateral: ['Ruko', 'Rukan', 'Rumah', 'Apartemen'],
			targetMarket: ['Karyawan'],
			commission: 1,
			appraisal: 0,
			floating: 0,
			loanToValue: 85,
			penaltyFee: 0,
			interestRate: 0,
			fixRate: 9.9,
			fixRatePerYear: 9.9,
			maxTenor: 10
		},
		description:
			'KPR Panin adalah fasilitas kredit yang dipergunakan untuk pembelian rumah, villa, ruko, rukan, apartemen, kavling dari perorangan, developer hingga agen properti dengan mudah dan aman. Minimal Tenor 8 Tahun',
		url: '/panin.png'
	},
	{
		id: 'mnc-kpr-secondary',
		bankName: 'MNC',
		productName: 'MNC KPR Secondary',
		statistics: {
			rating: {
				average: 5,
				totalReviews: 10
			},
			totalUser: 220
		},
		features: {
			collateral: ['Rumah', 'Apartemen'],
			targetMarket: ['Karyawan'],
			commission: 1,
			appraisal: 0,
			floating: 0,
			loanToValue: 55,
			penaltyFee: 0,
			interestRate: 0,
			fixRate: 12.0,
			fixRatePerYear: 12.0,
			maxTenor: 1
		},
		description: 'Detail information about MNC KPR Secondary...',
		url: '/mnc.png'
	},
	{
		id: 'dbs-primary',
		bankName: 'DBS Bank',
		productName: 'DBS KPR Primary',
		statistics: {
			rating: {
				average: 1,
				totalReviews: 14
			},
			totalUser: 220
		},
		features: {
			collateral: ['Rumah', 'Apartemen', 'Ruko', 'Rukan'],
			targetMarket: ['Karyawan', 'Pengusaha', 'Professional'],
			commission: 2.4,
			appraisal: 0,
			floating: 0,
			loanToValue: 0,
			penaltyFee: 0,
			interestRate: 0,
			fixRate: 0,
			fixRatePerYear: 0,
			maxTenor: 0
		},
		description: 'Detail information about DBS KPR Primary...',
		url: '/dbs.png'
	},
	{
		id: 'maybank-secondary',
		bankName: 'Maybank',
		productName: 'Maybank KPR Secondary',
		statistics: {
			rating: {
				average: 5,
				totalReviews: 9
			},
			totalUser: 220
		},
		features: {
			collateral: ['Ruko', 'Rukan', 'Rumah', 'Apartemen'],
			targetMarket: ['Karyawan', 'Pengusaha', 'Professional'],
			commission: 1,
			appraisal: 0,
			floating: 0,
			loanToValue: 0,
			penaltyFee: 0,
			interestRate: 0,
			fixRate: 2,
			fixRatePerYear: 2,
			maxTenor: 0
		},
		description: 'Detail information about Maybank KPR Secondary...',
		url: '/maybank.png'
	},
	{
		id: 'uob-kpr-primary',
		bankName: 'UOB',
		productName: 'UOB KPR Primary',
		statistics: {
			rating: {
				average: 4,
				totalReviews: 0
			},
			totalUser: 220
		},
		features: {
			collateral: ['Ruko', 'Rukan', 'Rumah', 'Apartemen'],
			targetMarket: ['Karyawan', 'Pengusaha', 'Professional'],
			commission: 1,
			appraisal: 0,
			floating: 0,
			loanToValue: 0,
			penaltyFee: 0,
			interestRate: 0,
			fixRate: 3.99,
			fixRatePerYear: 3.99,
			maxTenor: 0
		},
		description: 'Detail information about UOB KPR Primary...',
		url: '/uob.png'
	},
	{
		id: 'uob-kpr-secondary',
		bankName: 'UOB',
		productName: 'UOB KPR Secondary',
		statistics: {
			rating: {
				average: 5,
				totalReviews: 0
			},
			totalUser: 220
		},
		features: {
			collateral: ['Rumah', 'Apartemen'],
			targetMarket: ['Karyawan', 'Professional', 'Pengusaha'],
			commission: 1,
			appraisal: 0,
			floating: 0,
			loanToValue: 0,
			penaltyFee: 0,
			interestRate: 0,
			fixRate: 1,
			fixRatePerYear: 1,
			maxTenor: 1
		},
		description: 'Detail information about UOB KPR Secondary...',
		url: '/uob.png'
	},
	{
		id: 'ocbc-kpr-kendali',
		bankName: 'OCBC Bank',
		productName: 'OCBC NISP KPR Kendali',
		statistics: {
			rating: {
				average: 2,
				totalReviews: 0
			},
			totalUser: 220
		},
		features: {
			collateral: ['Ruko', 'Rukan', 'Rumah', 'Apartemen'],
			targetMarket: ['Karyawan', 'Professional', 'Pengusaha'],
			commission: 1,
			appraisal: 0,
			floating: 0,
			loanToValue: 0,
			penaltyFee: 0,
			interestRate: 0,
			fixRate: 6.75,
			fixRatePerYear: 6.75,
			maxTenor: 10
		},
		description: 'Detail information about OCBC NISP KPR Kendali...',
		url: '/ocbc.png'
	},
	{
		id: 'cimb-niaga-kpr-primary',
		bankName: 'CIMB Niaga',
		productName: 'CIMB Niaga KPR Primary',
		statistics: {
			rating: {
				average: 0,
				totalReviews: 0
			},
			totalUser: 220
		},
		features: {
			collateral: ['Ruko', 'Rukan', 'Rumah', 'Apartemen'],
			targetMarket: ['Karyawan', 'Professional', 'Pengusaha'],
			commission: 1,
			appraisal: 0,
			floating: 0,
			loanToValue: 80,
			penaltyFee: 0,
			interestRate: 0,
			fixRate: 0,
			fixRatePerYear: 0,
			maxTenor: 0
		},
		description: 'Retail information about CIMB Niaga KPR Primary...',
		url: '/cimb.png'
	},
	{
		id: 'cimb-niaga-kpr-secondary',
		bankName: 'CIMB Niaga',
		productName: 'CIMB Niaga KPR Secondary',
		statistics: {
			rating: {
				average: 3,
				totalReviews: 0
			},
			totalUser: 220
		},
		features: {
			collateral: ['Ruko', 'Rukan', 'Rumah', 'Apartemen'],
			targetMarket: ['Karyawan', 'Professional', 'Pengusaha'],
			commission: 1,
			appraisal: 0,
			floating: 0,
			loanToValue: 80,
			penaltyFee: 0,
			interestRate: 0,
			fixRate: 0,
			fixRatePerYear: 0,
			maxTenor: 0
		},
		description: 'Detail information about CIMB Niaga KPR Secondary...',
		url: '/cimb.png'
	},
	{
		id: 'cimb-niaga-kpr-extra',
		bankName: 'Panin',
		productName: 'Panin KPR Extra',
		statistics: {
			rating: {
				average: 0,
				totalReviews: 0
			},
			totalUser: 220
		},
		features: {
			collateral: ['Ruko', 'Rukan', 'Rumah', 'Apartemen'],
			targetMarket: ['Karyawan', 'Professional', 'Pengusaha'],
			commission: 1,
			appraisal: 0,
			floating: 0,
			loanToValue: 80,
			penaltyFee: 0,
			interestRate: 0,
			fixRate: 0,
			fixRatePerYear: 0,
			maxTenor: 0
		},
		description: 'Retail information about Panin KPR Extra...',
		url: '/panin.png'
	}
]

export const BANK_OPTIONS = [
	{ value: 'Mandiri', label: 'Mandiri' },
	{ value: 'BCA', label: 'BCA' },
	{ value: 'BRI', label: 'BRI' },
	{ value: 'BNI', label: 'BNI' },
	{ value: 'CIMB Niaga', label: 'CIMB Niaga' },
	{ value: 'Panin Bank', label: 'Panin Bank' },
	{ value: 'OCBC Bank', label: 'OCBC Bank' },
	{ value: 'UOB', label: 'UOB' },
	{ value: 'Commonwealth Bank', label: 'Commonwealth Bank' },
	{ value: 'MNC', label: 'MNC' }
]

export const PRODUCT_OPTIONS = [
	{
		value: 'Bunga Special Tengah Imlek 2023',
		label: 'Bunga Special Tengah Imlek 2023'
	},
	{ value: 'Panin KPR & KPR XTRA', label: 'Panin KPR & KPR XTRA' },
	{ value: 'MNC KPR Secondary', label: 'MNC KPR Secondary' },
	{ value: 'Commonwealth KPR Primary', label: 'Commonwealth KPR Primary' },
	{ value: 'Commonwealth KPR Secondary', label: 'Commonwealth KPR Secondary' },
	{ value: 'UOB KPR Primary', label: 'UOB KPR Primary' },
	{ value: 'UOB KPR Secondary', label: 'UOB KPR Secondary' },
	{ value: 'OCBC NISP KPR Kendali', label: 'OCBC NISP KPR Kendali' },
	{ value: 'CIMB Niaga KPR Primary', label: 'CIMB Niaga KPR Primary' },
	{ value: 'CIMB Niaga KPR Secondary', label: 'CIMB Niaga KPR Secondary' },
	{ value: 'CIMB Niaga KPR Extra', label: 'CIMB Niaga KPR Extra' }
]

export const COLLATERAL_OPTIONS = [
	{ value: 'Ruko', label: 'Ruko' },
	{ value: 'Rukan', label: 'Rukan' },
	{ value: 'Rumah', label: 'Rumah' },
	{ value: 'Apartemen', label: 'Apartemen' },
	{ value: 'Tanah', label: 'Tanah' },
	{ value: 'Gudang', label: 'Gudang' }
]

export const TARGET_MARKET_OPTIONS = [
	{ value: 'Karyawan', label: 'Karyawan' },
	{ value: 'Pengusaha', label: 'Pengusaha' },
	{ value: 'Professional', label: 'Professional' },
	{ value: 'Perusahaan', label: 'Perusahaan' },
	{ value: 'Perorangan', label: 'Perorangan' }
]

export const PROVINCES = [
	{ value: 'sumut', label: 'Sumatera Utara' },
	{ value: 'jabar', label: 'Jawa Barat' },
	{ value: 'jateng', label: 'Jawa Tengah' },
	{ value: 'dki', label: 'DKI Jakarta' },
	{ value: 'bali', label: 'Bali' },
	{ value: 'sulsel', label: 'Sulawesi Selatan' }
]

export const CITIES = [
	{ value: 'medan', label: 'Kota Medan', province: 'sumut' },
	{ value: 'bandung', label: 'Kota Bandung', province: 'jabar' },
	{ value: 'semarang', label: 'Kota Semarang', province: 'jateng' },
	{ value: 'jakpus', label: 'Jakarta Pusat', province: 'dki' },
	{ value: 'denpasar', label: 'Kota Denpasar', province: 'bali' },
	{ value: 'makassar', label: 'Kota Makassar', province: 'sulsel' }
]

export const DISTRICTS = [
	{ value: 'medan-selatan', label: 'Medan Selatan', city: 'medan' },
	{ value: 'medan-barat', label: 'Medan Barat', city: 'medan' },
	{ value: 'bandung-kulon', label: 'Bandung Kulon', city: 'bandung' },
	{ value: 'semarang-selatan', label: 'Semarang Selatan', city: 'semarang' },
	{ value: 'tanah-abang', label: 'Tanah Abang', city: 'jakpus' },
	{ value: 'denpasar-barat', label: 'Denpasar Barat', city: 'denpasar' }
]

export const SUBDISTRICTS = [
	{ value: 'sei-sikambing', label: 'Sei Sikambing', district: 'medan-selatan' },
	{ value: 'glugur', label: 'Glugur', district: 'medan-barat' },
	{ value: 'ciateul', label: 'Ciateul', district: 'bandung-kulon' },
	{ value: 'bulustalan', label: 'Bulustalan', district: 'semarang-selatan' },
	{
		value: 'bendungan-hilir',
		label: 'Bendungan Hilir',
		district: 'tanah-abang'
	},
	{ value: 'pemecutan', label: 'Pemecutan', district: 'denpasar-barat' }
]
