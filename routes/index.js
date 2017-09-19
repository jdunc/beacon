

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  res.render('pages/index');
});

router.get('/home', (req, res, next) => {
  console.log('device: ');
  console.log(req.device.type);
  // res.send(ua);
  if(req.device.type === 'desktop'){
    res.render('pages/home-desktop');
  }
  else if(req.device.type === 'phone'){
    res.render('pages/home-mobile');
  }
});

router.get('/profile', (req, res, next) => {
  console.log('device: ');
  console.log(req.device.type);
  // res.send(ua);
  if(req.device.type === 'desktop'){
    res.render('pages/profile-desktop');
  }
  else if(req.device.type === 'phone'){
    res.render('pages/profile-mobile');
  }
});

router.get('/fb', (req, res, next) => {
  res.render('pages/fblogin');
});


module.exports = router;
