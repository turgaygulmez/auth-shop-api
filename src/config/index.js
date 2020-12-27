module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "abcd1234",
  DB: "myshop",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};