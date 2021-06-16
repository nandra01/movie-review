const  authMiddleware = {};
const joi = require('joi');

authMiddleware.validateRegister = (req, res ,next) => {
    const userSchema = joi.object({
        //role: joi.string().required(),
        full_name: joi.string().required(),
        username: joi.string().required(),
        email: joi.string().required(),
        password: joi.string().required(),
        profile_picture:joi.string().required(),
    });

    const { error } = userSchema.validate(req.body);
    if(error) {
        res.status(402).send({
            status:402,
            message:error.details[0].message,
            data: null,
        })
    }
    next();

};

authMiddleware.validateLogin = async (req, res, next) => {
     //validasi input data
     const loginSchema = joi.object({
        email: joi.string().required(),
        password: joi.string().required(),
    })
    const {error} = loginSchema.validate(req.body);
    if(error) {
        res.status(402).send({
            status: 402,
            message: error.details[0].message,
            data: null,
        })
    }

    next();
};

module.exports = authMiddleware;