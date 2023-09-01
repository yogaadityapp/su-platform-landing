import Image from "next/image"
import HeroImage from "../../public/hero/hero.svg";
import BlobImage from "../../public/hero/blob.svg";

export const Hero = () => {
    return (
        <section className='lg:px-[100px] pt-[70px] mb-[180px] relative'>
            <Image 
                className="absolute z-10 -top-10 left-0"
                src={BlobImage}
                alt="blob"
            />
            <div className="grid cols-2 relative z-10">
                <div className="flex justify-center flex-col mr-[10px]">
                    <h1 className='text-5xl'>
                        Tingkatkan Pengetahuan Pemakaian dengan <span className='font-bold'>Sevima University</span>
                    </h1>
                    <p className='text-lg mt-[16px] text-muted-foreground'>
                        Temukan Langkah-langkah Praktis dan Panduan Mendalam untuk Mengoptimalkan Produk Anda Bersama Sevima.
                    </p>
                    <div className="flex gap-3 mt-[30px]">
                        <div className="form-control form-control_lg">
                            <div className="form-control__group ">
                                <span data-input-icon="search" />
                                <input type="email" className="form-control__input" placeholder="Belajar Siakad" />
                                <span data-clear="input" />
                            </div>
                        </div>
                        <button type="button" className="btn btn_primary btn_lg">
                            Cari Sekarang
                        </button>
                    </div>
                </div>
                <div className="flex justify-end z-10">
                    <Image
                        src={HeroImage}
                        alt="hero image"
                        height={519}
                        width={652} 
                    />
                </div>
            </div>
        </section>
    )
}