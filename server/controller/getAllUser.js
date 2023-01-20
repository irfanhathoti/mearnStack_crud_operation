const User = require('../schema/user_schema')

const getUsers = async(req,res)=>{
    try{
      const user = await User.find()
      res.status(201).json(user)
    }
    catch(error) {
        res.status(404).json({message:error.message})
    }
}

module.exports = getUsers