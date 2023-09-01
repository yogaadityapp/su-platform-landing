import { CourseCard } from "../misc/CourseCard";
import Link from "next/link"
export const UpdatedCourses = () => {
    return (
        <section className='lg:px-[100px] mt-[70px] mb-[180px]'>
            <div className="grid cols-2">
                <div className="block">
                    <h2 className="text-3xl mb-[12px]">Pelatihan Sedang Update</h2>
                    <p className="text-muted-foreground">Pilihan pelatihan kami yang sering diakses orang-orang</p>
                </div>
                <div className="flex justify-end">
                    <Link href={'/'} type="button" className="btn btn_outline btn_md text-primary">
                        Lihat Selengkapnya
                        </Link>
                </div>
            </div>
            <div className="grid cols-3" style={{ marginTop:"40px" }}>
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </section>
        
        
    )
}