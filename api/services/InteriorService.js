const Interior = require('../models/interior');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.create = (body,auth) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const {id} = auth
            const {sector,room_type,bhk_type,length,breadth,height} = body
            const saveInterior = await Interior.create({
                sector:sector,
                room_type:room_type,
                bhk_type:bhk_type,
                length: length,
                height:height,
                breadth:breadth,
                user_id:id
            })
            if(saveInterior)resolve({status:true,message:'Save Successfully......'})
        }catch(e){
            console.log(e)
        }
    })
}

module.exports.get = (auth) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const {id} = auth;
            Interior.find({user_id:id}).then(function (data) {
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
            Interior.remove({ _id: req.id }, function(err) {
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
            const findInterior = await Interior.findOne({_id:id});
            if(findInterior){
                const {sector,room_type,bhk_type,length,breadth,height} = body
                const Edit = await Interior.updateOne({_id:id},{$set:body})
                resolve({
                    status:true,
                    message:'Edit Successfully'
                });
            }else{
               resolve({status:false,message:'Interior not found'});
            }
        }catch(e){
            console.log(e)
        }
    })
}
