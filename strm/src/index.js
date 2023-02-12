const express = require("express");
const fs = require("fs");

app = express();

if (!process.env.PORT) {
  throw new Error(
    "Please specify the port number for the HTTP server with the environment variable PORT."
  );
}
const PORT = process.env.PORT;

app.get("/video", (req, res) => {
  const path = "./videos/SampleVideo_1280x720_1mb.mp4";

  fs.stat(path, (err, stats) => {
    if (err) {
      console.error("An error occurred", err);
      res.sendStatus(500);
      return;
    }

    res.writeHead(200, {
      "Content-Length": stats.size,
      "Content-Type": "video/mp4",
    });

    fs.createReadStream(path).pipe(res);
  });
});

app.listen(PORT, () => {
  console.log(`Service listening on port ${PORT}!`);
});
