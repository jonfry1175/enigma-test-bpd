const router = require("express").Router();
const userRouter = require("./userRoutes");
const roleRouter = require("./roleRoutes");
const productRouter = require("./productRoutes");


router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.use("/users", userRouter);
router.use("/roles", roleRouter);
router.use("/products", productRouter);


module.exports = router;