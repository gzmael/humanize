import { SpecialitiesItemProps } from '@/config/site'

import { Icons } from './icons'
import { Text } from './text'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

export const SpecialitiesItem = ({
  title,
  description,
  icon,
}: SpecialitiesItemProps) => {
  const Icon = Icons[icon]
  return (
    <Dialog>
      <DialogTrigger className="flex flex-col items-center justify-center rounded-lg bg-primary-500 gap-2 border border-humanize-500 w-full h-48 xl:h-44 hover:bg-gradient-to-tl hover:from-humanize-200/90 hover:to-humanize-50/90 hover:shadow-lg hover:shadow-humanize-300/50 transition-all ease-in-out duration-300">
        <Icon className="size-14 text-humanize-500" />
        <Text
          scale="xl"
          weight="bold"
          className="text-humanize-900 lg:text-base text-center leading-4"
        >
          {title}
        </Text>
      </DialogTrigger>
      <DialogContent className="bg-foreground w-[calc(100%-1rem)] sm:w-full">
        <DialogHeader>
          <DialogTitle className="text-humanize-800">{title}</DialogTitle>
        </DialogHeader>
        <Text scale="sm" variant="body" className="leading-tight">
          {description}
        </Text>
      </DialogContent>
    </Dialog>
  )
}
