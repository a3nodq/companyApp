const Member = require("../models/members");
const validationHandler = require('../validations/validationHandler');


exports.index = async (req, res, next) => { 
   try {

    const members = await Member.find().sort({ creatAt: - 1});
    res.send(members);
    
   } catch (err) {
       next(err);  
   }
};

exports.show = async(req, res, next) =>{
    try {

        const member = await Member.findOne({
            _id: req.params.id
        });
        
        res.send(member);
       } catch (err) {
           next(err); 
       }
};

exports.store = async (req, res, next) => {
    try {
        validationHandler(req);
        let member = new Member();
        member.username = req.body.username;
        member.email = req.body.email;
        member.major = req.body.major;
       // member.department = req.body.department;
       // member.phon = req.body.phon;
        member = await member.save();

        res.send(member);
        
    } catch (err) {
        next(err);
        
    }
};
exports.update = async(req, res, next) =>{
    try {
        validationHandler(req);
        let member = await  Member.findById(req.params.id);
        member.username = req.body.username;
        member = await member.save();

        res.send(member);
        
    } catch (err) {
        next(err);
        
    }
};

exports.delete = async(req, res, next) =>{
    try {
        
        let member = await  Member.findById(req.params.id);
        await member.delete();

        res.send({message: "success"});
        
    } catch (err) {
        next(err);
        
    }
};