import { CourseCard } from "../misc/CourseCard"

export const PopularCourses = () => {
    return (
        <section className='lg:px-[100px] mt-[70px] mb-[180px]'>
            <div className="text-center mb-[56px]">
                <h2 className="text-3xl mb-[12px]">Pelatihan Popular Kami</h2>
                <p className="text-muted-foreground">Pilihan pelatihan kami yang sering diakses orang-orang</p>
            </div>

            <div className="grid cols-3">
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>

        </section>
    )
}