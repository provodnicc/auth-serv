const express = require("express")
const tokenRouter = require('./routes/token.router')

const PORT = process.env.PORT || 8000
const app = express()
const cors = require('cors')
var corsOptions = {
    origin: 'http://127.0.0.1:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(express.json())
// app.use('', tokenRouter)
app.get('/token',
    (req,res)=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.json({token:"token"})
}
    )
app.listen(PORT, ()=> console.log(`server started on ${PORT}`))