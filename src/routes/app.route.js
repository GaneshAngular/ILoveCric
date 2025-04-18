import authRoute from "./auth.route.js"
import teamRoutes from "./teams.route.js";

const appRoute = async (fastify, options) => {

    fastify.register(authRoute, { prefix: '/auth' })
    fastify.register(teamRoutes, { prefix: '/teams' })

}

export default appRoute;