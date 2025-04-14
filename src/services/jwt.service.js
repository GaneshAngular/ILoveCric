import jwt from 'jsonwebtoken'

const generateToken=(data)=>{
    return  jwt.sign(data,process.env.JWT_SECREAT||'')
}

const verifyToken=async(token)=>{
   return jwt.verify(token,process.env.JWT_SECREAT||'')
}
const JWT={generateToken,verifyToken}
export default JWT