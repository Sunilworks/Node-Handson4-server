const { register, login, home } = require('../controller/userController');
const authMiddleware = require('../middleware/auth')
const userRouter = require('express').Router();


userRouter.post("/",authMiddleware, home);

userRouter.post("/register", register);

userRouter.post("/login", login);

module.exports = {userRouter};