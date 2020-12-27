import baseService from "../base";

const service = {};

service.create = (req, res) => {
  const { name } = req.body;
  
  if (!name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });

    return;
  }

  baseService.create(req, res, "productTypes");
};

service.delete = (req, res) => {
  baseService.delete(req, res, "productTypes");
};

service.getAll = (req, res) => {
  baseService.get(req, res, "productTypes");
};

export default service;