import '../globals.css'
import '../../quantum/assets/release/qn-202307280002.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Masuk - Sevima University',
  description: 'Masuk  Sevima University',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>{children}</div>
  )
}
