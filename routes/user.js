const express = require('express');

const router = express.Router();
// api/user/all
router.get('/all', (req, res) => {
  res.status(200).json(
    {
      data: [{
        username: 'sohel123',
      }, {
        username: 'user123',
      }],
    },
  );
});
module.exports = router;
