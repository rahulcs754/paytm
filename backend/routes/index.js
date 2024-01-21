// backend/api/index.js
const express = require("express");
const userRoutes = require("./user.js");
const accountRoutes = require("./account.js");
const router = express.Router();

router.use("/user", userRoutes);
router.use("/account", accountRoutes);

module.exports = router;
