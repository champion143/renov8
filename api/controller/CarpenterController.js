const Carpenter = require('../services/CarpenterService')


module.exports.create = (req, res, next) => {
    Carpenter.create(req.body,req.user).then((result)=>{
        res.json(result)
    })
}

module.exports.get = (req, res, next) => {
    Carpenter.get(req.user).then((result)=>{
        res.json(result)
    })
}

module.exports.delete = (req, res, next) => {
    Carpenter.delete(req.body).then((result)=>{
        res.json(result)
    })
}

module.exports.edit = (req, res, next) => {
    Carpenter.edit(req.body).then((result)=>{
        res.json(result)
    })
}

