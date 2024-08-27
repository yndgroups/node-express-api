const express = require("express");
const path = require("path");
const app = express();

// 配置静态文件服务
// const options = {
//   dotfiles: "ignore",
//   etag: false,
//   extensions: ["htm", "html"],
//   index: false,
//   maxAge: "1d",
//   redirect: false,
//   setHeaders(res, path, stat) {
//     res.set("x-timestamp", Date.now());
//   },
// };
// app.use(express.static("public", options));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "files")));
app.use(express.static(path.join(__dirname, "uploads")));

// 路由配置
const wiki = require("./apis/wiki.api");
app.use("/wiki", wiki);

const user = require("./apis/user.api");
app.use("/user", user);

const files = require("./apis/files.api");
app.use("/files", files);

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
