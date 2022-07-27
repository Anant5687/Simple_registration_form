const mongoose = require('mongoose')

const Db = "mongodb://localhost:27017"

mongoose.connect(Db).then((res) => {
    console.log(`Db is running`)
}).catch((err) => {
    console.log(err)
})