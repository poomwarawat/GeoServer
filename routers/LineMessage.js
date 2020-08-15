const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({ msg: "success" });
});

router.post("/", (req, res) => {
  console.log(req.body);
  console.log(JSON.parse(req.body));
});

module.exports = router;
