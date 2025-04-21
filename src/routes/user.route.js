
import { userController } from "../controllers/app.controller.js"

import { verifyToken } from "../middlewares/user.middleware.js"




const userRoute = (fastify, options) => {
    fastify.addHook('preValidation', verifyToken)
    fastify.get('/profile', userController.getProfile)
    fastify.get('/', userController.getUsers)
}
export default userRoute;