const loginSchema={
    body:{
        type:'object',
        required:['email','password'],
        properties:{
            email:{type:'string',format:'email'},
            password:{type:'string',minLength:8,pattern:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"}
        }
    }
}
export default loginSchema;