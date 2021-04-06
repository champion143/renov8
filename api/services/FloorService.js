const Floor = require('../models/Floor');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.create = (body,auth) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const {id} = auth
            const {room_type,tile_type,room_area,size} = body
            const saveFloor = await Floor.create({
                room_type:room_type,
                tile_type:tile_type,
                room_area: room_area,
                size:size,
                user_id:id
            })
            if(saveFloor)resolve({status:true,message:'Save Successfully......'})
        }catch(e){
            console.log(e)
        }
    })
}

module.exports.get = (auth) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const {id} = auth;
            Floor.find({user_id:id}).then(function (data) {
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
            Floor.remove({ _id: req.id }, function(err) {
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
            const findFloor = await Floor.findOne({_id:id});
            if(findFloor){
                const {room_type,tile_type,room_area,size} = body
                const Edit = await Floor.updateOne({_id:id},{$set:body})
                resolve({
                    status:true,
                    message:'Edit Successfully'
                });
            }else{
               resolve({status:false,message:'Floor not found'});
            }
        }catch(e){
            console.log(e)
        }
    })
}
