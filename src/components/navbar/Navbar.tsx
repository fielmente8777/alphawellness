// app/components/Navbar.tsx
'use client'

import { contact } from '@/utils/constent'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-parchment/92 backdrop-blur-sm border-b border-[#E1D8C2]">
      <div className="wrap flex items-center justify-between h-[72px]">
        <Link href="/" className="font-fraunces text-[19px] font-medium text-forest">
          Alpha <span className="text-turmeric-dark">Wellness</span> Resort
        </Link>
        <div className="hidden md:flex gap-9 text-[13.5px] text-ink-soft">
          <span>Programs</span>
          <span>The Sanctuary</span>
          <span>About</span>
        </div>
        <Link href={contact.WhatsappCta} target="_blank" rel="noopener noreferrer" className="navcta capitalize">
          Get 30 minutes consultation free
        </Link>
      </div>
    </nav>
  )
}