import Image from 'next/image'
import CTA from '../../public/cta/cta.svg'

export const GoToForum = () => {
    return (
        <section className='lg:px-[100px] mt-[70px] mb-[180px]'>
            <div className="grid cols-2">
                <div className="flex justify-end mr-[50px]">
                    <svg width="529" height="452" viewBox="0 0 529 452" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="527" height="450" rx="23" stroke="#B5B5B5" stroke-width="2" stroke-dasharray="12 12" />
                    </svg>
                    <Image 
                        src={CTA}
                        alt='cta image'
                    />
                </div>
                <div className="flex justify-center flex-col ml-[20px]">
                    <h1 className='text-4xl font-bold'>
                        Langsung ke Forum Kami dan Dapatkan Solusi untuk Setiap Pertanyaan Anda!
                    </h1>
                    <p className='text-lg mt-[16px] text-muted-foreground'>
                        Jangan biarkan pertanyaan-pertanyaan Anda teronggok tanpa jawaban. Bergabunglah dengan komunitas kami di forum interaktif, di mana Anda dapat langsung berinteraksi dengan para ahli dan sesama pemecah masalah.
                    </p>
                    <div className="flex gap-3 mt-[30px]">
                        <button type="button" className="btn btn_primary btn_lg">
                            Pergi ke Forum!
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}