import { verifyToken } from "../middlewares/user.middleware.js";
import authRoute from "./auth.route.js"
import teamRoutes from "./teams.route.js";
import userRoute from "./user.route.js";

const appRoute = async (fastify, options) => {
    fastify.addHook('preValidation', verifyToken)
    fastify.register(authRoute, { prefix: '/auth' })
    fastify.register(teamRoutes, { prefix: '/teams' })
    fastify.register(userRoute, { prefix: '/user' })


}

export default appRoute;