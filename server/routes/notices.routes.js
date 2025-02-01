const express=require("express")
const router=express.Router();
const {createNotice,delNotice, fetchNotice, updateNotice}=require('../controller/noticeController')

router.post('/create',createNotice)
router.delete('/delete/:id',delNotice)
router.get('/fetch',fetchNotice)
router.put('/update/:id',updateNotice)

module.exports=router;
