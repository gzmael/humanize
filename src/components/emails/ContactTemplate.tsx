import * as React from 'react'

import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
  Link,
} from '@react-email/components'

import { ContactSchema } from '@/validators/contactValidator'

const isLocal = process.env.NODE_ENV === 'development'
const baseUrl = isLocal
  ? 'http://localhost:3000'
  : process.env.NEXT_PUBLIC_APP_URL

const ContactTemplate = ({
  email,
  message,
  name,
  phone,
  subject,
  whatsapp,
}: ContactSchema) => {
  const previewText = `Novo contato de ${name} no site Humanize`
  const phoneNumber = phone.replace(/\D/g, '')

  const whatsappLink = `https://wa.me/55${phoneNumber}`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                humanize: {
                  DEFAULT: '#2dd4bf', // hsl(172 44% 53%)
                  950: '#0a3d66', // hsl(192 98.9% 20.3%)
                  900: '#004c80', // hsl(192 100% 28)
                  800: '#00528c', // hsl(192 100% 32%)
                  700: '#005da0', // hsl(192 100% 37%)
                  600: '#0069b0', // hsl(192 100% 43%)
                  500: '#00a3a3', // hsl(180 67% 50%)
                  400: '#33cccc', // hsl(180 50% 60%)
                  300: '#59bfbf', // hsl(180 50% 70%)
                  200: '#80cccc', // hsl(180 50% 80%)
                  100: '#a6d9d9', // hsl(180 50% 90%)
                },
              },
            },
          },
        }}
      >
        <Body className="bg-white m-auto font-sans px-2">
          <Container className="border border-solid border-humanize-500 rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/logoEmail.png`}
                width="147"
                height="37"
                alt="Humanize"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-humanize-900 text-[20px] font-normal text-center p-0 my-[30px] mx-0">
              Contato de <strong>{name}</strong>
            </Heading>
            <Text className="text-humanize-800 text-[14px] leading-[24px]">
              Olá, você tem um novo contato no site Humanize
            </Text>

            <Section>
              <Row>
                <Column className="w-24 font-bold">Nome:</Column>
                <Column align="left">{name}</Column>
              </Row>
              <Row>
                <Column className="w-24 font-bold">Telefone:</Column>
                <Column align="left">{phone}</Column>
              </Row>
              <Row>
                <Column className="w-24 font-bold">Email:</Column>
                <Column align="left">{email}</Column>
              </Row>
              <Row>
                <Column className="w-24 font-bold">Assunto:</Column>
                <Column align="left">{subject}</Column>
              </Row>
              <Row>
                <Column className="w-24 font-bold">Mensagem:</Column>
                <Column align="left">{message}</Column>
              </Row>
              {!whatsapp && (
                <Row>
                  <Column colSpan={2} className="py-2">
                    O cliente gostaria de ser contatado por{' '}
                    <Link href={whatsappLink}>WhatsApp</Link>
                  </Column>
                </Row>
              )}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

ContactTemplate.PreviewProps = {
  email: 'teste@teste.com',
  message: 'Olá, gostaria de saber mais sobre a Humanize',
  name: 'João da Silva',
  phone: '(11) 99999-9999',
  subject: 'Contato pelo site',
  token: '1234567890',
} as ContactSchema

export default ContactTemplate
