const Architect = require('../models/architect');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.create = (body,auth) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const {id} = auth
            const {structure_type,room_type,bhk_type,length,breadth,height} = body
            const saveArchitect = await Architect.create({
                structure_type:structure_type,
                room_type:room_type,
                bhk_type:bhk_type,
                length: length,
                height:height,
                breadth:breadth,
                user_id:id
            })
            if(saveArchitect)resolve({status:true,message:'Save Successfully......'})
        }catch(e){
            console.log(e)
        }
    })
}

module.exports.get = (auth) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const {id} = auth;
            Architect.find({user_id:id}).then(function (data) {
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
            Architect.remove({ _id: req.id }, function(err) {
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
            const findArchitect = await Architect.findOne({_id:id});
            if(findArchitect){
                const {structure_type,room_type,bhk_type,length,breadth,height} = body
                const Edit = await Architect.updateOne({_id:id},{$set:body})
                resolve({
                    status:true,
                    message:'Edit Successfully'
                });
            }else{
               resolve({status:false,message:'Architect not found'});
            }
        }catch(e){
            console.log(e)
        }
    })
}
