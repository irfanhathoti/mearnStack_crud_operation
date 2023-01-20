const mongoose = require('mongoose')
const auto_increment = require('mongoose-auto-increment')


const userSchema = mongoose.Schema({
    _id:{type:String,require:true},
    name:String,
    username:String,
    email:String,
    phone:String
})

auto_increment.initialize(mongoose.connection)
userSchema.plugin(auto_increment.plugin,'user')


const user = mongoose.model('user',userSchema)


module.exports = user