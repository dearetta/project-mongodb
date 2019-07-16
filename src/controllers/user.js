const User = require("../models/user");

module.exports = {
  createUser: (req, res) => {
    User.create([{ name: "Adit", age: 24 , address: "Pasir Muncang"}])
      .then(data => res.send(data))
      .catch(error => res.send(error));
  },
  getAllUsers: (req, res) => {
    User.find({})
      .then(data => res.send(data))
      .catch(error => res.send(error));

    User.findOne({});
  },

  deleteUser: (req, res) => {
    User.deleteOne({
      name: "diandra"
    })
      .then(data => res.send(data))
      .catch(error => res.send(error));
  },

  updateUser: (req, res) => {
    User.findOneAndUpdate({ name: "Adit" }, {age: "30"}, (err, result) => {
        if(err) throw err
        res.send(result)
    })
  }
};
