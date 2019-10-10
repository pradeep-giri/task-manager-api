const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     if(req.method == 'GET'){
//         res.send('GET request are disable')
//     } else {
//         next()    
//     }
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisiscourse', { expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisiscourse')
//     console.log(data)
// }

// myFunction()

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5d98313adfe1c03740309428')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5d982c5e339c5d1da4aa8a78')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()