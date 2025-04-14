import bcrypt from 'bcrypt'

const getHashPassWord = async (password) => {

    return await bcrypt.hash(password, 5)
}

const compareHash = async (password, hash) => {
    return await bcrypt.compare(password, hash)
}
const BCRYPT = { getHashPassWord, compareHash }
export default BCRYPT