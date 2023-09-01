import { AppShell } from "@/components/appShells/AppShell";
import { CategoryList } from "@/components/sections/CategoryList";
import { Hero } from "@/components/sections/Hero";
import { PopularCourses } from "@/components/sections/PopularCourses";
import { UpdatedCourses } from "@/components/sections/UpdatedCourses";
import { TestimonialList } from "@/components/sections/TestimonialList";
import { GoToForum } from "@/components/sections/GoToForums";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <AppShell>
      <Hero />
      <CategoryList />
      <PopularCourses />
      <UpdatedCourses />
      <TestimonialList />
      <GoToForum />
      <Footer />
    </AppShell>
  )
}
