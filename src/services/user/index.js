import baseService from "../base";
import DB from "../../models";

const service = {};

service.create = (req, res) => {
  const { userName, password } = req.body;
  
  if (!userName || !password) {
    res.status(400).send({
        message: "Bad req body"
    });

    return;
  }

  baseService.create(req, res, "users");
};

service.delete = (req, res) => {
  baseService.delete(req, res, "users");
};

service.getBasket = (req, res) => {
  const { id } = req.params;

  DB.baskets.findAll({ 
    where: { userId: id },   
    include: [
      {
        model: DB.products
      }
   ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving baskets."
      });
    });
}

service.getUserByCredential = (userName, password) => {
  return new Promise((resolve, reject) => {
    DB.users.findOne({ where: { userName, password } })
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });
  });
};

export default service;