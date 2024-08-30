import { VariantProps, cva } from 'class-variance-authority'

export const headlineVariants = cva('leading-6 font-display', {
  variants: {
    size: {
      xs: 'text-[1rem]',
      sm: 'text-xl',
      md: 'text-2xl',
      lg: 'text-3xl',
      xl: 'text-4xl',
      '2xl': 'text-[2.625rem]',
    },
    variant: {
      white: 'text-foreground',
      black: 'text-background',
      neutral: 'text-muted',
      heading: 'text-primary',
      accent: 'text-accent',
    },
    weight: {
      regular: 'font-normal',
      semibold: 'font-semibold',
      bold: 'font-bold',
      black: 'font-black',
    },
  },
  defaultVariants: {
    variant: 'heading',
    size: 'md',
    weight: 'regular',
  },
  compoundVariants: [
    {
      variant: 'heading',
      size: '2xl',
      class: 'font-bold leading-9',
    },
  ],
})

export type HeadlineVariantTypes = VariantProps<typeof headlineVariants>