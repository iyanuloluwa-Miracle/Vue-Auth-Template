const router = require('express').Router();
const authController = require('../controller/authController');


router.get('/', async (req, res,) => {
  res.send({ message: 'Ok api is working 🚀' });
});




router.post('/register', authController.register);
router.post('/signin', authController.signin);
// Define the route for retrieving all users
router.get('/user', authController.getAllUsers);
router.get('/user/:userId', authController.getUserById );
module.exports = router;
