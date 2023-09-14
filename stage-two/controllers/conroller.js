const asyncHandler = require('express-async-handler');
const User = require('../models/User');


const getPerson = asyncHandler(async(req,res) => {
    try {
        const user = await User.findById(req.params.user_id).select("id name");
        if (!user) {
            return res.status(400).json({message: "No user exist with specified id"})
        }
        res.status(200).json({id: user.id, name: user.name})
    } catch (error) {
        res.status(400).json({message: "Error occured fetching Person"});
    }
} )


const postPerson = asyncHandler( async(req,res) => {
    try {
        let idQuery = await User.findOne({},{},{sort: {'_id': -1}}).select("_id");
        let id;
        let inputPattern = /^[A-Za-z]+$/
        id = idQuery ? ++idQuery._id : 0;
        if (!req.body) {
            return res.status(400).json({message: "Enter a valid update value for name"})
        } else if (typeof req.body.name != 'string' || req.body.name.length < 1) {
            return res.status(400).json({message: "Enter a valid string for name"})
        } else if(!req.body.name.match(inputPattern)) {
            return res.status(400).json({message: "Enter a valid string for name, Special characters not allowed"})
        }

        await User.create({...req.body, _id: id});
        res.status(200).json({message: "Success Posting Person"})
    } catch (error) {
        res.status(400).json({message: "Error occured posting Person"});
    }
})


const deletePerson = asyncHandler(async (req,res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.user_id).exec();

        if (!user) {
            return res.status(400).json({message: "No user exist with specified id"})
        }

        res.status(200).json({message: "User deleted Successfully"})
    } catch (error) {
        res.status(400).json({message: "Error occured fetching Person"})
    }
})

const updatePerson = asyncHandler(async(req,res) => {
    try {
        let id = req.params.user_id;
        let inputPattern = /^[A-Za-z]+$/
        if (!req.body) {
            return res.status(400).json({message: "Enter a valid update value for name"})
        } else if (typeof req.body.name != 'string' || req.body.name.length < 1 ) {
            return res.status(400).json({message: "Enter a valid string for name"})
        } else if (!req.body.name.match(inputPattern)) {
            return res.status(400).json({message: "Enter a valid string for name, Special characters not allowed"})
        }

        let user = await User.findByIdAndUpdate(id,{...req.body});

        if (!user) {
            return res.status(400).json({message: "No user exist with specified id"})
        }
        res.status(200).json({message: "Successfully Updated user"})
    } catch (error) {
        res.status(400).json({message: "Error occured updating Person"})
    }
})



module.exports = {getPerson, deletePerson, updatePerson, postPerson}