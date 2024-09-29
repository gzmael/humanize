import type { ComponentProps, ImgHTMLAttributes } from 'react'

import MediumZoom from 'react-medium-image-zoom'

import 'react-medium-image-zoom/dist/styles.css'

interface ZoomImageProps extends ComponentProps<'div'> {
  zoomImg?: ImgHTMLAttributes<HTMLImageElement>
}

export function ZoomImage({ children, zoomImg }: ZoomImageProps) {
  return (
    <MediumZoom zoomMargin={80} zoomImg={zoomImg} classDialog="zoom-image">
      {children}
    </MediumZoom>
  )
}
