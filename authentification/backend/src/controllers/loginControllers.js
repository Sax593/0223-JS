const models = require("../models");

const login = (req, res) => {
  const { password } = req.body;
  const { email } = req.body;
  models.login
    .findByEmail(email)
    .then(([result]) => {
      if (result[0].hashedPassword == password) {
        console.log(result);
        res.sendStatus(200);
      } else {
        res.send(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const register = (req, res) => {
  const user = req.body;
  models.login
    .insert(user)
    .then((result) => {
      res.sendStatus(200).send(result);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { login, register };
