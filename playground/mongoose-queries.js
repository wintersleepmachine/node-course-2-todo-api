const {ObjectID} = require("mongodb")
const {User} = require("./../server/models/user.js")

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");


// let id = "5c40e98154083222fc2b279411";

// if(!ObjectID.isValid(id)){
//     console.log("ID not valid")
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos", todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("findOne Todo", todo)
// })

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log("Id not found")
//     }
//     console.log("Todo by ID", todo)
// }).catch((e) => {
//     console.log(e)
// })

User.findById("5c3f9e33fae5162e08150749").then((user) => {
    if(!user){
        return console.log("User id not found")
    }

    console.log("User findById:", JSON.stringify(user, undefined,2))
}, (e) => {
    console.log(e)
})