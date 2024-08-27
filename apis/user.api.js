// user.api.js - 用户路由模块

const express = require("express");
const router = express.Router();

// 主页路由
router.get("/", (req, res) => {
  res.send("用户首页");
});

// “关于页面”路由
router.get("/about", (req, res) => {
  res.send("关于用户");
});

module.exports = router;