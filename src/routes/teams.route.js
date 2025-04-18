import CONTROLLER from "../controllers/app.controller.js"


const teamRoutes=(fastify,options)=>{
     
    fastify.post('/',CONTROLLER.teamsController.addTeams)
    fastify.get('/',CONTROLLER.teamsController.getTeams)
    fastify.put('/',CONTROLLER.teamsController.updateTeams)
    fastify.delete('/',CONTROLLER.teamsController.deleteTeams)

}

export default teamRoutes