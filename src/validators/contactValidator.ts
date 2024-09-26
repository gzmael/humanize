import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string({ required_error: 'Nome é obrigatório' }).min(10, {
    message: 'Nome deve ter pelo menos 10 caracteres',
  }),
  phone: z.string({ required_error: 'Telefone é obrigatório' }).min(1, {
    message: 'Telefone é obrigatório',
  }),
  email: z.string({ required_error: 'Email é obrigatório' }).email({
    message: 'Email inválido',
  }),
  subject: z.string({ required_error: 'Assunto é obrigatório' }).min(1, {
    message: 'Assunto é obrigatório',
  }),
  message: z.string({ required_error: 'Mensagem é obrigatória' }).min(50, {
    message: 'Mensagem deve ter pelo menos 50 caracteres',
  }),
  whatsapp: z.boolean().optional(),
})

export type ContactSchema = z.infer<typeof contactSchema>
