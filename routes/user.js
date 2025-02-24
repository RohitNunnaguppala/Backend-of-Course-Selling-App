const { Router } = require("express");
const { userMiddleware } = require("../middleware/userMiddleware");
const userController = require("../controllers/userController");

const userRouter = Router();

userRouter.post("/signup", userController.userSignup);

userRouter.post("/signin", userController.userSignin);

userRouter.post("/signout", userController.userSignout);

userRouter.get("/purchases", userMiddleware, userController.getUserPurchases);

module.exports = {
    userRouter,
};