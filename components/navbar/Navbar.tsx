'use client'

import './navbar.css'
import Link from "next/link"
import Logo from "../../public/Sevima univ logo color.svg"
import Image from "next/image"
import { usePathname, useRouter } from 'next/navigation'

export const navLink = [
    {
        name: "Beranda",
        href: '/'
    },
    {
        name: "Semua Kursus",
        href: '/kursus'
    },
    {
        name: "Forum",
        href: '/forum'
    },
]

export const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav className="flex justify-between px-[100px] py-[16px] bg-white text-md sticky top-0 z-50">
            <div className="flex items-center">
                <Link className="mr-[56px]" href={'/'}>
                    <Image
                        className="w-[129px] h-[40px]"
                        src={Logo}
                        alt="University Logo"
                    />
                </Link>
            </div>
            <div className="flex items-center">
                <div className="flex">
                    {navLink?.map((link) => {
                        return (
                            <Link
                                href={link.href}
                                className={`mr-[40px] hover:text-primary ${pathname == link.href && 'text-primary'} duration-300`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </div>
                <div className="flex gap-[16px]">
                    <Link href={'/signin'} type="button" className="btn btn_outline btn_md">
                        Masuk!
                    </Link>
                    <Link href={'/signup'} type="button" className="btn btn_primary btn_md">
                        Daftar Akun
                    </Link>
                </div>
            </div>
        </nav>
    )
}