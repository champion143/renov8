const Floor = require('../services/FloorService')


module.exports.create = (req, res, next) => {
    Floor.create(req.body,req.user).then((result)=>{
        res.json(result)
    })
}

module.exports.get = (req, res, next) => {
    Floor.get(req.user).then((result)=>{
        res.json(result)
    })
}

module.exports.delete = (req, res, next) => {
    Floor.delete(req.body).then((result)=>{
        res.json(result)
    })
}

module.exports.edit = (req, res, next) => {
    Floor.edit(req.body).then((result)=>{
        res.json(result)
    })
}

