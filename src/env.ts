// essa parte serve para a aplicação nao execute sem que as variaveis de ambiente ja estejam setadas
import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URLS: z.string().url().startsWith('postgresql://'),
})

export const env = envSchema.parse(process.env)
