import baseService from "../base";
import DB from "../../models";
const Op = DB.Sequelize.Op;

const service = {};

service.create = (req, res) => {
  const { name, description, productTypeId } = req.body;
  
  if (!name || !description || !productTypeId) {
    res.status(400).send({
      message: "Bad req body"
    });

    return;
  }

  baseService.create(req, res, "products");
};

service.delete = (req, res) => {
  baseService.delete(req, res, "products");
};

service.getAll = (req, res) => {
  const { limit, search, type } = req.query;
  let condition = {};

  if (type) {
    condition = {
      ...condition,
      productTypeId: parseInt(type)
    }
  }

  if (search) {
    condition = {
      ...condition,
      name: { [Op.like]: `%${search}%` }
    }
  }

  DB.products.findAll({ limit: parseInt(limit), where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    });
};

export default service;