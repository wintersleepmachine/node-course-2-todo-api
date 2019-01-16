// const MongoClient = require("mongodb").MongoClient
const {MongoClient, ObjectID} = require("mongodb")




MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
    if (err){
       return console.log("Unable to connect to MongoDB server")
    }
    console.log("Connected to MongoDb server")


    db.collection("Users").findOneAndDelete({
        _id: new ObjectID("5c3ee89d414c0f134d1f3529")
    }).then((res) => {
        console.log(res)
    })
})

