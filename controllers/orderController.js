const express = require("express");
const router = express.Router();

const OrderModel = require("../models").Order;

// GET USERS PROFILE
// router.get("/profile/:id", async (req, res) => {
//   let user = await CarrierModel.findByPk(req.params.id);
//   res.json({ user });
// });

// GET ALL ORDERS
router.get("/", async (req, res) => {
  let users = await OrderModel.findAll();
  res.json({ users });
});

// CREATE A NEW ORDER
router.post("/", async (req, res) => {
  let user = await OrderModel.create(req.body);
  res.json({ user });
});

// UPDATE A ORDER
router.put("/:id", async (req, res) => {
  let user = await OrderModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  res.json({ user });
});

// DELETE A ORDER
router.delete("/:id", async (req, res) => {
  await OrderModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `Order with id ${req.params.id} was deleted`,
  });
});
module.exports = router;