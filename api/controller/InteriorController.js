const Interior = require('../services/InteriorService')

module.exports.create = (req, res, next) => {
    Interior.create(req.body,req.user).then((result)=>{
        res.json(result)
    })
}

module.exports.get = (req, res, next) => {
    Interior.get(req.user).then((result)=>{
        res.json(result)
    })
}

module.exports.delete = (req, res, next) => {
    Interior.delete(req.body).then((result)=>{
        res.json(result)
    })
}

module.exports.edit = (req, res, next) => {
    Interior.edit(req.body).then((result)=>{
        res.json(result)
    })
}

