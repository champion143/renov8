const express = require('express')
const router = express.Router();
const User = require('../controller/userController')
const Banner = require('../controller/bannerController')
const Architect = require('../controller/ArchitectController')
const Interior = require('../controller/InteriorController')
const Floor = require('../controller/FloorController')
const Carpenter = require('../controller/CarpenterController')
const { uploadImg } = require('../middleware/fileUpload')
const { auth } = require('../middleware/auth')

/* user api */
router.post('/signUp',uploadImg,User.signUp);
router.post('/login',User.Login);
router.get('/userProfile',auth,User.profile);
router.put('/userEdit',auth,uploadImg,User.Edit);

/* architecture */
router.post('/architecture/create',auth,Architect.create);
router.get('/architecture/get',auth,Architect.get);
router.delete('/architecture/delete',Architect.delete);
router.put('/architecture/edit',Architect.edit);

/* flooring */
router.post('/floor/create',auth,Floor.create);
router.get('/floor/get',auth,Floor.get);
router.delete('/floor/delete',Floor.delete);
router.put('/floor/edit',Floor.edit);

/* carpenter */
router.post('/carpenter/create',auth,Carpenter.create);
router.get('/carpenter/get',auth,Carpenter.get);
router.delete('/carpenter/delete',Carpenter.delete);
router.put('/carpenter/edit',Carpenter.edit);

/* interior */
router.post('/interior/create',auth,Interior.create);
router.get('/interior/get',auth,Interior.get);
router.delete('/interior/delete',Interior.delete);
router.put('/interior/edit',Interior.edit);

/* banner api */
router.post('/banner/create',uploadImg,Banner.create);
router.get('/banner/get',Banner.get);
router.delete('/banner/delete',Banner.delete);
router.put('/banner/edit',uploadImg,Banner.edit);

module.exports = router
