
import { userController } from "../controllers/app.controller.js"

import { verifyToken } from "../middlewares/user.middleware.js"




const userRoute = (fastify, options) => {
    fastify.get('/profile', userController.getProfile)
    // fastify.get('/profile',)
    fastify.put('/',userController.updateProfile)
    fastify.get('/', userController.getUsers)
}
export default userRoute;