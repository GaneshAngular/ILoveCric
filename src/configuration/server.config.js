import Fastify from 'fastify'
import 'dotenv/config'
import appRoute from '../routes/app.route.js';
import cors from '@fastify/cors';
import cookie from '@fastify/cookie';
import connectDataBase from './database.config.js';
import fastifyJwt from '@fastify/jwt';
const fastify=Fastify({logger:process.env.LOGGER||false});


fastify.setErrorHandler((error, request, reply) => {
    // Default error response structure
    const statusCode = error.statusCode || 500;
  
    // Handle Fastify validation errors (Ajv)
    if (error.validation) {
      return reply.status(400).send({
        statusCode: 400,
        error: 'Validation Error',
        message: error.message,
        fields: error.validation
      });
    }
  
    // Default error response
    reply.status(statusCode).send({
      statusCode,
      error: error.name || 'Internal Server Error',
      message: error.message || 'Something went wrong'
    });
  });
  
  fastify.register(fastifyJwt, {
    secret:process.env.JWT_SECREAT, // use env in real apps
  });
fastify.register(appRoute,{prefix:'/api'})
fastify.register(cors,{origin:true,credentials:true})
fastify.register(cookie)
   
await connectDataBase()
const server=async()=>{
    try {
        await fastify.listen({port:process.env.SERVER_PORT||8080});

        console.log("server running on :"+process.env.SERVER_PORT)
    } catch (error) {
        fastify.log.error(error);
    process.exit(1);
    }
}

export default server;