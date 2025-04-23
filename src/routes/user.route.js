
import { userController } from "../controllers/app.controller.js"





const userRoute = (fastify, options) => {
    fastify.get('/profile', userController.getProfile)
    fastify.put('/profile',userController.updateProfileImage)
    fastify.put('/',userController.updateProfile)
    fastify.get('/', userController.getUsers)
}
export default userRoute;