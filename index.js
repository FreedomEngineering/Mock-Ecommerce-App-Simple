const express = require("express");
const app = express();
const port = process.env.PORT || 1234;

app.use(express.static("dist"));
app.get("*", (req, res) => res.sendFile(__dirname + "/dist/index.html"));

app.listen(port, () => console.log(`App listening on port ${port}!`));
