const asyncHandler = require('express-async-handler');
const User = require('../models/User');


const getPerson = asyncHandler(async(req,res) => {
    try {
        const user = await User.findById(req.params.user_id).select("id name");
        if (!user) {
            return res.status(404).json({message: "User with provided id does not exist"})
        }
        res.status(200).json({id: user.id, name: user.name,message: "Operation successful"})
    } catch (error) {
        res.status(500).json({message: "Error occured fetching Person"});
    }
} )


const postPerson = asyncHandler( async(req,res) => {
    try {
        let idQuery = await User.findOne({},{},{sort: {'_id': -1}}).select("_id");
        let id;
        let inputPattern = /^[A-Za-z]+$/
        id = idQuery ? ++idQuery._id : 1;
        if (!req.body) {
            return res.status(400).json({message: "Enter a valid string for name, Special characters not allowed"})
        } else if (typeof req.body.name != 'string' || req.body.name.length < 1) {
            return res.status(400).json({message: "Enter a valid string for name, Special characters not allowed"})
        } else if(!req.body.name.match(inputPattern)) {
            return res.status(400).json({message: "Enter a valid string for name, Special characters not allowed"})
        }

        await User.create({...req.body, _id: id} );
        res.status(201).json({name: req.body.name, id: id, message: "Operation successful"})
    } catch (error) {
        res.status(400).json({message: "Error occured creating Person"});
    }
})


const deletePerson = asyncHandler(async (req,res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.user_id).exec();

        if (!user) {
            return res.status(400).json({message: "No user exist with specified id"})
        }

        res.status(204).json({})
    } catch (error) {
        res.status(500).json({message: "Error occured fetching Person"})
    }
})

const updatePerson = asyncHandler(async(req,res) => {
    try {
        let id = req.params.user_id;
        let inputPattern = /^[A-Za-z]+$/
        if (!req.body) {
            return res.status(403).json({message: "Enter a valid update value for name, Special characters not allowed"})
        } else if (typeof req.body.name != 'string' || req.body.name.length < 1 ) {
            return res.status(403).json({message: "Enter a valid string for name, Special characters not allowed"})
        } else if (!req.body.name.match(inputPattern)) {
            return res.status(403).json({message: "Enter a valid string for name, Special characters not allowed"})
        }

        let user = await User.findByIdAndUpdate(id,{...req.body});

        if (!user) {
            return res.status(404).json({message: "Person with specified ID does not exist"})
        }
        res.status(200).json({name: req.body.name, id: user._id, message: "Operation successful"})
    } catch (error) {
        res.status(500).json({message: "Error occured updating Person"})
    }
})



module.exports = {getPerson, deletePerson, updatePerson, postPerson}