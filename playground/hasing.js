const {SHA256} = require("crypto-js");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

let password = "123abc!"

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) =>{
//         console.log(hash)
//     })
// })

// let hashedPassword = "$2a$10$cSSRm7MUlo6I58Kv6q6uN.Fcuo1i1LwvIL26/0BXm9n8/oZd2SUOC"

// bcrypt.compare(password, hashedPassword, (err, res) => {
//     console.log(res)
// })










// let data = {
//     id: 10
// }



// let token = jwt.sign(data, "123abc") //server to client
// let decoded = jwt.verify(token, "123abc") //client to server

// console.log(token)
// console.log("decoded", decoded)



// let message = "I am user number 3"
// let hash = SHA256(message).toString()

// console.log("message:", hash)

// let data = {  //server to client
//     id:4
// }

// let token = { //client to server
//     data,
//     hash: SHA256(JSON.stringify(data + "somesecret")).toString()
// }

// token.data.id = 5
// token.hash = SHA256(JSON.stringify(token.data)).toString()

// let resultHash = SHA256(JSON.stringify(token.data + "somesecret")).toString()

// if(resultHash === token.hash){
//     console.log("data was not changed")
// }else {
//     console.log("data was changed")
// }