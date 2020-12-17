const express = require("express");
const router = express.Router();

const RestaurantModel = require("../models").Restaurant;
const OrderModel = require("../models").Order;
const CarrierModel = require("../models").Carrier;
const UserModel = require("../models").User;

// GET USERS PROFILE
router.get("/profile/:id", async (req, res) => {
  let user = await RestaurantModel.findByPk(req.params.id, {
    include: UserModel
  });
  res.json({ user });
});

// GET ALL USERS
router.get("/", async (req, res) => {
  let users = await RestaurantModel.findAll();
  res.json({ users });
});

// CREATE A NEW USER
router.post("/", async (req, res) => {
  let user = await RestaurantModel.create(req.body);
  res.json({ user });
});

// UPDATE A USER
router.put("/:id", async (req, res) => {
  let user = await RestaurantModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  res.json({ user });
});

// DELETE A USER
router.delete("/:id", async (req, res) => {
  await RestaurantModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `Restaurant with id ${req.params.id} was deleted`,
  });
});
module.exports = router;
