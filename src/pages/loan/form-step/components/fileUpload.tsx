import { Icon } from '@iconify/react'
import { useRef, useState } from 'react'

type FileUploadProps = {
	title: string
	placeholder: string
}

const FileUpload = (props: FileUploadProps) => {
	const fileInputRef = useRef<HTMLInputElement>(null)
	const [fileName, setFileName] = useState<string>('')

	const handleButtonClick = () => {
		fileInputRef.current?.click()
	}

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		setFileName(file ? file.name : '')
	}

	return (
		<div className="flex flex-col gap-2">
			<div className="flex gap-2">
				<button
					type="button"
					onClick={handleButtonClick}
					className="w-full flex items-center justify-between px-4 py-2 text-gray-400 border border-gray-300 rounded-sm cursor-pointer"
				>
					{fileName || props.placeholder}
					<Icon
						icon="material-symbols:upload-rounded"
						width={20}
						className="shrink-0"
					/>
				</button>
			</div>
			<input
				title={props.title}
				type="file"
				ref={fileInputRef}
				onChange={handleFileChange}
				className="hidden"
			/>
		</div>
	)
}

export default FileUpload
