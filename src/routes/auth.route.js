import SCHEMA from "../constants/schema/app.schema.js"
import {authController} from "../controllers/app.controller.js"




const authRoute=(fastify,options)=>{
 
    fastify.post('/signin',{
      schema:SCHEMA.login
    },authController.login)

    fastify.post('/signup',{schema:SCHEMA.signup},authController.signup)

    fastify.post('/google',authController.googleSignIn)

}
export default authRoute;