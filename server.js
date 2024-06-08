import 'dotenv/config.js'
import express from 'express'
import userRoutes from './routes/user.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import passportUtil from './utils/passport.js'

// express app
const app = express()

app.listen(process.env.PORT, () => {
    console.log('listening to port', process.env.PORT)
})

// middleware
app.use(express.json())
app.use(cookieParser())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.set('trust proxy', 1)
app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
)
passportUtil(app)

// routes
app.use('/user', userRoutes)
