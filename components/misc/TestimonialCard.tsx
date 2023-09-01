import Image from "next/image";
import photoProfile from './../../quantum/assets/images/example-profile.jpg';

export const TestimonialCard = () => {
    return (
        <div className="card p-[32px]">
            <p>“Kursus Sevima mengubah segalanya. Materi yang disampaikan dengan begitu rapi dan mudah diikuti. Saya merasa lebih siap dan terampil dalam menghadapi proyek-proyek produk yang kompleks sekarang.”</p>
            <div className="flex gap-3 mt-5">
                <Image src={photoProfile} width={50} height={50} alt="Logo Kampus" className="rounded-full object-cover"/>
                <div className="detail">
                    <h4 className="font-bold">Murphy Ode</h4>
                    <p className="opacity-75">Rektor UI</p>
                </div>
            </div>
        </div>
    )
}