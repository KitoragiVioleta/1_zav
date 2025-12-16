const express = require("express");
const client = require("prom-client");

const app = express();
const PORT = process.env.PORT || 3000;

// default Node.js metrics
client.collectDefaultMetrics();

app.get("/", (req, res) => res.send("Hello, DevOps World!"));

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
