const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.signUp = (body,file) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const {first_name,last_name,email,address,password,mobile} = body
            const hash = await bcrypt.hash(password, 10);
            const findUser = await User.findOne({email:body.email});
            if(findUser){
                resolve({
                    status:false,
                    message:'This email already registered....'
                })
            }else{
                const saveUser = await User.create({
                    first_name:first_name,
                    last_name:last_name,
                    password:hash,
                    email:email,
                    mobile:mobile,
                    address:address,
                    image:file.filename,
                })
                if(saveUser)resolve({status:true,message:'Save Successfully......'})
            }
        }catch(e){
            console.log(e)
        }
    })
}

module.exports.Login = (body) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const {email,password} = body
            const findUser = await User.findOne({email:email});
            if(findUser){
               const Match = await bcrypt.compare(password, findUser.password);
               if(Match){
                const token = jwt.sign({
                  userId: findUser._id,
                }, 'secretKey', { expiresIn: '12h' });
                const data = {
                    userId:findUser.userId,
                    email:findUser.email,
                    image:findUser.image,
                    address:findUser.address,
                    mobile:findUser.mobile,
                }
                resolve({
                    status:true,
                    data:data,
                    token:token,
                    message:'success'
                });
               }
            }else{
                const saveUser = await User.create(body)
                resolve(saveUser)
            }
        }catch(e){
            console.log(e)
        }
    })
}


module.exports.profile = (auth) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const {id} = auth
            const findUser = await User.findOne({_id:id});
            if(findUser){
                const data = {
                    userId:findUser.userId,
                    email:findUser.email,
                    image:findUser.image,
                    address:findUser.address,
                    mobile:findUser.mobile,
                }
                resolve({
                    status:true,
                    data:data,
                    message:'success'
                });
            }else{
               resolve({status:false,message:'user not found'});
            }
        }catch(e){
            console.log(e)
        }
    })
}

module.exports.Edit = (body, auth) => {
    return new Promise(async(resolve,reject)=>{
        try{
            const {first_name,last_name,mobile,image,address} = body;
            const {id} = auth
            const findUser = await User.findOne({_id:id});
            if(findUser){
                const Edit = await User.updateOne({_id:id},{$set:body})
                resolve({
                    status:true,
                    message:'Edit Successfully'
                });
            }else{
               resolve({status:false,message:'user not found'});
            }
        }catch(e){
            console.log(e)
        }
    })
}
