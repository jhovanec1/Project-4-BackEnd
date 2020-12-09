const express = require("express");
const router = express.Router();

const CarrierModel = require("../models").Carrier;

// GET USERS PROFILE
router.get("/profile/:id", async (req, res) => {
  let user = await CarrierModel.findByPk(req.params.id);
  res.json({ user });
});

// GET ALL USERS
router.get("/", async (req, res) => {
  let users = await CarrierModel.findAll();
  res.json({ users });
});

// CREATE A NEW USER
router.post("/", async (req, res) => {
  let user = await CarrierModel.create(req.body);
  res.json({ user });
});

// UPDATE A USER
router.put("/:id", async (req, res) => {
  let user = await CarrierModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  res.json({ user });
});

// DELETE A USER
router.delete("/:id", async (req, res) => {
  await CarrierModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `Carrier with id ${req.params.id} was deleted`,
  });
});
module.exports = router;
