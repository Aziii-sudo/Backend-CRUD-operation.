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
function update(req,res,next){
    Std.findByIdAndUpdate(req.params.id,req.body, (err,std)=>{
        if(err) {
            return res.status(500).send({error: "problem with Updating the student records"})
        };
        res.send({success: "Updated your details"})
    })
}
function remove(req,res,next){
    Std.findByIdAndDelete(req.params.id, (err,std)=>{
        if(err){
            return res.status(500).send({error: "problem with deleting the student records"})
        };
        res.send({success: "student profile deleted "})
    })
}

module.exports.create = create
module.exports.view = view 
module.exports.update = update
module.exports.remove = remove