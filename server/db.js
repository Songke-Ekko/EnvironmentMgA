const mongoose = require("mongoose")
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost/songke';
const dbName = 'songke';

mongoose.connect(url,{useNewUrlParser: true})

const db = mongoose.connection
db.once('error',()=> console.log("数据库连接失败"))
db.once('open',()=> console.log("数据库连接成功"))

// MongoClient.connect(url, function(err, client) {
//     assert.equal(null, err);
//     const db = client.db(dbName);
//     findDocuments(db)
//     client.close();
// });

// const findDocuments = function (db) {
//     const collection = db.collection('Treess');
//     collection.find({}).toArray(function(err, docs) {
//         assert.equal(err, null);
//         return docs
//     });
// }

// user用户信息表
const userSchema = new mongoose.Schema({
    name: String,
    password: String, 
    password1: String,
    type: String,    // 1.管理员  2.普通用户
    token: String,
    studentNumber: Number
})


// user用户操作表
const userOPSchema = new mongoose.Schema({
    studentNumber: Number,
    name: String,
    operation: String,
    time: String
})


// 树种信息表
const TreesSchema = new mongoose.Schema({
    number: Number,
    type: String,
    age: Number,
    date: String,
    height: Number,
    diameter: Number
})


// 花丛信息表
const FlowersSchema = new mongoose.Schema({
    number: Number,
    type: String,
    date: String,
    acreage: Number,
    perimeter: Number,
    position: String
})


// 草坪信息表
const GlassesSchema = new mongoose.Schema({
    number: Number,
    type: String,
    date: String,
    acreage: Number,
    perimeter: Number,
    position: String
})


const Models = {
    User: mongoose.model('User',userSchema),
    UserOP: mongoose.model('UserOP',userOPSchema),
    Trees: mongoose.model('Trees',TreesSchema),
    Flowers: mongoose.model('Flowers',FlowersSchema),
    Glasses: mongoose.model('Glasses',GlassesSchema)
}


// 树种信息表
// router.get('/admin/getTrees',(req,res)=>{})

module.exports = Models




 



