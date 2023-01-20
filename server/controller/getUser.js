const User = require('../schema/user_schema')


const getUser = async (request,respons) =>{
    try{
        // const user = await User.find({_id:request.params.id})
        const user = await User.findById(request.params.id)
        respons.status(201).json(user)
    }
    catch(error){
        respons.status(404).json({message:error.message})
    }
}

module.exports = getUser