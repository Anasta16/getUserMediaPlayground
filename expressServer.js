// we need this to run in a localhost context instead of file
// so that we can run enumerateDevices()
// it must be run in a secure context and localhost context counts

const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname)))
app.listen(3000)