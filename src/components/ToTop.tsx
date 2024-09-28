'use client'

import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

import { Icons } from './icons'

export function ToTop() {
  const [lastY, setLastY] = useState(0)
  const [isView, setIsView] = useState(false)

  useEffect(() => {
    function updateScroll() {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const posY = (winScroll / height) * 100
      setLastY(posY)
      setIsView(posY >= 5 && posY <= 99)
    }
    window.addEventListener('scroll', updateScroll, false)
    return () => {
      window.removeEventListener('scroll', updateScroll, false)
    }
  }, [lastY])
  return (
    <button
      aria-label="Voltar ao topo"
      className={cn(
        'fixed bottom-4 right-4 bg-humanize-700 text-humanize-100 p-2 rounded-lg shadow-lg animate-once animate-duration-1000 animate-delay-0 animate-ease-linear z-20',
        isView ? 'animate-fade-down ' : 'animate-fade-up animate-reverse',
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Icons.toTop className="size-6" />
    </button>
  )
}
