const { Signup, Login } = require('../Controllers/AuthController')
const { userVerification } = require("../util/Middleware/AuthMiddleware")
const router = require('express').Router()

router.post('/signup', Signup)
router.post('/login', Login)
router.get("/check-auth", userVerification, (req, res) => {
  res.json({
    authenticated: true,
    user: req.user.username,
  });
});

module.exports = router;