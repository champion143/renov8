const Architect = require('../services/ArchitectService')


module.exports.create = (req, res, next) => {
    Architect.create(req.body,req.user).then((result)=>{
        res.json(result)
    })
}

module.exports.get = (req, res, next) => {
    Architect.get(req.user).then((result)=>{
        res.json(result)
    })
}

module.exports.delete = (req, res, next) => {
    Architect.delete(req.body).then((result)=>{
        res.json(result)
    })
}

module.exports.edit = (req, res, next) => {
    Architect.edit(req.body).then((result)=>{
        res.json(result)
    })
}

