const Banner = require('../services/bannerService')


module.exports.create = (req, res, next) => {
    Banner.create(req.file).then((result)=>{
        res.json(result)
    })
}

module.exports.get = (req, res, next) => {
    Banner.get().then((result)=>{
        res.json(result)
    })
}

module.exports.delete = (req, res, next) => {
    Banner.delete(req.body).then((result)=>{
        res.json(result)
    })
}

module.exports.edit = (req, res, next) => {
    Banner.edit(req.file,req.body).then((result)=>{
        res.json(result)
    })
}

