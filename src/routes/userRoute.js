const express = require('express');

const router = express.Router();

const authController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const tokenMiddleware = require('../middleware/tokenMiddleware');

router.post(
    '/users/register', 
    authMiddleware.validateRegister, 
    authController.register
);

router.post(
    '/users/login', 
    authMiddleware.validateLogin, 
    authController.login
);

router.get(
    '/users',
    authController.getUsers
);

router.get(
    '/userReview',
    authController.getUsersReviews
);

router.put(
    '/users/update',
    tokenMiddleware.verifyToken,
    authController.updateUser
);

module.exports = router