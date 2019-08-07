const proxy = require("http-proxy-middleware");
const express = require("express");
const mcache = require("memory-cache");
const zlib = require("zlib");
const getApiKey = require("./ytbApiKeys");

// time const
const sec = 1000;
const min = sec * 60;
const h = min * 60;

const app = express();
app.use(express.json());

const cacheMiddleware = _ => {
  return (req, res, next) => {
    let cachedBody = mcache.get(req.originalUrl);
    if (cachedBody) {
      res.send(cachedBody);
    } else {
      next();
    }
  };
};
app.use(
  "/youtube/v3",
  cacheMiddleware(),
  proxy({
    target: "https://www.googleapis.com",
    changeOrigin: true,
    pathRewrite: path => {
      return `${path}&key=${getApiKey()}`;
    },
    onProxyRes: (proxyRes, req, res) => {
      let originalBody = new Buffer.alloc(0);
      proxyRes.on("data", function(data) {
        originalBody = Buffer.concat([originalBody, data]);
      });
      proxyRes.on("end", function() {
        const bodyString = zlib.gunzipSync(originalBody).toString("utf8");
        mcache.put(req.originalUrl, bodyString,  h);
      });
    }
  })
);

app.listen(8008);
