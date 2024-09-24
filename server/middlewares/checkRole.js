require('dotenv').config();
const MERCHANT_ID = +process.env.MERCHANT_ROLE_ID || 1
const CUSTOMER_ID = +process.env.CUSTOMER_ROLE_ID || 2


 const checkRoleQA = (req, res, next) => {
    try {
        const role = req.user.roleId
        if (role === MERCHANT_ID) {
            next();
        } 
        else {
            return res.status(403).json({ message: 'Access denied', role });
        }
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
}
const checkRoleDev = (req, res, next) => {
    try {
        const role = req.user.roleId
        if (role === CUSTOMER_ID) {
            next();
        } 
        else {
            return res.status(403).json({ message: 'Access denied', role });
        }
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
}

module.exports = {checkRoleQA, checkRoleDev}