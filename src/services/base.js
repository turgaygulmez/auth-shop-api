import DB from "../models";

const baseService = {};

baseService.get = (req, res, model) => {
  const dbModel = DB[model];

  if (!dbModel) {
    return res.status(400).send({ message: 'model not found' });
  }

  dbModel.findAll()
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

baseService.create = (req, res, model) => {
  const dbModel = DB[model];

  if (!dbModel) {
    return res.status(400).send({ message: 'model not found' });
  }

  dbModel.create(req.body)
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

baseService.delete = (req, res, model) => {
  const id = req.params.id;
  const dbModel = DB[model];

  if (!dbModel) {
    return res.status(400).send({ message: 'model not found' });
  }

  dbModel.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: `${model} was deleted successfully!`
        });
      } else {
        res.send({
          message: `Cannot delete ${model} with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id =" + id
      });
    });
};

export default baseService;