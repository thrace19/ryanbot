var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index', { title: 'Home' });
});

/* GET commands page. */
router.get('/commands', function(req, res, next) {
    res.render('commands', { title: 'Commands' });
});

/* GET docs page. */
router.get('/docs', function(req, res, next) {
    res.render('docs', { title: 'Docs' });
});

/* GET team page. */
router.get('/team', function(req, res, next) {
    res.render('team', { title: 'Team' });
});

/* GET tos page. */
router.get('/tos', function(req, res, next) {
    res.render('tos', { title: 'Terms Of Service' });
});

/* GET pp page. */
router.get('/privacypolicy', function(req, res, next) {
    res.render('privacypolicy', { title: 'Privacy Policy' });
});

/* GET status page. */
router.get('/status', function(req, res, next) {
    res.render('status', { title: 'Status' });
});

/* GET staff application page. */
router.get('/staff', function(req, res, next) {
    res.render('staff', { title: 'Staff Application' });
});

module.exports = router;