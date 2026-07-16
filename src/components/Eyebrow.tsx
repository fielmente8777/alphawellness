// app/components/Eyebrow.tsx
interface EyebrowProps {
  children: React.ReactNode
  color?: 'turmeric' | 'clay' | 'default'
}

export default function Eyebrow({ children, color = 'default' }: EyebrowProps) {
  const colorMap = {
    default: 'text-turmeric-dark before:bg-turmeric-dark',
    turmeric: 'text-[#D9B979] before:bg-[#D9B979]',
    clay: 'text-[#E3B79A] before:bg-[#E3B79A]',
  }

  return (
    <div className={`eyebrow ${colorMap[color]}`}>
      {children}
    </div>
  )
}