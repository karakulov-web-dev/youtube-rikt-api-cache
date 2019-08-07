const { FastExpress } = require("@karakulov-web-dev/fast-express");

class TestApiPoint extends FastExpress {
  constructor(port) {
    super(port);
  }
  async test() {
    return JSON.stringify({ status: true });
  }
}

new TestApiPoint(80);
