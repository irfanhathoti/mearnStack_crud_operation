const User = require('../schema/user_schema')


const editUser = async(request,respons)=>{
    try{
        const user = request.body
        const editUser = new User(user)
        await User.updateOne({_id:request.params.id},editUser)
    }catch(error){
        respons.status(409).json({message:error.message})
    }

}

module.exports = editUser