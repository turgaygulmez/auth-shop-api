module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("ProductTypes", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    }
  });

  return Product;
};