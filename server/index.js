const express = require('express');

const PORT = process.env.PORT || 3022;

const app = express();

app.listen(PORT, () => {
    console.log(`Shrine server is running on port: ${PORT}`);
});
