import { cva, VariantProps } from 'class-variance-authority'

export const textVariants = cva('leading-6 font-sans font-bold ', {
  variants: {
    display: {
      flex: 'flex items-center',
    },
    scale: {
      xl: 'text-2xl',
      lg: 'text-lg leading-5',
      md: 'text-base leading-6',
      sm: 'text-sm leading-6',
      xs: 'text-xs leading-6',
    },
    variant: {
      default: 'text-foreground',
      neutral: 'text-muted-foreground',
      body: 'text-background',
    },
    weight: {
      regular: 'font-extralight',
      medium: 'font-normal',
      semibold: 'font-semibold',
      bold: 'text-bold',
    },
  },
  defaultVariants: {
    variant: 'default',
    scale: 'md',
    weight: 'medium',
  },
})

export type TextVariantType = VariantProps<typeof textVariants>
