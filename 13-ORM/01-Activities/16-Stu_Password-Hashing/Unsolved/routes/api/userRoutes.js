const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// TODO: Add comments describing the functionality of this `login` route
//Post route for login info
router.post('/login', async (req, res) => {
  try {
    //Gets email from request body and stores it in userData
    const userData = await User.findOne({ where: { email: req.body.email } });
    //If not user data, error message is sent back 
    if (!userData) {
      res.status(404).json({ message: 'Login failed. Please try again!' });
      return;
    }
    //Password in request body is compared with password associated with email and then stored in valid password
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    //Err message sent if login is not accurate 
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }
    
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/create', async (req, res) => {
 try { const newUser = await User.create(req.body);
  res.status(200).json(newUser)
 }
 catch (err) {
  res.status(500).json(err);
 }
})

module.exports = router;
