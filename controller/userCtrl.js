const user = require("../models/userModel");

const createUser = async (req,res) => {
    const email = req.body.email;
    const findUser = await user.findOne(email);

    if(!findUser){
        //Create a new user
        const newUser = User.creste(req.body);
        res.json(newUser);
    }
    else{
        res.json(
            {
                msg: "User alredy Exits",
                success: false,
            }
        )
    }
};

module.exports = { createUser};