const productRouter = require("express").Router();
const productController = require("../controllers/ProductController");
const authMiddleware = require("../middlewares/auth");
const { checkRoleMerchant } = require("../middlewares/checkRole");


productRouter.get(
    "/",
    authMiddleware,
    productController.getAll
);

productRouter.get(
    "/:id",
    authMiddleware,
    productController.getById
);

productRouter.post(
    "/create",
    authMiddleware,
    checkRoleMerchant,
    productController.create
);

productRouter.put(
    "/update/:id",
    authMiddleware,
    checkRoleMerchant,
    productController.updateById
);

productRouter.delete(
    "/delete/:id",
    authMiddleware,
    checkRoleMerchant,
    productController.deleteById
);


module.exports = productRouter;