import { fastifyCors } from '@fastify/cors'
import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { sql } from './db/connection.ts'
import { env } from './env.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: 'http://localhost:51733',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', () => {
  return 'ok'
})

app
  .listen({
    port: env.PORT ? Number(process.env.PORT) : 3333,
  })
  .then(() => {
    console.log('http server runing! IN PORT', env.PORT)
  })
