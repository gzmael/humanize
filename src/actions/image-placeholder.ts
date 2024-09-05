'use server'

import path from 'node:path'

import sharp from 'sharp'

interface ImagePlaceholderProps {
  src: string
}

export async function getBlurImageAction({ src }: ImagePlaceholderProps) {
  const sharpImage = sharp(path.join(process.cwd(), 'public', src))

  const placeholder = await sharpImage.resize(10).toBuffer()
  const base64 = placeholder.toString('base64')
  const blurDataURL = `data:image/png;base64,${base64}`

  return blurDataURL
}
