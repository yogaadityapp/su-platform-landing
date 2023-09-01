import './../../quantum/assets/release/qn-202307280002.css'

import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar/Navbar'

export const metadata: Metadata = {
  title: 'Semua Kursus - Sevima University',
  description: 'List Semua Kursus Sevima University',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <Navbar />
        {children}
    </>
  )
}
