const express = require('express')
const User = require('../models/user') //Import model as User
const router = new express.Router() // create new set of routes related to user model
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
const bcrypt = require('bcryptjs')

User.sync().then(result => { //sync table with model attributes
  console.log("The table for the User model was created")
}).catch(err => {
  console.log(err)
})
// create route for create new users
router.post('/users', async (req, res) => {
  const user = new User(req.body)

  try {
      await user.save()
      res.status(201).send({ user })
  } catch (err) {
      res.status(400).send(err)
  }
})

// login route
router.post('/users/login', async (req, res) => {
  console.log(req.body)
  try {
      const user = await findUserByCredential(req.body.email, req.body.password)
      const token = await generateAuthToken(user)
      res.send({ user, token })
  } catch (e) {
      res.status(400).send()
  }
})

router.post('/users/logout', auth, async (req, res) => {
  try {
      req.user.token = ""

      await req.user.save()

      res.send()
  } catch (e) {
      res.status(500).send()
  }
})
// get mi profile
router.get('/users/me', auth, async (req, res) => {
  res.send(req.user)
})

generateAuthToken = async function (user) {
  
  const token = jwt.sign({ id: user.id.toString() }, 'thisIsAwesome')

  user.token = token
  await user.save()

  return token
}

findUserByCredential = async function (email, password) {
  
  const user = await User.findOne({ where: { email: email } })

    if (!user) {
        throw new Error('Unable to login')
    } 

    const isMatch = bcrypt.compareSync(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

//export set of routes
module.exports = router
