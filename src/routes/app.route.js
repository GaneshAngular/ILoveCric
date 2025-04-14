import authRoute from "./auth.route.js"

const appRoute=async(fastify,options)=>{

    fastify.register(authRoute,{prefix:'/auth'})
}

export default appRoute;