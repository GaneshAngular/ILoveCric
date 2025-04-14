import {model, Schema} from 'mongoose'

const teamSchema=new Schema({

})

const teamModel=new model('Team',teamSchema)
export default teamModel;