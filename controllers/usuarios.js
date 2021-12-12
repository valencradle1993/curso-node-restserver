const {response}= require('express');


const usuariosGet = (req, res=response)=> {

    const {asdasd,  apikey,q='hola'}=req.query;
    res.status(403).json({
        msg:'get API - controlador',
        asdasd,apikey,q
    });
  }

const usuariosPut=(req, res=response)=> {
  
  const { id }= req.params.id;
  
  res.json({
      id,
      msg:'put API - controlador'
      
  });
}

const usuariosPost = (req, res=response)=> {
  const {edad,nombre} = req.body;  
  
  res.status(201).json({
        msg:'post API- controlador',
        edad,
        nombre
    });
  }

  const usuariosDelete =(req, res=response)=> {
    res.status(403).json({
        msg:'delete API- controlador'
    });
  }

const usuariosPatch =(req, res=response)=> {
  res.status(403).json({
      msg:'patch API- controlador'
  });
}



  module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch

  }