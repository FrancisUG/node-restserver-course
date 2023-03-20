//for use reserved words as 'res' we need import this express library and add response in callback header as 'usersGet' and so on, request for use req and on the header the same
const {response, request} = require ('express');




const usersGet = (req = request, res= response) => {

    //Esto viene del req
    const {q, name, apikey} = req.query;
    res.json({
      msg: 'get API - Controller',
      q,
      name,
      apikey
    });
  }


  const usersPut = (req, res = response)=>{

    //Si tuviéramos mas params desestuc d esta manera, 'req' es lo q se solicita  
    const {id} = req.params;
    
        res.json({
          msg: 'put API EXAMPLE PUT',
          id
        });
  }


  const usersPost = (req, res = response) =>{

    //We use {name, age} to destructure and show only certain field
        const {name, age} = req.body;
    
        res.json({
          msg: 'post API EXAMPLE POST',
          name,
          age

        });
  }


  const usersDelete = (req, res = response) =>{
    
    res.json({
      msg: 'delete API EXAMPLE DELETE',
    });
}

const usersPatch = (req, res = response) =>{
    
    res.json({
      msg: 'patch API EXAMPLE Patch',
    });
}

  //We export a object 
  module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch
  }