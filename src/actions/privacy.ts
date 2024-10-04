'use server'

import { cookies } from 'next/headers'

export const acceptPrivacy = async () => {
  cookies().set({
    name: 'humanize-site:privacy@v0.1',
    maxAge: 60 * 60 * 24 * 30,
    value: JSON.stringify({
      status: true,
      timestamp: Date.now(),
    }),
    path: '/',
  })
}
