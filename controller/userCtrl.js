const { generateToken } = require("../config/jwtToken");
const User = require("../models/userModel");
const asyncHandler=require("express-async-handler");
const { validateMongoDbId } = require("../utils/validateMongodbid");
const { generateRefreshToken } = require("../config/refreshtoken");



const createUser = asyncHandler(async (req,res) => {
    const email = req.body.email;
    const findUser = await User.findOne({email:email});

    if(!findUser){
        //Create a new user
        const newUser = await User.create(req.body);
        res.json(newUser);
    }
    else{
        throw new Error("User Already Exists");
    }
<<<<<<< HEAD
}
);

const loginUserCrtl=asyncHandler(async(req,res) => {
    const {email,password} = req.body;

    //check if user exists ot not
    const findUser = await User.findOne({email});
    if(findUser && await findUser.isPasswordMatched(password)){
        const refreshToken = await generateRefreshToken(findUser?.id);
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),
        });
    } else {
        throw new Error ("Invalid Credentials");
    }

}); 

//update a user
const updatedUser = asyncHandler(async(req,res) => {
    const {_id} = req.user;
    validateMongoDbId(_id);
    try {
        const updatedUser = await User.findByIdAndUpdate(
            _id,
            {
            firstname:req?.body?.firstname,
            lastname: req?.body?.lastname,
            email: req?.body?.email,
            mobile: req?.body?.mobile,
        },
        {
            new: true,
        });
        res.json(updatedUser);
    } catch (error) {
        throw new Error(error);
    }
});


//Get all users
const getallUser = asyncHandler(async(req,res) =>{
    try {
        const getUsers=await User.find();
        res.json(getUsers);
    } catch (error) {
        throw new Error(error);
    }
});

//Get a single user
const getaUser = asyncHandler(async(req,res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try {
        const getaUser = await User.findById(id);
        res.json({
            getaUser,
        });
    } catch (error) {
        throw new Error (error);
    }
});

//Delete a single user
const deleteaUser = asyncHandler(async(req,res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try {
        const deleteaUser = await User.findByIdAndDelete(id);
        res.json({
            deleteaUser,
        });
    } catch (error) {
        throw new Error (error);
    }
});

//block User
const blockUser = asyncHandler (async(req, res) => {
    const {id}=req.params;
    validateMongoDbId(id);
    try {
        const block= await User.findByIdAndUpdate(
            id,
            {
                isBlocked: true,
            },
            {
                new:true,
            }
        );
        res.json({
            message: "User Blocked"
        });
    } catch (error) {
        throw new Error(error);
    }
});

//Unblock User
const unblockUser = asyncHandler (async(req, res) => {
    const {id}=req.params;
    validateMongoDbId(id);
    try {
        const unblock= await User.findByIdAndUpdate(
            id,
            {
                isBlocked: false,
            },
            {
                new:true,
            }
        );
        res.json({
            message: "User Unblocked"
        });
    } catch (error) {
        throw new Error(error);
    }
});

module.exports={createUser, loginUserCrtl, getallUser, getaUser, deleteaUser, updatedUser, blockUser, unblockUser};
=======
};

module.exports = { createUser};
>>>>>>> b4517706f7acd80ab1d3b2762a91ff9e10d45b8c
