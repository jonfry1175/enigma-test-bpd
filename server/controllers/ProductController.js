const { Product, User } = require('../models');

class ProductController {
    static async getAll(req, res) {
        try {
            const products = await Product.findAll({
                include: [User]
            });
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json({ err });
            console.log(err);
        }
    }

    static async create(req, res) {
        try {
            const { name, price, merchantId } = req.body;
            const newProduct = await Product.create({
                name,
                price,
                merchantId
            });
            res.status(201).json(newProduct);
        } catch (err) {
            res.status(500).json({ err });
            console.log(err);
        }
    }

    static async updateById(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: 'Id not found' });
            }
            // Check if product exists
            const productId = await Product.findOne({ where: { id } });
            if (!productId) {
                return res.status(404).json({ message: 'Product not found' });
            }
            const { name, price } = req.body;
            await Product.update({
                name,
                price
            }, {
                where: { id }
            });

            res.status(200).json({ message: 'Product updated' });
        } catch (err) {
            res.status(500).json({ err });
            console.log(err);
        }
    }

    static async deleteById(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: 'Id not found' });
            }
            // Check if product exists
            const productId = await Product.findOne({ where: { id } });
            if (!productId) {
                return res.status(404).json({ message: 'Product not found' });
            }
            await Product.destroy({ where: { id } });
            res.status(200).json({ message: 'Product deleted' });
        } catch (err) {
            res.status(500).json({ err });
            console.log(err);
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: 'Id not found' });
            }
            // Check if product exists
            const product = await Product.findOne({ where: { id } });
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json({ err });
            console.log(err);
        }
    }

}

module.exports = ProductController