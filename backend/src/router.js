const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.status(200).send('O router ta funfando!'));

module.exports = router;