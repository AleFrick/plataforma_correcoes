const jwt = require('jsonwebtoken');

login = (req, res) => {
  let user = req.body.usuario
  let pass = req.body.senha
  
  if(user == 'alex' && pass == '123'){
    let id = 1
    try{      
      const token = jwt.sign({ id:id }, process.env.SECRET, {
        expiresIn: process.env.EXPIRES
      });
      
      res.status(200).json({ 
        auth: true, token: token
      })
    }catch(e){
      res.status(400).send(e.message)
    }
    
  }else{
    res.status(400).send('usuario ou senha invalidos')
  }
}

module.exports = { login }