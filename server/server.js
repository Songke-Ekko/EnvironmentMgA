const express = require("express")
const fs = require("fs")
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
const api = require("./api.js")
const session = require("express-session")
const path = require("path")

// 跨域
app.use(cors())

app.use(express.json({limit: '5mb'}))

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}))
app.use(api)

app.listen(3000)
console.log("九尾捕获完成")