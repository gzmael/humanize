'use client'

import { useTransition } from 'react'
import React from 'react'

import Link from 'next/link'

import { acceptPrivacy } from '@/actions/privacy'

import { Icons } from './icons'
import { Text } from './text'
import { Button } from './ui/button'

const PrivacyBox = () => {
  const [isPending, setTransaction] = useTransition()

  return (
    <div className="ease-[cubic-bezier(0.17, 0.55, 1)] fixed inset-x-auto bottom-0 z-50 w-full p-2 animate-in fade-in duration-1000 delay-1000 fill-mode-backwards repeat-1 xl:p-0">
      <div
        className="mx-auto flex max-w-6xl flex-col items-center gap-4 space-x-1 rounded-lg border border-gray-300 bg-white p-4 shadow-2xl md:flex-row xl:mb-2"
        style={{
          transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 3s',
        }}
      >
        <Text
          variant="body"
          scale="md"
          className="text-center text-sm md:text-left"
        >
          Este site utiliza cookies para permitir uma melhor experiência por
          parte do utilizador. Ao navegar no site estará consentindo a sua
          utilização. Para obter mais informações, consulte nossos{' '}
          <Link
            href="/termos-de-uso"
            prefetch={false}
            className="font-bold text-humanize-800"
          >
            Termos
          </Link>{' '}
          e{' '}
          <Link
            href="/politica-de-privacidade"
            prefetch={false}
            className="font-bold text-humanize-800"
          >
            Política de Privacidade
          </Link>
          .
        </Text>
        <Button
          color="info"
          size="sm"
          disabled={isPending}
          onClick={() => {
            setTransaction(async () => {
              await acceptPrivacy()
            })
          }}
          title="Concordar com os Termos"
          className="w-full md:w-72 gap-2 items-center"
        >
          {isPending ? (
            <>
              Concordo
              <Icons.spinner className="size-4 animate-spin" />
            </>
          ) : (
            'Concordo'
          )}
        </Button>
      </div>
    </div>
  )
}

export { PrivacyBox }
