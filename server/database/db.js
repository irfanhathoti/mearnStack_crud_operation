const mongoose = require('mongoose')


const connection = async (username,password) => {
    // const URL = 'mongodb+srv://root:root@crudapp.4beffso.mongodb.net/CRUD_OPERATION?retryWrites=true&w=majority'

    // mongodb+srv://root:<password>@crudapp.4beffso.mongodb.net/test

    const URL = `mongodb+srv://${username}:${password}@crudapp.4beffso.mongodb.net/CRUD_OPERATION`

    try {
        mongoose.set({strictQuery:false})
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log("Database connected successfully....")

    } catch (error) {
        console.log("Error from DataBase", error)
    }


}

module.exports = connection