const User = require('../services/userService')


module.exports.signUp = (req, res, next) => {
    User.signUp(req.body,req.file).then((result)=>{
        res.json(result)
    })
}

module.exports.Login = (req, res, next) => {
    User.Login(req.body).then((result)=>{
        res.json(result)
    })
}

module.exports.profile = (req, res, next) => {
    User.profile(req.user).then((result)=>{
        res.json(result)
    })
}

module.exports.Edit = (req, res, next) => {
    User.Edit(req.body,req.user).then((result)=>{
        res.json(result)
    })
}
