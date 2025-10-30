import { useState } from 'react'
import type { AddressDataType } from '../../../types/dataType'
import AddressForm from './components/addressForm'

const Address = () => {
	const [ktpAddress, setKtpAddress] = useState<AddressDataType>({
		address: '',
		postalCode: '',
		province: '',
		city: '',
		district: '',
		subdistrict: ''
	})

	const [domicileAddress, setDomicileAddress] = useState<AddressDataType>({
		address: '',
		postalCode: '',
		province: '',
		city: '',
		district: '',
		subdistrict: ''
	})

	const [workAddress, setWorkAddress] = useState<AddressDataType>({
		address: '',
		postalCode: '',
		province: '',
		city: '',
		district: '',
		subdistrict: ''
	})

	const [isDomicileSameAsKtp, setIsDomicileSameAsKtp] = useState(false)
	const [isWorkSameAsKtp, setIsWorkSameAsKtp] = useState(false)

	const handleDomicileCheckbox = (checked: boolean) => {
		setIsDomicileSameAsKtp(checked)
		if (checked) {
			setDomicileAddress(ktpAddress)
		}
	}

	const handleWorkCheckbox = (checked: boolean) => {
		setIsWorkSameAsKtp(checked)
		if (checked) {
			setWorkAddress(ktpAddress)
		}
	}

	const clearDomicile = () => {
		setDomicileAddress({
			address: '',
			postalCode: '',
			province: '',
			city: '',
			district: '',
			subdistrict: ''
		})
		setIsDomicileSameAsKtp(false)
	}

	const clearWork = () => {
		setWorkAddress({
			address: '',
			postalCode: '',
			province: '',
			city: '',
			district: '',
			subdistrict: ''
		})
		setIsWorkSameAsKtp(false)
	}

	return (
		<div className="flex flex-col gap-6">
			<AddressForm
				title="Data KTP"
				data={ktpAddress}
				onChange={setKtpAddress}
			/>

			<div className="w-full flex justify-between items-center">
				<label className="flex items-center gap-2 cursor-pointer">
					<input
						type="checkbox"
						checked={isDomicileSameAsKtp}
						onChange={(e) => handleDomicileCheckbox(e.target.checked)}
						className="size-5 rounded-sm"
					/>
					<h5 className="text-lg font-semibold">Domisili Sesuai KTP</h5>
				</label>
				<button
					type="button"
					onClick={clearDomicile}
					className="bg-red-500 text-white px-4 py-2 rounded-sm cursor-pointer"
				>
					CLEAR
				</button>
			</div>

			{!isDomicileSameAsKtp && (
				<AddressForm
					title="Data Domisili"
					data={domicileAddress}
					onChange={setDomicileAddress}
				/>
			)}

			<div className="w-full flex justify-between items-center">
				<label className="flex items-center gap-2 cursor-pointer">
					<input
						type="checkbox"
						checked={isWorkSameAsKtp}
						onChange={(e) => handleWorkCheckbox(e.target.checked)}
						className="size-5 rounded-sm"
					/>
					<h5 className="text-lg font-semibold">
						Alamat Tempat Bekerja / perusahaan Sesuai KTP
					</h5>
				</label>
				<button
					type="button"
					onClick={clearWork}
					className="bg-red-500 text-white px-4 py-2 rounded-sm cursor-pointer"
				>
					CLEAR
				</button>
			</div>

			{!isWorkSameAsKtp && (
				<AddressForm
					title="Data Alamat Tempat Bekerja"
					data={workAddress}
					onChange={setWorkAddress}
				/>
			)}
		</div>
	)
}

export default Address
