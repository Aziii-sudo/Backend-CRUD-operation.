const Std = require ('../models/student');
const mongoose = require('mongoose');


function create(req,res,next){
    let stdName    =req.body.stdName;
    let stdRollno  =req.body.stdRollno;
    let stdClassid =req.body.stdClassid;
    let stdMobile  =req.body.stdMobile;
    let stdClass   =req.body.stdClass;
    let stdDivision =req.body.stdDivision;

    let std = new Std({
        stdName,
        stdRollno,
        stdClassid,
        stdMobile,
        stdClass,
        stdDivision
    })
    std.save().then((data)=>{
        res.send(data)
    })
}

function view (req,res,next){
    Std.find({}).then((data)=>{
        res.send(data)
    })
}

module.exports.create = create
module.exports.view = view 