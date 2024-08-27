// files.api.js - 文件路由模块

const express = require("express");
const router = express.Router();

// 主页路由
router.get("/", (req, res) => {
  res.send("文件首页");
});

// 列表页面路由
router.get("/list", (req, res) => {
  res.send("文件列表");
});

module.exports = router;