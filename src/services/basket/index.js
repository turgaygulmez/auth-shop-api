import DB from "../../models";
import baseService from "../base";

const service = {};

service.create = (req, res) => {
  const { ProductId, UserId, quantity } = req.body;
  
  if (!ProductId || !UserId || !quantity) {
    res.status(400).send({
      message: "Bad req body"
    });

    return;
  }

  DB.baskets.create(req.body, {
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
          err.message || "Some error occurred while creating."
      });
    });
};

service.delete = (req, res) => {
  baseService.delete(req, res, "baskets");
};

export default service;