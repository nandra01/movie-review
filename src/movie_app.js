const express = require('express')
const cors = require('cors')
const bp = require('body-parser')

const userRouter = require('./routes/userRoute')
const genreRouter = require('./routes/genreRoute')
const charRouter = require('./routes/charRoute')
const movieRouter = require('./routes/movieRoute')

const PORT = process.env.PORT || '3001'

const app = express()

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

app.use(
  cors({
    origin: "https://rocky-beyond-12209.herokuapp.com",
  })
)

app.use('/api', userRouter)
app.use('/api' , genreRouter)
app.use('/api', charRouter) 
app.use('/api', movieRouter) 

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  })