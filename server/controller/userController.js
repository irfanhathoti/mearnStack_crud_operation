const User = require('../schema/user_schema')


const addUser = async (request, response) => {


    const newUser = new User(request.body)

    try {
        await newUser.save();
        response.status(201).json(newUser)
    } catch (error) {
        response.status(409).json({ message: error.message })
    }
}


module.exports = addUser