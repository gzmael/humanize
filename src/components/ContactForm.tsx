'use client'

import { useRef, useState, useTransition } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import { PatternFormat } from 'react-number-format'
import { toast } from 'sonner'

import { sendContact } from '@/actions/contact'
import { cn } from '@/lib/utils'
import { contactSchema, ContactSchema } from '@/validators/contactValidator'

import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input, inputVariants } from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Textarea } from './ui/textarea'

export const ContactForm = () => {
  const [isPending, startTransaction] = useTransition()
  const [token, setToken] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  })

  const { handleSubmit, setValue } = form

  const onSubmit = (data: ContactSchema) => {
    if (!token) {
      toast.error('Recaptcha inválido')
      return
    }

    startTransaction(() => {
      sendContact({
        ...data,
        token,
      }).then((response) => {
        if (response?.error) {
          toast.error(response.error)
        } else {
          toast.success('Mensagem enviada com sucesso!')
          setValue('name', '')
          setValue('phone', '')
          setValue('email', '')
          setValue('subject', '')
          setValue('message', '')
          setValue('whatsapp', false)
          recaptchaRef.current?.reset()
        }
      })
    })
  }

  return (
    <aside className="bg-white py-6 px-3 rounded-lg w-full md:w-2/5">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome completo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <PatternFormat
                    placeholder="(88) 9 9999-9999"
                    format="(##) # ####-####"
                    type="tel"
                    mask="_"
                    className={cn(inputVariants())}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Seu email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Assunto</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger aria-label="Assunto">
                      <SelectValue placeholder="Selecione um assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="convenios">
                        Informações sobre convênios
                      </SelectItem>
                      <SelectItem value="exams">
                        Agendamentos e Exames
                      </SelectItem>
                      <SelectItem value="feedback">
                        Feedback e Sugestões
                      </SelectItem>
                      <SelectItem value="other">Outros Assuntos</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem</FormLabel>
                <FormControl>
                  <Textarea placeholder="Sua mensagem" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-2 items-center w-full">
            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start">
                  <FormControl>
                    <FormLabel
                      className="flex items-center font-normal gap-2 text-background"
                      htmlFor="whatsapp"
                    >
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        aria-label="Quero receber uma resposta por WhatsApp."
                      />
                      <span>Quero receber uma resposta por WhatsApp.</span>
                    </FormLabel>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col justify-center gap-2 items-center w-full">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}
              ref={recaptchaRef}
              onChange={(token) => setToken(token)}
              theme="light"
            />
            <Button
              type="submit"
              className="w-full"
              disabled={isPending}
              aria-label="Enviar mensagem"
            >
              {isPending ? 'Enviando...' : 'Enviar'}
            </Button>
          </div>
        </form>
      </Form>
    </aside>
  )
}
