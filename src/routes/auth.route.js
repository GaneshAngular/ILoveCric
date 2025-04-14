import SCHEMA from "../constants/schema/app.schema.js"
import CONTROLLER from "../controllers/app.controller.js"




const authRoute=async(fastify,options)=>{
 
    fastify.post('/login',{
      schema:SCHEMA.login
    },CONTROLLER.authController.login)

    fastify.post('/signup',{schema:SCHEMA.signup},CONTROLLER.authController.signup)

}
export default authRoute;