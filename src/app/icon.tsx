import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <svg
          width={size.width}
          height={size.height}
          viewBox="0 0 55 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M51.9 2.794a3.853 3.853 0 0 0-4.058.41C29.51 17.393 16.996 35.112 8.65 53.826v-36.3a3.863 3.863 0 0 0-3.857-3.86 3.855 3.855 0 0 0-3.856 3.86V75.6a3.863 3.863 0 0 0 3.318 3.82 3.854 3.854 0 0 0 4.244-2.752c6.482-22.566 18.206-44.593 37.846-62.073v44.148a3.863 3.863 0 0 0 3.857 3.86 3.863 3.863 0 0 0 3.856-3.86V6.26A3.864 3.864 0 0 0 51.9 2.794Z"
            fill="#EDEAE5"
          />
          <path
            d="M4.79 9.519a4.453 4.453 0 0 0 4.45-4.455A4.453 4.453 0 0 0 4.79.608 4.453 4.453 0 0 0 .338 5.064a4.453 4.453 0 0 0 4.45 4.455Z"
            fill="#2AB1AA"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    },
  )
}
