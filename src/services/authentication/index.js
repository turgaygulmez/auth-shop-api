import DB from "../../models";
import userService from "../user";

const service = {};

service.authenticate = (req, res) => {
  const { userName, password } = req.body;
  
  if (!userName || !password) {
    return res.status(400).send({
      message: "Bad req body"
    });
  }

  userService.getUserByCredential(userName, password).then(user => {
    if (!user) {
      return res.status(401).json({ message: 'Invalid Authentication Credentials' });
    }

    req.session.user = user;
    req.session.save(() => {
      return res.send(user);
    });
  })
};

export default service;
