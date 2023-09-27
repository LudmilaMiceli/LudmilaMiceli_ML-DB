'use strict';

const productsJSON = require('../../data/productsDataBase.json')

/* El nombre de cada uno dentro del return tiene que coincidir exactamente con las columnas de la tabla */

const products = productsJSON.map(({name, price, discount, description, image, category}) => {
  return {
    name,
    price,
    discount,
    description,
    image,
    categoryId : category === 'visited' ? 1 : 2,
    createdAt : new Date(),
    updatedAt:new Date()
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Products',
    [
      {
      name: 'visited',
      image : null,
      createdAt: new Date(),
      updatedAt:new Date()
      /* isBetaMember: false */
    },
    {
      name: 'in-sale',
      image : null,
      createdAt: new Date(),
      updatedAt:new Date()
    }
  ],
      {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Products', null, {});

  }
};
