import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string({ required_error: 'Nome é obrigatório' }).min(10),
  phone: z.string({ required_error: 'Telefone é obrigatório' }).min(1),
  email: z.string({ required_error: 'Email é obrigatório' }).email(),
  subject: z.string({ required_error: 'Assunto é obrigatório' }).min(1),
  message: z.string({ required_error: 'Mensagem é obrigatória' }).min(1),
  whatsapp: z.boolean().optional(),
})

export type ContactSchema = z.infer<typeof contactSchema>
