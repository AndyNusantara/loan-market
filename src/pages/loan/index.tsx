// MultiStepFormLayout.tsx
import { useState } from 'react'
import Timeline from './components/timeline'
import Navigation from './components/navigation'
import Container from '../../components/container'
import DefaultPage from './form-step/default'
import ProductChoice from './form-step/product_choice'
import Address from './form-step/address'
import UploadDocument from './form-step/upload_document'
import { Icon } from '@iconify/react'

const steps = [
	{ id: 'pinjaman', title: 'Pinjaman', component: <DefaultPage /> },
	{ id: 'pekerjaan', title: 'Pekerjaan', component: <DefaultPage /> },
	{ id: 'alamat', title: 'Alamat', component: <Address /> },
	{
		id: 'informasi_asset',
		title: 'Informasi Asset',
		component: <DefaultPage />
	},
	{
		id: 'informasi_tambahan',
		title: 'Informasi Tambahan',
		component: <DefaultPage />
	},
	{
		id: 'upload_dokumen',
		title: 'Upload Dokumen',
		component: <UploadDocument />
	},
	{ id: 'review', title: 'Review', component: <DefaultPage /> },
	{
		id: 'pilihan_produk',
		title: 'Pilihan Produk & Bank',
		component: <ProductChoice />
	},
	{ id: 'bank_officer', title: 'Bank Officer', component: <DefaultPage /> },
	{
		id: 'surat_keterangan',
		title: 'Surat Keterangan',
		component: <DefaultPage />
	},
	{ id: 'pdf_cpa', title: 'PDF CPA', component: <DefaultPage /> },
	{ id: 'summary', title: 'Summary', component: <DefaultPage /> }
]

const LoanFormLayout = () => {
	const [currentStep, setCurrentStep] = useState(0)

	const handleNext = () => {
		if (currentStep < steps.length) {
			setCurrentStep((prev) => prev + 1)
		}
	}

	const handleBack = () => {
		if (currentStep > 0) {
			setCurrentStep((prev) => prev - 1)
		}
	}

	return (
		<div className="flex flex-col gap-6">
			<Timeline steps={steps} currentStep={currentStep} />

			<div className="w-full p-6">
				<Navigation
					currentStep={currentStep}
					stepTitle={steps[currentStep].title}
					onBack={handleBack}
					onNext={handleNext}
					isLastStep={currentStep === steps.length - 1}
				/>

				<Container className="p-6 mt-4 space-y-6">
					{steps[currentStep].component}
					<div className="w-full flex justify-end">
						<button
							type="submit"
							title="submit-btn"
							className="flex justify-center items-center px-4 py-2 gap-2 bg-cyan-900 text-white font-semibold md:text-xl rounded-sm"
						>
							<Icon icon="fluent:save-16-regular" width={24} />
							UPDATE
						</button>
					</div>
				</Container>
			</div>
		</div>
	)
}

export default LoanFormLayout
