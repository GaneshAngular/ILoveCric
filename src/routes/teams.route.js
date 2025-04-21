import {teamsController} from "../controllers/app.controller.js"


const teamRoutes=(fastify,options)=>{
     
    fastify.post('/',teamsController.addTeams)
    fastify.get('/',teamsController.getTeams)
    fastify.put('/',teamsController.updateTeams)
    fastify.delete('/',teamsController.deleteTeams)

}

export default teamRoutes