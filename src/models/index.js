import Sequelize from 'sequelize';
import dbConfig from '../config'

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.baskets = require("./basket")(sequelize, Sequelize);
db.products = require("./product")(sequelize, Sequelize);
db.productTypes = require("./productType")(sequelize, Sequelize);
db.users = require("./user")(sequelize, Sequelize);

db.products.hasMany(db.baskets);
db.baskets.belongsTo(db.products);

db.users.hasMany(db.baskets);
db.baskets.belongsTo(db.users);

db.productTypes.hasMany(db.products);
db.products.belongsTo(db.productTypes);

module.exports = db;