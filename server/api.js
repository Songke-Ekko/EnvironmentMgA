'use strict'
const db = require("./db.js")
const express = require("express")
const router = express.Router()
const app = express()
const jwt = require("jsonwebtoken")
const path = require("path")
const fs = require("fs")
const md5 = require("md5")

function userOperation(c,b,d) {
    let userOP = new db.UserOP({
        studentNumber: d,
        name: c,
        operation: b,
        time: new Date().toLocaleString()
    })
    userOP.save(function () {})
}


// 注册
router.post('/admin/regist',(req,res)=>{
    db.User.find({name:req.body.name},(err,data)=>{
        if ( err ) {
            res.send(err)
            return
        } 
        if ( data.length > 0 ) {
            res.send({'status': 0,'msg': "用户名已经注册"})
        }else{
            let newUser = new db.User({
                name:req.body.name,
                password: md5(req.body.password),
                password1: md5(req.body.password1),
                type: 2
            });
            newUser.save(function (err) {
                if (err) {
                    res.send(err)
                } else {
                    res.send({'status':1,'msg':'注册成功'})
                }
            })
        }
    })
})


// 登录
router.post('/admin/login',(req,res)=>{
    db.User.find({
        name:req.body.name,
        password: md5(req.body.password)
    },(err,data)=>{
        if ( err ) {
            res.send(err)
            return
        } 
        if( data.length > 0 ){
            let content = {name: req.body.name}
            let key  = 'aaa'
            let token = jwt.sign(content,key,{
                expiresIn: 86400
            })

            data[0].token = token
            data[0].studentNumber = req.body.studentNumber
            db.User(data[0]).save(function (err) {
                if ( err ) {
                    res.send(err)
                    return
                }
                res.send({
                    'status': 1,
                    'msg': '登录成功',
                    'token': data[0].token,
                    'user_name': data[0]["name"],
                    'type': data[0],
                    'studentNumber': data[0].studentNumber
                }) 
            })
        } else{
            res.send({ 'status':0,'msg':'登录失败'})
        }
    })
})


// 退出
router.post('/admin/signOut',(req,res)=>{
    db.User.find({name: req.body.name,token: req.body.token},(err,data)=>{
        if ( err ) {
            return 
        } 
        if( data.length > 0 ){
            data[0].token = ''
            db.User(data[0]).save(function (err) {
                if ( err ) {
                    res.status(500).send()
                    return 
                } 
                res.send({'status':1,'msg':'退出成功'})
            })
        }else{
            res.send({'status': 0,'msg':'退出失败'})
        }
    })
})


// 修改密码
router.post('/admin/editpsw',(req,res)=>{
    db.User.updateOne(
        {name:req.body.username},{
            $set: {
                name: req.body.username,
                password: md5(req.body.newPassword),
                password1: md5(req.body.newPassword1)
            }
        },function (err) {
            if ( err ) {
                res.send(err)
            } else {
                res.send({"msg": "修改成功"})
            }
        }
    )
})


// 添加树种
router.post('/admin/addTrees',(req,res)=>{
    let newTrees = new db.Trees({
        number: req.body.number,
        type: req.body.type,
        age: req.body.age,
        date:　req.body.date,
        height: req.body.height,
        diameter: req.body.diameter
    })
    db.Trees.find({number: req.body.number},function (err,data) {
        if ( err ) {
            res.send(err)
            return 
        }else{
            if ( data.length > 0 ) {
                res.send({'msg': "此编号已被使用"})
            } else {
                newTrees.save(function (err) {
                    if ( err ) {
                        res.send(err)
                    } else {
                        res.send({'status':1,'msg':'添加成功'})
                        let c = req.body.username
                        let b = '添加树种操作'
                        let d = req.body.studentNumber
                        userOperation(c,b,d)
                    }
                })
            }
        }
    }) 
    
})


// 查询树种
router.get('/admin/getTrees',(req,res)=>{
    db.Trees.find().skip((req.query.page - 1) * req.query.limit).limit(req.query.limit * 1).exec(function (err,data) {
        if ( err ) {
            res.send({
                "code": 1,
                "msg": "数据异常",
                "count": 10,
                "data": null
            })
        }else{
            res.send({
                "code": 0,
                "msg": "数据正常",
                "count": 10,
                "data": data
            })
        }
    })
})


// 编辑树种
router.post('/admin/editTrees',(req,res)=>{
    db.Trees.updateOne(
        {_id:req.body._id},{
            $set: {
                number: req.body.number,
                type: req.body.type,
                age: req.body.age,
                date: req.body.date,
                height: req.body.height,
                diameter: req.body.diameter
            }
        },function (err) {
            if ( err ) {
                res.send(err)
            } else {
                res.send({"msg": "修改成功"})
                let c = req.body.username
                let b = '修改树种操作'
                let d = req.body.studentNumber
                userOperation(c,b,d)
            }
        }
    )
})


// 删除树种
router.post('/admin/deleteTrees',(req,res)=>{
    db.Trees.deleteOne({_id: req.body._id},function (err) {
        if ( err ) {
            res.send(err)
        } else {
            res.send({"msg": "删除成功"})
            let c = req.body.username
            let b = '删除树种操作'
            let d = req.body.studentNumber
            userOperation(c,b,d)
        }
    })
})


// 添加花丛
router.post('/admin/addFlowers',(req,res)=>{
    let newFlowers = new db.Flowers({
        number: req.body.number,
        type: req.body.type,
        date: req.body.date,
        acreage: req.body.acreage,
        perimeter: req.body.perimeter,
        position:　req.body.position
    })
    db.Flowers.find({number: req.body.number},function (err,data) {
        if ( err ) {
            res.send(err)
            return 
        }else{
            if ( data.length > 0 ) {
                res.send({'msg': "此编号已被使用"})
            } else {
                newFlowers.save(function (err) {
                    if ( err ) {
                        res.send(err)
                    } else {
                        res.send({'status':1,'msg':'添加成功'})
                        let c = req.body.username
                        let b = '添加花丛操作'
                        let d = req.body.studentNumber
                        userOperation(c,b,d)
                    }
                })
            }
        }
    }) 
    
})


// 查询花丛
router.get('/admin/getFlowers',(req,res)=>{
    db.Flowers.find().skip((req.query.page - 1) * req.query.limit).limit(req.query.limit * 1).exec(function (err,data) {
        if ( err ) {
            res.send({
                "code": 1,
                "msg": "数据异常",
                "count": 10,
                "data": null
            })
        }else{
            res.send({
                "code": 0,
                "msg": "数据正常",
                "count": 10,
                "data": data
            })
        }
    })
})


// 编辑花丛
router.post('/admin/editFlowers',(req,res)=>{
    db.Flowers.updateOne(
        {_id:req.body._id},{
            $set: {
                number: req.body.number,
                type: req.body.type,
                date: req.body.date,
                acreage: req.body.acreage,
                perimeter: req.body.perimeter,
                position:　req.body.position
            }
        },function (err) {
            if ( err ) {
                res.send(err)
            } else {
                res.send({"msg": "修改成功"})
                let c = req.body.username
                let b = '修改花丛操作'
                let d = req.body.studentNumber
                userOperation(c,b,d)
            }
        }
    )
})


// 删除花丛
router.post('/admin/deleteFlowers',(req,res)=>{
    db.Flowers.deleteOne({_id: req.body._id},function (err) {
        if ( err ) {
            res.send(err)
        } else {
            res.send({"msg": "删除成功"})
            let c = req.body.username
            let b = '删除花丛操作'
            let d = req.body.studentNumber
            userOperation(c,b,d)
        }
    })
})


// 添加草坪
router.post('/admin/addGlasses',(req,res)=>{
    let newGlasses = new db.Glasses({
        number: req.body.number,
        type: req.body.type,
        date: req.body.date,
        acreage: req.body.acreage,
        perimeter: req.body.perimeter,
        position:　req.body.position
    })
    db.Glasses.find({number: req.body.number},function (err,data) {
        if ( err ) {
            res.send(err)
            return 
        }else{
            if ( data.length > 0 ) {
                res.send({'msg': "此编号已被使用"})
            } else {
                newGlasses.save(function (err) {
                    if ( err ) {
                        res.send(err)
                    } else {
                        res.send({'status':1,'msg':'添加成功'})
                        let c = req.body.username
                        let b = '添加草坪操作'
                        let d = req.body.studentNumber
                        userOperation(c,b,d)
                    }
                })
            }
        }
    }) 
    
})


// 查询草坪
router.get('/admin/getGlasses',(req,res)=>{
    db.Glasses.find().skip((req.query.page - 1) * req.query.limit).limit(req.query.limit * 1).exec(function (err,data) {
        if ( err ) {
            res.send({
                "code": 1,
                "msg": "数据异常",
                "count": 10,
                "data": null
            })
        }else{
            res.send({
                "code": 0,
                "msg": "数据正常",
                "count": 10,
                "data": data
            })
        }
    })
})


// 编辑草坪
router.post('/admin/editGlasses',(req,res)=>{
    db.Glasses.updateOne(
        {_id:req.body._id},{
            $set: {
                number: req.body.number,
                type: req.body.type,
                date: req.body.date,
                acreage: req.body.acreage,
                perimeter: req.body.perimeter,
                position:　req.body.position
            }
        },function (err) {
            if ( err ) {
                res.send(err)
            } else {
                res.send({"msg": "修改成功"})
                let c = req.body.username
                let b = '修改草坪操作'
                let d = req.body.studentNumber
                userOperation(c,b,d)
            }
        }
    )
})


// 删除草坪
router.post('/admin/deleteGlasses',(req,res)=>{
    db.Glasses.deleteOne({_id: req.body._id},function (err) {
        if ( err ) {
            res.send(err)
        } else {
            res.send({"msg": "删除成功"})
            let c = req.body.username
            let b = '删除草坪操作'
            let d = req.body.studentNumber
            userOperation(c,b,d)
        }
    })
})


// 查询操作日志
router.get('/admin/getUserOp',(req,res)=>{
    db.UserOP.find().skip((req.query.page - 1) * req.query.limit).limit(req.query.limit * 1).exec(function (err,data) {
        if ( err ) {
            res.send({
                "code": 1,
                "msg": "数据异常",
                "count": 100,
                "data": null
            })
        }else{
            res.send({
                "code": 0,
                "msg": "数据正常",
                "count": 100,
                "data": data
            })
        }
    })
})


module.exports = router;