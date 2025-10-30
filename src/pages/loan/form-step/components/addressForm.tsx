import CustomContainer from './customContainer'
import {
	CITIES,
	DISTRICTS,
	PROVINCES,
	SUBDISTRICTS
} from '../../../../assets/dummy'
import type { AddressDataType } from '../../../../types/dataType'

type AddressFormProps = {
	title: string
	data: AddressDataType
	onChange: (data: AddressDataType) => void
}

const AddressForm = (props: AddressFormProps) => {
	const handleChange = (field: keyof AddressDataType, value: string) => {
		props.onChange({ ...props.data, [field]: value })
	}

	return (
		<CustomContainer title={props.title}>
			<div className="grid lg:grid-cols-2 gap-6">
				<div className="flex flex-col gap-2">
					<label htmlFor="alamat" className="font-semibold">
						Alamat Lengkap (Jalan, Komplek, RT/RW)
					</label>
					<input
						type="text"
						id="alamat"
						placeholder="--Isi Alamat Lengkap--"
						value={props.data.address}
						onChange={(e) => handleChange('address', e.target.value)}
						className="w-full px-3 py-2 border rounded-md border-gray-300"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="kodePOS" className="font-semibold">
						Kode POS
					</label>
					<input
						type="text"
						id="kodePOS"
						placeholder="--Isi Kode POS--"
						value={props.data.postalCode}
						onChange={(e) => handleChange('postalCode', e.target.value)}
						className="w-full px-3 py-2 border rounded-md border-gray-300"
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="provinsi" className="font-semibold">
						Provinsi
					</label>
					<select
						id="provinsi"
						name="provinsi"
						value={props.data.province}
						onChange={(e) => handleChange('province', e.target.value)}
						className="w-full px-3 py-2 border rounded-md border-gray-300"
					>
						{PROVINCES.map((bank) => (
							<option key={bank.value} value={bank.value}>
								{bank.label}
							</option>
						))}
					</select>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="kabupatenKota" className="font-semibold">
						Kabupaten / Kota
					</label>
					<select
						id="kabupatenKota"
						name="kabupatenKota"
						value={props.data.city}
						onChange={(e) => handleChange('city', e.target.value)}
						className="w-full px-3 py-2 border rounded-md border-gray-300"
					>
						{CITIES.map((bank) => (
							<option key={bank.value} value={bank.value}>
								{bank.label}
							</option>
						))}
					</select>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="kecamatan" className="font-semibold">
						Kecamatan
					</label>
					<select
						id="kecamatan"
						name="kecamatan"
						value={props.data.district}
						onChange={(e) => handleChange('district', e.target.value)}
						className="w-full px-3 py-2 border rounded-md border-gray-300"
					>
						{DISTRICTS.map((bank) => (
							<option key={bank.value} value={bank.value}>
								{bank.label}
							</option>
						))}
					</select>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="kelurahan" className="font-semibold">
						Kelurahan
					</label>
					<select
						id="kelurahan"
						name="kelurahan"
						value={props.data.subdistrict}
						onChange={(e) => handleChange('subdistrict', e.target.value)}
						className="w-full px-3 py-2 border rounded-md border-gray-300"
					>
						{SUBDISTRICTS.map((bank) => (
							<option key={bank.value} value={bank.value}>
								{bank.label}
							</option>
						))}
					</select>
				</div>
			</div>
		</CustomContainer>
	)
}

export default AddressForm
