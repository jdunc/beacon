

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const fs = require('fs');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-as-promised');

router.post('/register', (req, res, next) => {
  console.log('body', req.body);
  let first_name = (typeof req.body.first_name !== 'undefined') ? req.body.first_name : null;
  let last_name = (typeof req.body.last_name !== 'undefined') ? req.body.last_name : null;
  let email = (typeof req.body.email !== 'undefined') ? req.body.email : null;
  let street = (typeof req.body.street !== 'undefined') ? req.body.street : null;
  let city = (typeof req.body.city !== 'undefined') ? req.body.city : null;
  let state = (typeof req.body.state !== 'undefined') ? req.body.state : null;
  let registration_type = (typeof req.body.registration_type !== 'undefined') ? req.body.registration_type : null;
  let social_id = (typeof req.body.social_id !== 'undefined') ? req.body.social_id : null;
  let password = (typeof req.body.password !== 'undefined') ? req.body.password : null;
  
  knex('users').where('social_id', social_id).select('*').then((resp)=>{
    console.log('searched for user by social_id: ');
    console.log(resp);
    if(resp.length > 0){
      console.log('user already exists');
      resp[0].existingUser = true;
      res.send(resp);
    }else{
      console.log('adding new user');
      knex('users').insert({
        first_name: first_name,
        last_name: last_name,
        email: email,
        street: street,
        city: city,
        state: state,
        registration_type: registration_type,
        social_id: social_id,
        hashed_password: password
      }).returning('*').then(function(resp) {
          resp[0].existingUser = false;
            console.log('added to table: ', resp);
            res.send(resp);
        });
    }
  });
});


module.exports = router;
