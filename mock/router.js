const express = require("express")
const router = express.Router()

router.get("/api/list",(req,res)=>{
    res.send([
        {
            name:'smileyqp',
            age:20
        
        },{
            name:'yqp',
            age:22
        }
    ])
})

module.exports = router;