const Banner = require('../models/banner');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.create = (file) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const saveBanner = await Banner.create({
                image:file.filename,
            })
            if(saveBanner)resolve({status:true,message:'Save Successfully......'})
        }catch(e){
            console.log(e)
        }
    })
}

module.exports.get = () => {
    return new Promise(async(resolve,reject)=>{
        try{
            Banner.find({}).then(function (data) {
                resolve({
                    status:true,
                    data:data,
                    message:'success'
                });
            });
        }catch(e){
            console.log(e)
        }
    })
}

module.exports.delete = (req) => {
    return new Promise(async(resolve,reject)=>{
        try{
            Banner.remove({ _id: req.id }, function(err) {
                if (!err) {
                    resolve({status:true,message:'delete Successfully......'})
                }
                else {
                    resolve({status:true,message:'Something Went Wrong......'})
                }
            })
        }catch(e){
            console.log(e)
        }
    })
}

module.exports.edit = (file,body) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const {id} = body;
            const findBanner = await Banner.findOne({_id:id});
            if(findBanner){
                const Edit = await Banner.updateOne({_id:id},{$set:{image:file.filename}})
                resolve({
                    status:true,
                    message:'Edit Successfully'
                });
            }else{
               resolve({status:false,message:'Banner not found'});
            }
        }catch(e){
            console.log(e)
        }
    })
}
