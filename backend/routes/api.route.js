const router = require('express').Router();
const authController = require('../controller/authController');


router.get('/', async (req, res,) => {
  res.send({ message: 'Ok api is working 🚀' });
});





router.post('/register', authController.register);
router.post('/signin', authController.signin);

module.exports = router;
