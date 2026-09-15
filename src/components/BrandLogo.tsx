type BrandLogoProps = {
  variant?: 'header' | 'footer' | 'hero'
  className?: string
}

const SIZES = {
  header: { width: 148, height: 52 },
  footer: { width: 180, height: 64 },
  hero: { width: 220, height: 78 },
} as const

export function BrandLogo({ variant = 'header', className = '' }: BrandLogoProps) {
  const size = SIZES[variant]

  return (
    <img
      className={`brand-logo brand-logo--${variant} ${className}`.trim()}
      src="/images/logo-luxora.jpg"
      alt="LUXORA לקסורה — מטבחים ונגרות בהתאמה אישית"
      width={size.width}
      height={size.height}
      decoding="async"
      fetchPriority={variant === 'header' || variant === 'hero' ? 'high' : 'low'}
    />
  )
}
