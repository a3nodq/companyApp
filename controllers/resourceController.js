const Resource = require("../models/resource");
const validationHandler = require('../validations/validationHandler');


exports.index = async (req, res, next) => { 
   try {

    const resources = await Resource.find().sort({ creatAt: - 1});
    res.send(resources);
    
   } catch (err) {
       next(err);  
   }
};

exports.show = async(req, res, next) =>{
    try {

        const resource = await Resource.findOne({
            _id: req.params.id
        });
        
        res.send(resource);
       } catch (err) {
           next(err); 
       }
};

exports.store = async (req, res, next) => {
    try {
        validationHandler(req);
        let resource = new Resource();
        resource.name = req.body.name;
        resource.email = req.body.email;
        resource.major = req.body.major;
        resource.phone = req.body.phone;
        resource.city = req.body.city;
        resource = await resource.save();

        res.send(resource);
        
    } catch (err) {
        next(err);
        
    }
};
exports.update = async(req, res, next) =>{
    try {
        validationHandler(req);
        let resource = await  Resource.findById(req.params.id);
        resource.name = req.body.name;
        resource = await resource.save();

        res.send(resource);
        
    } catch (err) {
        next(err);
        
    }
};

exports.delete = async(req, res, next) =>{
    try {
        
        let resource = await  Resource.findById(req.params.id);
        await resource.delete();

        res.send({message: "success"});
        
    } catch (err) {
        next(err);
        
    }
};

exports.search =  async(req, res, next) => {
    try {
    let resource = await Resource.findOne(req.params);
    return res.send(resource);
        
    } catch (err) {
        next(err);    
    }
    
};