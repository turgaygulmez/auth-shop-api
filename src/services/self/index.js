import DB from "../../models";

const service = {};

service.get = (req, res) => {
  if(req.session.user && req.session.user.userName){
    return res.send(req.session.user);
  } else{
    return res.status(401).json({ message: 'session not found' });
  }
};

service.logout = (req, res) => {
  req.session.destroy(function(err) {
    return res.status(200).send();
  })
};

export default service;
