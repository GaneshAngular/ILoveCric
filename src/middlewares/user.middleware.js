

const verifyToken=async(req,reply)=>{
    try {
     
        await req.jwtVerify(); 
      } catch (err) {
        reply.code(401).send({ error: 'Unauthorized' });
      }
}

export {verifyToken}