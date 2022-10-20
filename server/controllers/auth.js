const bcrypt = require('bcrypt')
const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      let userData
      const { username, password } = req.body
      console.log(users)
      for (let i = 0; i < users.length; i++) {
        
        if (users[i].username === username){
          
          userData = users[i]
          console.log(userData)
        }
      }
      if (userData === undefined){
        res.status(200).send({success: false, message: "bad username or password"})
      }else {
        bcrypt.compare(password, userData.password, (error, success) => {
          if (!error){
            if (success){
              let userCard=  userData
              delete userCard.hashPass
              console.log(userCard)
              res.status(200).send(userCard)
            }
          }
        })
      }
      //res.status(400).send("User not found.")
    },
    register: (req, res) => {
      const {username, email, password, firstName, lastName} = req.body
      const saltRounds = 10;

      bcrypt.hash(password, saltRounds, (error, hashPass) => {
        // console.log(hashPass)
        // console.log(password)
        let newDatabaseEntry ={}
        newDatabaseEntry.username = username
        newDatabaseEntry.email = email
        newDatabaseEntry.password = hashPass
        newDatabaseEntry.firstName = firstName
        newDatabaseEntry.lastName = lastName
        console.log('Registering User')
        console.log(newDatabaseEntry)
        users.push(newDatabaseEntry)
        res.status(200).send(req.body)
        
      })
        
    }
}