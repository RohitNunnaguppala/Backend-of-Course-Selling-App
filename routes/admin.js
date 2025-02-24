const { Router } = require("express");
const { adminMiddleware } = require("../middleware/adminMiddleware");
const adminController = require("../controllers/adminController");

const adminRouter = Router();

adminRouter.post("/signup", adminController.adminSignup);

adminRouter.post("/signin", adminController.adminSignin);

adminRouter.post("/course", adminMiddleware, adminController.createCourse);

adminRouter.put("/course", adminMiddleware, adminController.updateCourse);

adminRouter.delete("/course", adminMiddleware, adminController.deleteCourse);

adminRouter.get("/course/bulk", adminMiddleware, adminController.getAllCourses);

module.exports = {
    adminRouter,
};