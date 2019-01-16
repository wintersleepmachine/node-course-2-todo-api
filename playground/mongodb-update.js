// const MongoClient = require("mongodb").MongoClient
const {MongoClient, ObjectID} = require("mongodb")




MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err){
       return console.log("Unable to connect to MongoDB server")
    }
    console.log("Connected to MongoDb server")

    db.collection("Users").findOneAndUpdate({_id: new ObjectID("5c3ecd6a414c0f134d1f2ff8")},
    {
        $set: {
            name: "asdfasdf",
            location: "asdfasdf"
        },
        $inc: {
            age: 2
        }
    }, {returnNewDocument: false}).then((result) => {
        console.log(result)
    })

})

