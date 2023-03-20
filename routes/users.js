//We configure the routes for instance or call its function (Router)
//this.app alreaady hasn't exist, therefore we use 'router' for each of them

const {Router} = require('express');
const { usersGet, usersPut, usersPost, usersDelete, usersPatch } = require('../controllers/users.controllers');

const router = Router();

//We make the reference call 
router.get('/', usersGet);

//We get 'id' for dinamic call
router.put('/:id', usersPut);

router.post('/', usersPost);
  
router.delete('/', usersDelete);

router.patch('/', usersPatch);



  module.exports = router;