const proxy = require("http-proxy-middleware");
const express = require("express");

const app = express();

app.use(
  "/v3",
  proxy({
    target: "http://localhost",
    changeOrigin: true,
    pathRewrite: path => path.replace(/^\/v3\//, "")
  })
);

app.listen(8008);
