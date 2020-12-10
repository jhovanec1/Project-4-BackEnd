const express = require("express");
const router = express.Router();

const CarrierModel = require("../models").Carrier;
const OrderModel = require('../models').Order;
const UserModel = require('../models').User;

// GET CARRIER PROFILE
router.get("/profile/:id", async (req, res) => {
  let user = await CarrierModel.findByPk(req.params.id, {
    include: UserModel
  });
  res.json({ user });
});

// GET ALL CARRIER
router.get("/", async (req, res) => {
  let users = await CarrierModel.findAll();
  res.json({ users });
});

// CREATE A NEW CARRIER
router.post("/", async (req, res) => {
  let user = await CarrierModel.create(req.body);
  res.json({ user });
});

// UPDATE A CARRIER
router.put("/:id", async (req, res) => {
  let user = await CarrierModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  res.json({ user });
});

// DELETE A CARRIER
router.delete("/:id", async (req, res) => {
  await CarrierModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `Carrier with id ${req.params.id} was deleted`,
  });
});
module.exports = router;
