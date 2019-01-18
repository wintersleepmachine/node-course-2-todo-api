const {ObjectID} = require("mongodb")
const {User} = require("./../server/models/user.js")

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");


// Todo.remove({}).then((res) => {
//     console.log(res)
// })


Todo.findByIdAndRemove("5c42584d7ad6f581c981409a").then((todo) => {
    console.log(todo)
})