const Carpenter = require('../models/carpenter');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.create = (body,auth) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const {id} = auth
            const {material_type,furniture_type,length,breadth,height} = body
            const saveCarpenter = await Carpenter.create({
                material_type:material_type,
                furniture_type:furniture_type,
                length: length,
                breadth:breadth,
                height:height,
                user_id:id
            })
            if(saveCarpenter)resolve({status:true,message:'Save Successfully......'})
        }catch(e){
            console.log(e)
        }
    })
}

module.exports.get = (auth) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const {id} = auth;
            Carpenter.find({user_id:id}).then(function (data) {
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
            Carpenter.remove({ _id: req.id }, function(err) {
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

module.exports.edit = (body) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const {id} = body;
            const findCarpenter = await Carpenter.findOne({_id:id});
            if(findCarpenter){
                const {material_type,furniture_type,length,breadth,height} = body
                const Edit = await Carpenter.updateOne({_id:id},{$set:body})
                resolve({
                    status:true,
                    message:'Edit Successfully'
                });
            }else{
               resolve({status:false,message:'Carpenter not found'});
            }
        }catch(e){
            console.log(e)
        }
    })
}
