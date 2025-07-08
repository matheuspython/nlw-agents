import {fastify} from 'fastify'
import {
    serializerCompiler,
    validatorCompiler,
    type  ZodTypeProvider
} from 'fastify-type-provider-zod'

import { fastifyCors } from '@fastify/cors'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
    origin: 'http://localhost:51733',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.listen({ 
    port: 3333
 }).then(()=> {
    console.log('http server runing!')
 })