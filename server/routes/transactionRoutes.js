const transactionRouter = require("express").Router();
const transactionController = require("../controllers/TransactionController");
const authMiddleware = require("../middlewares/auth");
const { checkRoleMerchant, checkRoleCustomer } = require("../middlewares/checkRole");

transactionRouter.get(
    "/",
    authMiddleware,
    transactionController.getAll
);

transactionRouter.get(
    "/customers/:merchantId",
    authMiddleware,
    transactionController.getCustomersByMerchant
);

transactionRouter.post(
    "/create",
    authMiddleware,
    checkRoleCustomer,
    transactionController.create
);

module.exports = transactionRouter