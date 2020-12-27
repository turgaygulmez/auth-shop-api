import product from "../product";
import user from "../user";

module.exports = (sequelize, Sequelize) => {
  const Basket = sequelize.define("Baskets", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    quantity: {
      type: Sequelize.INTEGER
    }
  });

  return Basket;
};