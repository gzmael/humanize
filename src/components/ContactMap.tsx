import { GoogleMapsEmbed } from '@next/third-parties/google'

export const ContactMap = () => {
  return (
    <aside className="w-full md:w-3/5 bg-white">
      <GoogleMapsEmbed
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS ?? ''}
        height={420}
        zoom="17"
        maptype="satellite"
        mode="place"
        allowfullscreen={false}
        loading="lazy"
        style="width:100% !important"
        width={600}
        q="Humanize Centro Médico de Brejo Santo"
      />
    </aside>
  )
}
