import express from "express"
import { config as dotenvConfig } from "dotenv" 
dotenvConfig(); 
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})