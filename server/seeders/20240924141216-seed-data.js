'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Seed data for Role
    await queryInterface.bulkInsert('Roles', [
      { name: 'merchant', createdAt: new Date(), updatedAt: new Date() },
      { name: 'customer', createdAt: new Date(), updatedAt: new Date() }
    ], {});

    // Seed data for User
    await queryInterface.bulkInsert('Users', [
      { name: 'John Merchant', email: 'john@merchant.com', password: 'hashedpassword', roleId: 1, rewardsPoint: 0, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jane Customer', email: 'jane@customer.com', password: 'hashedpassword', roleId: 2, rewardsPoint: 50, createdAt: new Date(), updatedAt: new Date() }
    ], {});

    // Seed data for Product
    await queryInterface.bulkInsert('Products', [
      { name: 'T-Shirt', price: 100, merchantId: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jeans', price: 200, merchantId: 1, createdAt: new Date(), updatedAt: new Date() }
    ], {});

    // Seed data for Transaction
    await queryInterface.bulkInsert('Transactions', [
      { totalPrice: 100, productId: 1, userId: 2, rewardPointsEarned: 10, createdAt: new Date(), updatedAt: new Date() },
      { totalPrice: 200, productId: 2, userId: 2, rewardPointsEarned: 20, createdAt: new Date(), updatedAt: new Date() }
    ], {});

    // Seed data for Reward
    await queryInterface.bulkInsert('Rewards', [
      { name: 'Reward A', pointsRequired: 20, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Reward B', pointsRequired: 40, createdAt: new Date(), updatedAt: new Date() }
    ], {});

    // Seed data for Reedem
    await queryInterface.bulkInsert('Reedems', [
      { customerId: 2, rewardId: 1, redeemDate: new Date(), createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Roles', null, {});
    await queryInterface.bulkDelete('Products', null, {});
    await queryInterface.bulkDelete('Transactions', null, {});
    await queryInterface.bulkDelete('Rewards', null, {});
    await queryInterface.bulkDelete('Reedems', null, {});
  }
};
