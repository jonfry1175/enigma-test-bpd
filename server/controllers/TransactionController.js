const { Transaction, User, Product, Reward } = require('../models');

class TransactionController {

    static async getAll(req, res) {
        try {
            const transactions = await Transaction.findAll({
                include: [
                    {
                        model: User
                    },
                    {
                        model: Product
                    }
                ]
            });
            res.status(200).json(transactions);
        } catch (error) {
            res.status(500).json({ error });
            console.log(error);
        }
    }
    // Get list of customers who bought products from this merchant
    static async getMerchantCustomers(req, res) {
        try {
            const { merchantId } = req.params;

            // Temukan semua transaksi di mana merchant adalah pemilik produk
            const customers = await Transaction.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['id', 'name', 'email'],
                    },
                    {
                        model: Product,
                        where: { merchantId },
                        attributes: [] // Tidak perlu data produk
                    }
                ],
                group: ['Transaction.id', 'User.id'] // Agar tidak duplikasi jika ada beberapa transaksi dari customer yang sama
            });

            res.status(200).json(customers);
        } catch (error) {
            res.status(500).json(error.message)
            console.log(error);
        }
    }

    static async create(req, res) {
        try {
            const { productId, userId } = req.body;

            // Temukan product dan customer
            const product = await Product.findByPk(productId);
            const user = await User.findByPk(userId);

            if (!product || !user) {
                return res.status(404).json({ message: "Product or User not found" });
            }

            // Hitung total harga transaksi dan poin reward yang diperoleh
            const totalPrice = product.price;
            const rewardPointsEarned = Math.floor(totalPrice / 10); // Todo: dapatkan 1 poin untuk setiap 10 unit harga

            // Buat transaksi
            const transaction = await Transaction.create({
                productId,
                userId,
                totalPrice,
                rewardPointsEarned
            });

            // Tambahkan poin reward ke user
            user.rewardsPoint += rewardPointsEarned;
            await user.save();

            res.status(201).json({ transaction, message: `Transaction successful, you earned ${rewardPointsEarned} points` });
        } catch (error) {
            res.status(500).json({ error });
            console.log(error);
        }
    }
}

module.exports = TransactionController;