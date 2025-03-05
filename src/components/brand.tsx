'use client'

import Icon from './icon'
import { siteName } from '@/lib/metadata'

export default function Brand({ style, ...props }: React.HTMLProps<HTMLDivElement>) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', ...style }} {...props}>
      <Icon style={{ height: '4rem' }} />
      <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>{siteName}</span>
    </div>
  )
}
