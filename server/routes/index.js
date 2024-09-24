const router = require("express").Router();
const userRouter = require("./userRoutes");
const roleRouter = require("./roleRoutes");


router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.use("/users", userRouter);
router.use("/roles", roleRouter);


module.exports = router;