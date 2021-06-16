const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// Require models
const { 
    users: userModel, 
    watchlist: userWatch,
    movies: userMovie,
    review: userReview
} = require('../../models')

const authController = {}

/*
 * Get All data User
 */
authController.getUsers = async (req, res) => {
    try {
        const users = await userModel.findAll({
            include: [{ model: userWatch, include: [{ model: userMovie }] }]
        });

        const getData = {
            statusCode: 200,
            statusText: 'Success',
            message: 'Get all data user',
            data: users
        };
        res.json(getData)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
};

authController.getUsersRelation = async (req, res) => {
    try {
        const usersReview = await userModel.findAll({
            include: [{ userReview }]
        });

        const getData = {
            statusCode: 200,
            statusText: 'Success',
            message: 'Get all data user',
            data: usersReview
        };
        res.json(getData)
    } catch (error) {
        console.log(error)
        res.json(error)
    }
};

/**
 * Create new user
 */
authController.register = async (req, res) => {
    const { username , password } = req.body;

    const existingUser = await userModel.findOne({
        where: {username: username},
    });

    //!handling if usernmae is exist
    if(existingUser !==null) {
        res.status(400).send({
            status:400,
            message: "username already taken",
            data: null
        });
    }

    else {
        const result = await userModel.create({
            ...req.body,
            password: bcrypt.hashSync(password, 10),
        });
       
        user = result.dataValues
        const token = jwt.sign(user, "secret_key")

        res.status(200).send({
            status:200,
            message: "ok",
            data: {
                result,
                token
            }
        })
    }
};

/**
 * Login user 
 */
authController.login = async (req, res) => {
    try {
        let user = await userModel.findOne({
            where: { email: req.body.email }
        });
        if(user == null) {
            res.status(400).send({
                status:400,
                message:"email not exist",
                data:null
            });
        }
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.dataValues.password)
        if(isPasswordMatch) {
            user = user.dataValues;
            delete user.password;
            delete user.role;

            const token = jwt.sign(user, 'secret_key');
        
            res.status(200).send({
                status:200,
                message: "ok",
                data: {
                  token,
                },
            });
        }

        else {
        res.send({status:400, message: `password didn't match`})
        }
        
        }catch (error) {
        console.log(error);
        res.send({status: 500, message:'failed'})
        }
};

/**
 * Edit user profile
 */
authController.updateUser = async (req, res) => {
    try {
        const userId = req.body.id;
 
        const getUserDetails = await userModel.update(req.body,{
             where: {
                 id: userId
             },
         });
         res.send({
             status:200,
             message: `User dengan id : ${userId} berhasil diupdate`,
             data: getUserDetails
         })
    } catch (error) {
         console.log("👾 ~ file: authController.js ~ line 117 ~ authController.updateUser= ~ error", error)
        res.send({
            status:500,
            data:[],
            message:'Gagal mengupdate user'
          })
    }
}
module.exports = authController
