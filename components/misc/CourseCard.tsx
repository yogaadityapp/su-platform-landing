import Image from "next/image"
import Link from "next/link"

export const CourseCard = ({width = 600}) => {
    return (
        <Link href={'/'} className="group">
            <div className="rounded-xl mb-[23px]">
                <Image
                    src={'https://placehold.co/600x400/EEE/31343C'}
                    alt="place holder"
                    width={width}
                    height={400}
                    className="object-cover rounded-2xl"
                />
            </div>
            <div className="mb-5">
                <h3 className="text-2xl mb-[16px] group-hover:text-primary duration-300">
                    Sevima Pay: Cara Menambahkan Pembayaran
                </h3>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="font-bold">
                            Rp 200.000-,
                        </span>
                    </div>
                    <div className="flex items-center gap-[8px]">
                        <span className="badge badge_secondary-default">
                           SevimaPay
                        </span>
                        <span className="badge badge_secondary-default">
                            <span className="icon icon-users-solid"></span> 200+
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}