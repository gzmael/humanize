'use server'

import ContactTemplate from '@/components/emails/ContactTemplate'
import { resend } from '@/lib/resend'
import { ContactSchema } from '@/validators/contactValidator'

type GoogleReponse = {
  success: boolean
  challenge_ts: string
  hostname: string
}

export const sendContact = async ({
  email,
  message,
  name,
  phone,
  subject,
  token,
  whatsapp,
}: ContactSchema & { token: string }) => {
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
  try {
    const response = await fetch(url, {
      method: 'POST',
    })
    const responseJson = await response.json()
    const { success } = responseJson as GoogleReponse

    if (!success) {
      return {
        error: 'Recaptcha inválido',
      }
    }
  } catch (error) {
    console.log(error)
    return {
      error: 'Erro ao validar o recaptcha',
    }
  }

  try {
    await resend.emails.send({
      from: 'contato@humanizecentromedico.com.br',
      to: 'jezmaelbasilio@gmail.com',
      subject: 'Novo contato no site Humanize',
      react: ContactTemplate({
        email,
        message,
        name,
        phone,
        subject,
        whatsapp,
      }),
    })
  } catch (error) {
    console.log(error)
    return {
      error: 'Erro ao enviar o email',
    }
  }
}
