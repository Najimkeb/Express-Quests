const database=require("./database");
const getUsers = (req, res) => {
  database
    .query("select * from movies")
    .then(([users]) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(200).send("Error retrieving data from database");
    });
};

const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find((user) => user.id === id);

  if (user != null) {
    res.json(user);
  } else {
    res.status(200).send("Not Found");
  }
};

module.exports = {
    getUsers,
  getUsersById,
}