import CustomContainer from './components/customContainer'
import FileUpload from './components/fileUpload'

const UploadDocument = () => {
	return (
		<div className="w-full flex flex-col gap-2 lg:gap-6">
			<CustomContainer title="Data Pribadi">
				<div className="grid grid-flow-row lg:grid-cols-[auto_400px] xl:grid-cols-[auto_500px] gap-2 lg:gap-6 lg:text-xl">
					<label htmlFor="ktpDiri" className="font-semibold">
						Fotokopi KTP Pemohon
					</label>
					<FileUpload
						title="ktpDiri"
						placeholder="--Upload Fotokopi KTP Pemohon--"
					/>

					<label htmlFor="ktpPasangan" className="font-semibold">
						Fotokopi KTP Suami / Istri
					</label>
					<FileUpload
						title="ktpPasangan"
						placeholder="--Upload Fotokopi KTP Suami / Istri--"
					/>

					<label htmlFor="kartuKeluarga" className="font-semibold">
						Fotokopi Kartu Keluarga
					</label>
					<FileUpload
						title="kartuKeluarga"
						placeholder="--Upload Fotokopi Kartu Keluarga--"
					/>

					<label htmlFor="akteNikah" className="font-semibold">
						Fotokopi Akte Nikah/Cerai
					</label>
					<FileUpload
						title="akteNikah"
						placeholder="--Upload Fotokopi Akte Nikah/Cerai--"
					/>

					<label htmlFor="npwp" className="font-semibold">
						Fotokopi NPWP Pemohon
					</label>
					<FileUpload
						title="npwp"
						placeholder="--Upload Fotokopi NPWP Pemohon--"
					/>

					<label htmlFor="aktaPisahHarga" className="font-semibold">
						Akta Pisah Harga Notaril dan didaftarkan ke KUA atau catatan sipil
						(Jika Ada)
					</label>
					<FileUpload
						title="aktaPisahHarga"
						placeholder="--Upload Akta Pisah Harga Notaril--"
					/>
				</div>
			</CustomContainer>

			<CustomContainer title="Data Jaminan">
				<div className="grid grid-flow-row lg:grid-cols-[auto_400px] xl:grid-cols-[auto_500px] gap-2 lg:gap-6 lg:text-xl">
					<label htmlFor="dokumenJaminan" className="font-semibold">
						Fotokopi Dokumen Jaminan: SHM/SHGB, IMB, dan PBB tahun terakhir
					</label>
					<FileUpload
						title="dokumenJaminan"
						placeholder="--Upload Fotokopi Dokumen Jaminan--"
					/>

					<label htmlFor="suratPengajuan" className="font-semibold">
						Scan Signed PDF Surat Pengajuan Bank yang Dituju, CPA, & Keterangan
					</label>
					<FileUpload
						title="suratPengajuan"
						placeholder="--Upload PDF Surat Pengajuan Bank--"
					/>

					<label htmlFor="perjanjianKredit" className="font-semibold">
						Fotokopi Perjanjian Kredit (Jika Over Kredit)
					</label>
					<FileUpload
						title="perjanjianKredit"
						placeholder="--Upload Fotokopi Perjanjian Kredit--"
					/>

					<label htmlFor="dokumenPPJB" className="font-semibold">
						Dokumen PPJB (Jika Developer)
					</label>
					<FileUpload
						title="dokumenPPJB"
						placeholder="--Upload Dokumen PPJB--"
					/>
				</div>
			</CustomContainer>

			<CustomContainer title="Data Keuangan">
				<div className="grid grid-flow-row lg:grid-cols-[auto_400px] xl:grid-cols-[auto_500px] gap-2 lg:gap-6 lg:text-xl">
					<label htmlFor="dokumenSPT" className="font-semibold">
						Fotokopi SPT / PPh21
					</label>
					<FileUpload
						title="dokumenSPT"
						placeholder="--Upload Fotokopi SPT / PPh21--"
					/>

					<label htmlFor="slipGaji" className="font-semibold">
						Asli Slip Gaji / Surat Keterangan Penghasilan 1 Bulan Terakhir
					</label>
					<FileUpload
						title="slipGaji"
						placeholder="--Upload Asli Slip Gaji 1 Bulan Terakhir--"
					/>

					<label htmlFor="dokumenRK" className="font-semibold">
						Fotokopi R/K atau tabungan 6 bulan terakhir
					</label>
					<FileUpload
						title="dokumenRK"
						placeholder="--Upload Fotokopi R/K 6 Bulan Terakhir--"
					/>

					<label htmlFor="suratKeterangan" className="font-semibold">
						Surat Keterangan / Rekomendasi Perusahaan
					</label>
					<FileUpload
						title="suratKeterangan"
						placeholder="--Upload Surat Keterangan Perusahaan--"
					/>
				</div>
			</CustomContainer>

			<CustomContainer title="Data Keuangan">
				<div className="grid grid-flow-row lg:grid-cols-[auto_400px] xl:grid-cols-[auto_500px] gap-2 lg:gap-6 lg:text-xl">
					<label htmlFor="fileKekurangan1" className="font-semibold">
						File Kekurangan 1
					</label>
					<FileUpload
						title="fileKekurangan1"
						placeholder="--Upload File Kekurangan 1--"
					/>

					<label htmlFor="fileKekurangan2" className="font-semibold">
						File Kekurangan 2
					</label>
					<FileUpload
						title="fileKekurangan2"
						placeholder="--Upload File Kekurangan 2--"
					/>
				</div>
			</CustomContainer>
		</div>
	)
}

export default UploadDocument
