const User = require('../schema/user_schema')


const deleteUser =async (request,respons) =>{
    try{
       await User.deleteOne({_id:request.params.id})
       respons.status(200).json({message:'user delete successfully...'})
    }
    catch(error){
        respons.status.json({message:error.message})
    }
}


module.exports = deleteUser