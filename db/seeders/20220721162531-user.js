module.exports = {
  async up(queryInterface) {
    const user = ['baga', 'lexa', 'DAGESTAN'];
    const users = user.map((el) => ({
      name: el,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', users);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users');
  },
};
