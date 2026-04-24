const express = require("express");
const { exec } = require("child_process");
const cors = require("cors");

const app = express();
app.use(cors());

// GET PODS
app.get("/pods", (req, res) => {
  exec("kubectl get pods -o json", (err, stdout) => {
    if (err) return res.send(err);
    res.json(JSON.parse(stdout));
  });
});

// GET SERVICES
app.get("/services", (req, res) => {
  exec("kubectl get svc -o json", (err, stdout) => {
    if (err) return res.send(err);
    res.json(JSON.parse(stdout));
  });
});

// HEALTH CHECK
app.get("/health", (req, res) => {
  exec("kubectl get nodes -o json", (err, stdout) => {
    if (err) return res.send(err);
    res.json({ status: "ok" });
  });
});

app.listen(3000, () => {
  console.log("K8s Dashboard API running on port 3000");
});
