var express = require('express');
var router = express.Router();
const pa = require('./../src/controllers/parkingArea');
const bs = require('./../src/controllers/slotBooking');
const um = require('./../src/controllers/userMethods');
const authenticate = require('./../src/middlewares/authenticate');
const isAuthenticated = require('./../src/middlewares/isAuthenticated');
const passport = require('passport')

/* GET home page. */
router.post('/login', [authenticate.attemptLogin]);
router.post('/parking', isAuthenticated, pa.addParkingArea);
router.post('/addslot', isAuthenticated, bs.updateBookedSlot);
// router.post('/removeslot', isAuthenticated, bs.removeBookedSlots);
router.get('/getbookedslots', isAuthenticated, bs.getBookedSlots);
router.post('/users', um.addUser);

module.exports = router;
